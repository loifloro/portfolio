"use server";

import { createBlogSchema } from "utils/schema/blog";
import { createClient } from "utils/supabase/server";
import { kebabCase } from "lodash";
import prisma from "utils/prisma";
import z from "zod";

export async function createBlog(formData: z.infer<typeof createBlogSchema>) {
    try {
        const supabase = await createClient();

        const { content, description, headerImg, title } = formData;

        const { data } = await supabase.storage
            .from("blog-assets")
            .upload(
                `${kebabCase(new Date().toUTCString()).toUpperCase()}`,
                headerImg
            );

        const blog = await prisma.blog.create({
            data: {
                content,
                description,
                title,
                thumbnailUrl: data!.fullPath,
                headerUrl: data!.fullPath,
            },
        });

        return {
            success: true,
            message: "Blog created successfully.",
            data: blog,
        };
    } catch (err) {
        const errorMessage =
            err instanceof Error ? err.message : "An unexpected error occurred";
        console.error("Error:", errorMessage);

        return {
            success: false,
            error: errorMessage,
        };
    }
}
