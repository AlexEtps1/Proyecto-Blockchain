import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'title is required'
    }),
    description: z.string({
        required_error: 'description must be a string'
    }),
    price: z.number({
        required_error: 'price must be a number'
    }),
    date: z.string().datetime().optional(),
})