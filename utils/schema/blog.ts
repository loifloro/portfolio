import z from "zod";

export const createBlogSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    headerImg: z
        .instanceof(File, { message: "Must be a file" })
        .refine((file) => file.size < 1 * 1024 * 1024, {
            message: "File must be less than 1MB",
        })
        .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
            message: "Only JPEG or PNG allowed",
        }),
    content: z.record(z.string(), z.any()),
});
