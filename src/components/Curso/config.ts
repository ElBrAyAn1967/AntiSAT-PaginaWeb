import { defineCollection } from "astro:content";
import { z } from 'zod';

// z -> zod schema
const Curso = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
  })
})

export const collections = { Curso }