/**
 * AIgora — Script de agregação de notícias via RSS
 * Executado pelo GitHub Actions a cada 6h.
 * Uso manual: node scripts/fetch-rss.mjs
 *
 * Regras:
 *  - Só artigos publicados nas últimas 48h
 *  - Máximo 5 novos por rodada (4 rodadas/dia ≈ 20/dia)
 *  - Extrai imagem da feed (media:content, enclosure, primeira <img>)
 */

import Parser from 'rss-parser';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '../src/content/noticias');

if (!existsSync(CONTENT_DIR)) mkdirSync(CONTENT_DIR, { recursive: true });

const MAX_NEW_PER_RUN = 5;
const MAX_AGE_HOURS   = 48;

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

const feeds = [
  { url: 'https://www.anthropic.com/rss.xml',                                  categoria: 'claude-anthropic', fonte: 'Anthropic' },
  { url: 'https://openai.com/blog/rss.xml',                                    categoria: 'llms',             fonte: 'OpenAI' },
  { url: 'https://blog.google/technology/ai/rss/',                             categoria: 'llms',             fonte: 'Google AI' },
  { url: 'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml',  categoria: 'atualizacoes',     fonte: 'The Verge AI' },
  { url: 'https://techcrunch.com/category/artificial-intelligence/feed/',      categoria: 'ferramentas',      fonte: 'TechCrunch AI' },
  { url: 'https://venturebeat.com/category/ai/feed/',                          categoria: 'marketing-ia',     fonte: 'VentureBeat AI' },
  { url: 'https://huggingface.co/blog/feed.xml',                               categoria: 'llms',             fonte: 'Hugging Face' },
  { url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed', categoria: 'atualizacoes',    fonte: 'MIT Tech Review' },
];

function slugify(text) {
  return text
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
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function escapeFrontmatter(str = '') {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function extractImage(item) {
  // media:content
  if (item.mediaContent?.['$']?.url) return item.mediaContent['$'].url;
  if (Array.isArray(item.mediaContent)) {
    const first = item.mediaContent.find(m => m?.['$']?.url);
    if (first) return first['$'].url;
  }
  // media:thumbnail
  if (item.mediaThumbnail?.['$']?.url) return item.mediaThumbnail['$'].url;
  // enclosure
  if (item.enclosure?.url && item.enclosure?.type?.startsWith('image/')) return item.enclosure.url;
  // primeira <img> válida no conteúdo
  const html = item.contentEncoded ?? item.content ?? '';
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (match?.[1] && match[1].length > 10 && !match[1].includes('1x1') && !match[1].includes('pixel')) {
    return match[1];
  }
  return null;
}

function isRecent(dateStr) {
  if (!dateStr) return false;
  const pub = new Date(dateStr);
  if (isNaN(pub.getTime())) return false;
  return pub >= new Date(Date.now() - MAX_AGE_HOURS * 3_600_000);
}

function buildMarkdown({ title, date, categoria, fonte, fonteUrl, resumo, imagem }) {
  const imgLine = imagem ? `\nimagem: "${escapeFrontmatter(imagem)}"` : '';
  return `---
title: "${escapeFrontmatter(title)}"
date: ${date}
categoria: "${categoria}"
fonte: "${escapeFrontmatter(fonte)}"
fonteUrl: "${fonteUrl}"
resumo: "${escapeFrontmatter(resumo)}"
destaque: false${imgLine}
---

${resumo}

[Leia o artigo completo em ${fonte}](${fonteUrl})
`;
}

async function run() {
  let saved = 0, skipped = 0, old = 0, errors = 0;

  for (const feed of feeds) {
    if (saved >= MAX_NEW_PER_RUN) break;

    try {
      console.log(`⏳ ${feed.fonte}...`);
      const parsed = await parser.parseURL(feed.url);

      for (const item of (parsed.items ?? []).slice(0, 10)) {
        if (saved >= MAX_NEW_PER_RUN) break;

        const title = item.title?.trim();
        if (!title) continue;

        const rawDate = item.pubDate ?? item.isoDate ?? '';
        if (!isRecent(rawDate)) { old++; continue; }

        const slug = slugify(title);
        if (!slug) continue;

        const filePath = join(CONTENT_DIR, `${slug}.md`);
        if (existsSync(filePath)) { skipped++; continue; }

        const date   = new Date(rawDate).toISOString().split('T')[0];
        const link   = item.link ?? '';
        const raw    = item.contentSnippet ?? item.summary ?? item.contentEncoded ?? item.content ?? '';
        const resumo = stripHtml(raw).substring(0, 220);
        const imagem = extractImage(item);

        writeFileSync(filePath, buildMarkdown({ title, date, categoria: feed.categoria, fonte: feed.fonte, fonteUrl: link, resumo, imagem }), 'utf8');
        saved++;
        console.log(`  ✅ [${feed.fonte}] ${title.substring(0, 60)}`);
      }
    } catch (err) {
      console.error(`  ❌ ${feed.fonte}: ${err.message}`);
      errors++;
    }
  }

  console.log(`\n📊 ${saved} novos | ${skipped} já existiam | ${old} muito antigos | ${errors} erros`);
  if (saved === 0 && errors === feeds.length) process.exit(1);
}

run();
