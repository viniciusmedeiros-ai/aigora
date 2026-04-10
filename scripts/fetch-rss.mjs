/**
 * AIgora — Script de agregação de notícias via RSS
 * - Tradução automática via MyMemory API (gratuita)
 * - Múltiplos parágrafos por artigo
 * - URL específica do artigo original
 * - Filtro de palavras-chave por categoria
 * - Limite: 5 por rodada (4x/dia = ~20/dia)
 *
 * Uso: node scripts/fetch-rss.mjs
 * Para popular: MAX_NEW=20 MAX_AGE_HOURS=720 node scripts/fetch-rss.mjs
 */

import Parser from 'rss-parser';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '../src/content/noticias');
if (!existsSync(CONTENT_DIR)) mkdirSync(CONTENT_DIR, { recursive: true });

const MAX_NEW_PER_RUN = parseInt(process.env.MAX_NEW ?? '5');
const MAX_AGE_HOURS   = parseInt(process.env.MAX_AGE_HOURS ?? '48');

// --- Categorias e palavras-chave ---
const CATEGORIES = {
  'claude-code': [
    'claude code', 'claude-code', 'claude cli', 'claude terminal', 'claude cowork',
    'claude desktop', 'mcp server', 'claude agent sdk', 'claude hooks',
  ],
  'claude': [
    'anthropic', 'claude 3', 'claude 4', 'claude sonnet', 'claude opus', 'claude haiku',
    'claude model', 'new claude', 'claude update', 'constitutional ai',
  ],
  'mcps': [
    'mcp', 'model context protocol', 'context protocol', 'mcp server', 'mcp tool',
  ],
  'agents': [
    'agent', 'agentic', 'multi-agent', 'ai agent', 'autonomous agent',
    'tool use', 'function calling', 'skill', 'workflow automation', 'langgraph',
    'langchain', 'crewai', 'autogen',
  ],
  'novas-ias': [
    'new model', 'launches', 'introduces', 'release', 'gpt-5', 'gpt5', 'gemini',
    'llama', 'mistral', 'qwen', 'deepseek', 'grok', 'new ai', 'foundation model',
    'open source model',
  ],
  'atualizacoes': [
    'update', 'upgrade', 'version', 'improvement', 'patch', 'new feature',
    'announcement', 'openai', 'google ai', 'microsoft ai', 'meta ai',
  ],
};

// Palavras que bloqueiam o artigo (fora do tema)
const BLOCKLIST = [
  'recipe', 'cooking', 'sport', 'football', 'soccer', 'basketball', 'celebrity',
  'fashion', 'beauty', 'makeup', 'travel', 'hotel', 'flight', 'cruise',
  'stock market', 'crypto', 'bitcoin', 'nft', 'real estate',
];

// --- Fontes RSS ---
const feeds = [
  // Claude Code, MCPs, Agents, Claude — melhor cobertura técnica do ecossistema
  { url: 'https://simonwillison.net/atom/everything/', fonte: 'Simon Willison' },
  // OpenAI — novas IAs, atualizações
  { url: 'https://openai.com/blog/rss.xml', fonte: 'OpenAI' },
  // Google AI — novas IAs, Gemini
  { url: 'https://blog.google/technology/ai/rss/', fonte: 'Google AI' },
  // The Verge AI — cobertura ampla
  { url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', fonte: 'The Verge AI' },
  // TechCrunch AI — startups e ferramentas
  { url: 'https://techcrunch.com/category/artificial-intelligence/feed/', fonte: 'TechCrunch AI' },
  // VentureBeat AI — enterprise e aplicações
  { url: 'https://venturebeat.com/category/ai/feed/', fonte: 'VentureBeat AI' },
  // Hugging Face — modelos open source, agents
  { url: 'https://huggingface.co/blog/feed.xml', fonte: 'Hugging Face' },
  // LangChain Blog — agents, LangGraph, frameworks
  { url: 'https://blog.langchain.dev/rss/', fonte: 'LangChain Blog' },
  // Ars Technica — cobertura técnica
  { url: 'https://feeds.arstechnica.com/arstechnica/technology-lab', fonte: 'Ars Technica' },
];

const parser = new Parser({
  timeout: 12000,
  customFields: {
    item: [
      ['media:content',   'mediaContent'],
      ['media:thumbnail', 'mediaThumbnail'],
      ['enclosure',       'enclosure'],
      ['content:encoded', 'contentEncoded'],
    ],
  },
});

// --- Helpers ---

function decodeHtmlEntities(text) {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function slugify(text) {
  return decodeHtmlEntities(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 80);
}

function stripHtml(html = '') {
  return html
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/(script|style)>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeFrontmatter(str = '') {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function isRecent(dateStr) {
  if (!dateStr) return false;
  const pub = new Date(dateStr);
  if (isNaN(pub.getTime())) return false;
  return pub >= new Date(Date.now() - MAX_AGE_HOURS * 3_600_000);
}

function isValidArticleUrl(url) {
  if (!url) return false;
  try {
    const u = new URL(url);
    if (u.pathname === '/' || u.pathname === '') return false;
    if (u.pathname.includes('/feed') || u.pathname.includes('/rss')) return false;
    return true;
  } catch { return false; }
}

/** Detecta categoria pelo texto. Retorna a primeira que tiver match, ou null. */
function detectCategory(text) {
  const lower = text.toLowerCase();
  // Bloquear artigos fora do tema
  if (BLOCKLIST.some(w => lower.includes(w))) return null;
  // Verificar categorias por prioridade
  const order = ['claude-code', 'mcps', 'agents', 'claude', 'novas-ias', 'atualizacoes'];
  for (const cat of order) {
    if (CATEGORIES[cat].some(kw => lower.includes(kw))) return cat;
  }
  return null;
}

/** Divide texto em chunks de até maxLen chars sem quebrar palavras */
function chunkText(text, maxLen = 400) {
  const words = text.split(' ');
  const chunks = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).length > maxLen && current.length > 0) {
      chunks.push(current.trim());
      current = word;
    } else {
      current += (current ? ' ' : '') + word;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

/** Traduz texto EN→PT-BR via MyMemory API (gratuita, 50k chars/dia com email) */
async function translate(text) {
  if (!text || text.trim().length < 5) return text;
  const chunks = chunkText(text, 400);
  const results = [];
  for (const chunk of chunks) {
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(chunk)}&langpair=en|pt-BR&de=aigora@aigora.vercel.app`;
      const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
      const data = await res.json();
      if (data.responseStatus === 200 && data.responseData?.translatedText) {
        results.push(data.responseData.translatedText);
      } else {
        results.push(chunk); // fallback: mantém original
      }
    } catch {
      results.push(chunk);
    }
    // Pequena pausa para não sobrecarregar a API
    await new Promise(r => setTimeout(r, 200));
  }
  return results.join(' ');
}

/** Extrai até N parágrafos do conteúdo HTML, com mínimo de caracteres */
function extractParagraphs(html, minLen = 60, maxParagraphs = 4) {
  if (!html) return [];

  // Tenta extrair por tags <p>
  const pTags = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => stripHtml(m[1]).trim())
    .filter(p => p.length >= minLen);

  if (pTags.length >= 2) return pTags.slice(0, maxParagraphs);

  // Fallback: divide por sentenças
  const plain = stripHtml(html);
  const sentences = plain.split(/(?<=[.!?])\s+(?=[A-Z])/);
  const paragraphs = [];
  let buffer = '';
  for (const s of sentences) {
    buffer += (buffer ? ' ' : '') + s;
    if (buffer.length >= 150) {
      paragraphs.push(buffer.trim());
      buffer = '';
      if (paragraphs.length >= maxParagraphs) break;
    }
  }
  if (buffer.length >= minLen) paragraphs.push(buffer.trim());
  return paragraphs.slice(0, maxParagraphs);
}

function extractImage(item) {
  if (item.mediaContent?.['$']?.url) return item.mediaContent['$'].url;
  if (Array.isArray(item.mediaContent)) {
    const first = item.mediaContent.find(m => m?.['$']?.url);
    if (first) return first['$'].url;
  }
  if (item.mediaThumbnail?.['$']?.url) return item.mediaThumbnail['$'].url;
  if (item.enclosure?.url && item.enclosure?.type?.startsWith('image/')) return item.enclosure.url;
  const html = item.contentEncoded ?? item.content ?? '';
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (match?.[1] && match[1].length > 10 && !match[1].includes('1x1') && !match[1].includes('pixel')) {
    return match[1];
  }
  return null;
}

function buildMarkdown({ title, date, categoria, fonte, fonteUrl, resumo, imagem, paragraphs }) {
  const imgLine = imagem ? `\nimagem: "${escapeFrontmatter(imagem)}"` : '';
  const body = paragraphs
    .map(p => p.trim())
    .filter(p => p.length > 30)
    .join('\n\n');

  return `---
title: "${escapeFrontmatter(title)}"
date: ${date}
categoria: "${categoria}"
fonte: "${escapeFrontmatter(fonte)}"
fonteUrl: "${fonteUrl}"
resumo: "${escapeFrontmatter(resumo)}"
destaque: false${imgLine}
---

${body}

---

**Fonte original:** [${fonte}](${fonteUrl})
`;
}

// --- Main ---
async function run() {
  let saved = 0, skipped = 0, old = 0, blocked = 0, errors = 0;

  for (const feed of feeds) {
    if (saved >= MAX_NEW_PER_RUN) break;

    try {
      console.log(`⏳ ${feed.fonte}...`);
      const parsed = await parser.parseURL(feed.url);

      for (const item of (parsed.items ?? []).slice(0, 12)) {
        if (saved >= MAX_NEW_PER_RUN) break;

        const title = item.title?.trim();
        if (!title) continue;

        // Validar data
        const rawDate = item.pubDate ?? item.isoDate ?? '';
        if (!isRecent(rawDate)) { old++; continue; }

        // Validar URL do artigo (específica, não homepage)
        const link = item.link ?? '';
        if (!isValidArticleUrl(link)) { blocked++; continue; }

        // Detectar categoria por palavras-chave
        const contentForDetection = `${title} ${item.contentSnippet ?? ''} ${stripHtml(item.contentEncoded ?? item.content ?? '')}`;
        const categoria = detectCategory(contentForDetection);
        if (!categoria) { blocked++; continue; }

        // Verificar se já existe
        const slug = slugify(title);
        if (!slug) continue;
        const filePath = join(CONTENT_DIR, `${slug}.md`);
        if (existsSync(filePath)) { skipped++; continue; }

        // Extrair parágrafos do conteúdo
        const rawHtml = item.contentEncoded ?? item.content ?? '';
        const rawParagraphs = extractParagraphs(rawHtml, 60, 4);

        // Fallback se não tiver parágrafos suficientes
        if (rawParagraphs.length === 0) {
          const snippet = item.contentSnippet ?? stripHtml(rawHtml);
          if (snippet) rawParagraphs.push(snippet.substring(0, 500));
        }

        // Traduzir título, resumo e parágrafos
        console.log(`  🔄 Traduzindo: ${title.substring(0, 50)}...`);
        const translatedTitle   = await translate(title);
        const rawResumo         = item.contentSnippet ?? rawParagraphs[0] ?? '';
        const translatedResumo  = await translate(rawResumo.substring(0, 300));
        const translatedParagraphs = [];
        for (const p of rawParagraphs) {
          translatedParagraphs.push(await translate(p));
        }

        const date   = new Date(rawDate).toISOString().split('T')[0];
        const imagem = extractImage(item);

        writeFileSync(
          filePath,
          buildMarkdown({
            title: translatedTitle,
            date,
            categoria,
            fonte: feed.fonte,
            fonteUrl: link,
            resumo: translatedResumo,
            imagem,
            paragraphs: translatedParagraphs,
          }),
          'utf8',
        );
        saved++;
        console.log(`  ✅ [${categoria}] ${translatedTitle.substring(0, 55)}`);
      }
    } catch (err) {
      console.error(`  ❌ ${feed.fonte}: ${err.message}`);
      errors++;
    }
  }

  console.log(`\n📊 ${saved} novos | ${skipped} já existiam | ${old} muito antigos | ${blocked} fora do tema | ${errors} erros`);
  if (saved === 0 && errors === feeds.length) process.exit(1);
}

run();
