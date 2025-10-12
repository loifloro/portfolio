"use server";

import { cache } from "react";
import { createBlogSchema, updateBlogSchema } from "utils/schema/blog";
import { createClient } from "utils/supabase/server";
import { isUndefined, kebabCase } from "lodash";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "utils/prisma";
import z from "zod";

export const fetchBlog = cache(async (props: Prisma.BlogWhereInput = {}) => {
    try {
        return await prisma.blog.findFirstOrThrow({ where: props });
    } catch (error) {
        console.error(error);
    }
});

export async function fetchBlogs(props: Prisma.BlogWhereInput = {}) {
    try {
        return await prisma.blog.findMany({ where: props });
    } catch (error) {
        console.error(error);
    }
}

export async function createBlog(formData: z.infer<typeof createBlogSchema>) {
    try {
        const supabase = await createClient();

        const {
            content,
            description,
            headerImg,
            title,
            thumbnailImg,
            isPublished,
        } = formData;

        const { data: headerData } = await supabase.storage
            .from(process.env.BLOG_ASSETS_STORAGE!)
            .upload(
                `${kebabCase(new Date().toUTCString()).toUpperCase()}`,
                headerImg
            );

        const { data: thumbnailData } = await supabase.storage
            .from(process.env.BLOG_ASSETS_STORAGE!)
            .upload(
                `${kebabCase(new Date().toUTCString()).toUpperCase()}`,
                thumbnailImg
            );

        const blog = await prisma.blog.create({
            data: {
                content,
                description,
                title,
                thumbnailUrl: thumbnailData!.fullPath,
                headerUrl: headerData!.fullPath,
                isPublished,
            },
        });

        revalidatePath("/");

        return {
            success: true,
            message: "Blog created successfully.",
            data: blog,
        };
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : "An unexpected error occurred";

        console.error("Error:", errorMessage);

        return {
            success: false,
            message: errorMessage,
        };
    }
}

export async function archiveBlog(id: number) {
    try {
        await prisma.blog.update({
            where: { id },
            data: { isPublished: false },
        });

        revalidatePath("/");

        return {
            success: true,
            message: "Blog archived successfully.",
        };
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : "An unexpected error occurred";

        console.error("Error:", errorMessage);

        return {
            success: false,
            message: errorMessage,
        };
    }
}

export async function unarchiveBlog(id: number) {
    try {
        await prisma.blog.update({
            where: { id },
            data: { isPublished: true },
        });

        revalidatePath("/");

        return {
            success: true,
            message: "Blog unarchive successfully.",
        };
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : "An unexpected error occurred";

        console.error("Error:", errorMessage);

        return {
            success: false,
            message: errorMessage,
        };
    }
}

export async function deleteBlog(id: number) {
    try {
        await prisma.blog.update({
            where: { id },
            data: { isTrashed: true, deletedAt: new Date() },
        });

        revalidatePath("/");

        return {
            success: true,
            message: "Blog deleted successfully.",
        };
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : "An unexpected error occurred";

        console.error("Error:", errorMessage);

        return {
            success: false,
            message: errorMessage,
        };
    }
}

export async function updateBlog(formData: z.infer<typeof updateBlogSchema>) {
    try {
        const supabase = await createClient();
        let headerData;
        let thumbnailData;

        const {
            content,
            description,
            headerImg,
            title,
            thumbnailImg,
            headerImgUrl,
            thumbnailImgUrl,
            isPublished,
            id,
        } = formData;

        if (!isUndefined(headerImg)) {
            await supabase.storage
                .from(process.env.BLOG_ASSETS_STORAGE!)
                .remove([headerImgUrl.split("/")[1]]);

            const { data: _headerData } = await supabase.storage
                .from(process.env.BLOG_ASSETS_STORAGE!)
                .upload(
                    `${kebabCase(new Date().toUTCString()).toUpperCase()}`,
                    headerImg
                );

            headerData = _headerData;
        }

        if (!isUndefined(thumbnailImg)) {
            await supabase.storage
                .from(process.env.BLOG_ASSETS_STORAGE!)
                .remove([thumbnailImgUrl.split("/")[1]]);

            const { data: _thumbnailData } = await supabase.storage
                .from(process.env.BLOG_ASSETS_STORAGE!)
                .upload(
                    `${kebabCase(new Date().toUTCString()).toUpperCase()}`,
                    thumbnailImg
                );

            thumbnailData = _thumbnailData;
        }

        const blog = await prisma.blog.update({
            where: {
                id,
            },
            data: {
                content,
                description,
                title,
                ...(!isUndefined(thumbnailData) && {
                    thumbnailUrl: thumbnailData!.fullPath,
                }),
                ...(!isUndefined(headerData) && {
                    headerUrl: headerData!.fullPath,
                }),
                isPublished,
            },
        });

        revalidatePath("/");

        return {
            success: true,
            message: "Blog updated successfully.",
            data: blog,
        };
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : "An unexpected error occurred";

        console.error("Error:", errorMessage);

        return {
            success: false,
            message: errorMessage,
        };
    }
}
