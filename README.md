# AIgora

Site de notícias sobre IA em português (pt-BR) com agregação automática de RSS e newsletter quinzenal.

**Stack:** Astro + Tailwind CSS + Vercel + MailerLite + GitHub Actions

---

## Setup inicial

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

```bash
cp .env.example .env
# Edite .env e adicione sua API Key do MailerLite
```

### 3. Configurar o formulário da newsletter

Abra `src/components/NewsletterForm.astro` e substitua `SEU_ACCOUNT_ID_AQUI` pela sua API Key do MailerLite.

> No MailerLite: Settings → Integrations → Developer API → Copiar token

### 4. Rodar localmente

```bash
npm run dev
# Abre em http://localhost:4321
```

---

## Atualizar notícias manualmente

```bash
node scripts/fetch-rss.mjs
```

---

## Deploy na Vercel

1. Crie um repositório no GitHub e faça push deste projeto
2. Acesse vercel.com e clique em "Import Project"
3. Selecione o repositório
4. A Vercel detecta Astro automaticamente — clique em Deploy
5. Adicione a variável de ambiente `MAILERLITE_API_KEY` em Settings → Environment Variables

Deploy automático: qualquer push na branch `main` dispara um novo build.

---

## Atualização automática de notícias

O GitHub Actions roda `scripts/fetch-rss.mjs` a cada 6 horas e faz commit dos novos artigos automaticamente. A Vercel detecta o commit e faz o deploy em seguida.

Para adicionar/remover fontes RSS, edite o array `feeds` em `scripts/fetch-rss.mjs`.

---

## Estrutura de pastas

```
src/
├── components/     — Header, Footer, NewsCard, NewsletterForm, CategoryBadge
├── content/
│   └── noticias/  — artigos em Markdown (gerados pelo script RSS)
├── layouts/        — BaseLayout, ArticleLayout
└── pages/          — index, /noticias/[slug], /categoria/[cat], /newsletter

scripts/
└── fetch-rss.mjs  — script de agregação de RSS

.github/workflows/
└── fetch-news.yml — cron job: roda a cada 6h
```
