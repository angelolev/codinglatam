import { defineCollection, z } from "astro:content";

const coursesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.date(),
    figmaLink: z.string(),
    buyLink: z.string(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
    topics: z.array(
      z.object({
        title: z.string(),
      })
    ),
    instructor: z.object({
      name: z.string(),
      description: z.string(),
      picture: z.string(),
      role: z.string(),
      linkedin: z.string(),
    }),
    project: z.object({
      name: z.string(),
      topics: z.array(z.string()),
    }),
  }),
});

const listCollection = defineCollection({
  schema: z.object({
    list: z.array(z.string()),
  }),
});

export const collections = {
  courses: coursesCollection,
  list: listCollection,
};
