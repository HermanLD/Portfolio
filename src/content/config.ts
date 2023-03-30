// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const projectCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    links: z.object({
      demo: z.string(),
      github: z.string(),
    }),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectCollection,
};
