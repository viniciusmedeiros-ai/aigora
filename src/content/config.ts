import { z, defineCollection } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categoria: z.enum(['llms', 'ferramentas', 'claude-anthropic', 'marketing-ia', 'atualizacoes', 'tutoriais']),
    fonte: z.string(),
    fonteUrl: z.string().url(),
    resumo: z.string(),
    imagem: z.string().optional(),
    destaque: z.boolean().default(false),
  }),
});

export const collections = { noticias };
