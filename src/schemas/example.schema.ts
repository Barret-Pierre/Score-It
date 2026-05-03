import { z } from 'zod';

export const exampleSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  score: z.number().min(0).max(100),
});

export type ExampleFormValues = z.infer<typeof exampleSchema>;
