import { defineCollection, z } from "astro:content";

const coursesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    days: z.string(),
    schedule: z.string(),
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
    price: z.object({
      regular: z.number(),
      discount: z.number(),
    }),
    available: z.boolean(),
    demo: z.string(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repository: z.string(),
  }),
});

export const collections = {
  courses: coursesCollection,
  projects: projectsCollection,
};
