/**
 * AIgora — Script de agregação de notícias via RSS
 * Executado pelo GitHub Actions a cada 6h.
 * Uso manual: node scripts/fetch-rss.mjs
 */

import Parser from 'rss-parser';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '../src/content/noticias');

if (!existsSync(CONTENT_DIR)) {
  mkdirSync(CONTENT_DIR, { recursive: true });
}

const parser = new Parser({ timeout: 10000 });

// Fontes RSS — adicione ou remova feeds aqui
const feeds = [
  { url: 'https://www.anthropic.com/rss.xml',                              categoria: 'claude-anthropic', fonte: 'Anthropic' },
  { url: 'https://openai.com/blog/rss.xml',                                categoria: 'llms',             fonte: 'OpenAI' },
  { url: 'https://blog.google/technology/ai/rss/',                         categoria: 'llms',             fonte: 'Google AI' },
  { url: 'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml', categoria: 'atualizacoes', fonte: 'The Verge AI' },
  { url: 'https://techcrunch.com/category/artificial-intelligence/feed/',  categoria: 'ferramentas',      fonte: 'TechCrunch AI' },
  { url: 'https://venturebeat.com/category/ai/feed/',                      categoria: 'marketing-ia',     fonte: 'VentureBeat AI' },
  { url: 'https://huggingface.co/blog/feed.xml',                           categoria: 'llms',             fonte: 'Hugging Face' },
  { url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed', categoria: 'atualizacoes', fonte: 'MIT Tech Review' },
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

function buildMarkdown({ title, date, categoria, fonte, fonteUrl, resumo }) {
  return `---
title: "${escapeFrontmatter(title)}"
date: ${date}
categoria: "${categoria}"
fonte: "${escapeFrontmatter(fonte)}"
fonteUrl: "${fonteUrl}"
resumo: "${escapeFrontmatter(resumo)}"
destaque: false
---

${resumo}

[Leia o artigo completo em ${fonte}](${fonteUrl})
`;
}

async function run() {
  let saved = 0;
  let skipped = 0;
  let errors = 0;

  for (const feed of feeds) {
    try {
      console.log(`⏳ Buscando: ${feed.fonte}...`);
      const parsed = await parser.parseURL(feed.url);

      for (const item of (parsed.items ?? []).slice(0, 8)) {
        const title = item.title?.trim();
        if (!title) continue;

        const slug = slugify(title);
        if (!slug) continue;

        const filePath = join(CONTENT_DIR, `${slug}.md`);
        if (existsSync(filePath)) { skipped++; continue; }

        const rawDate = item.pubDate ?? item.isoDate ?? new Date().toISOString();
        const date = new Date(rawDate).toISOString().split('T')[0];
        const link = item.link ?? '';
        const raw = item.contentSnippet ?? item.summary ?? item.content ?? '';
        const resumo = stripHtml(raw).substring(0, 220);

        writeFileSync(
          filePath,
          buildMarkdown({ title, date, categoria: feed.categoria, fonte: feed.fonte, fonteUrl: link, resumo }),
          'utf8',
        );
        saved++;
        console.log(`  ✅ ${title.substring(0, 60)}...`);
      }
    } catch (err) {
      console.error(`  ❌ Erro em ${feed.fonte}: ${err.message}`);
      errors++;
    }
  }

  console.log(`\n📊 Resultado: ${saved} novos | ${skipped} já existiam | ${errors} erros`);
  if (saved === 0 && errors === feeds.length) {
    process.exit(1);
  }
}

run();
