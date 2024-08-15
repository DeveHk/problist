import { z } from 'zod';

const hintSchema = z.object({
    value: z.string().min(1, "Add some value"),
});
const formSchema = z.object({
    title: z
        .string()
        .min(3, { message: "Title must be at least 3 characters" }).optional(),
    link: z.string(),
    hints: z.array(hintSchema).optional(),
    topics: z.array(hintSchema).optional(),
    description: z.string(),
    addedDate: z.date(),
});
export { formSchema };

