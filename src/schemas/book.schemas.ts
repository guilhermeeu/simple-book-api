import { z } from "zod";

export const deleteBookSchema = z.object({
  bookDocId: z.string(),
});
