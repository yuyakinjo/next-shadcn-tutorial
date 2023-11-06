import { z } from 'zod';
import { randomUUID } from 'crypto'; // create uuid using cypto

export const TodoSchema = z.object({
  id: z.string().uuid().default(randomUUID()),
  title: z.string().min(3).max(100),
  description: z.string().min(1).max(100),
  completed: z
    .preprocess((input) => JSON.parse(`${input}`), z.boolean())
    .default(false),
});
