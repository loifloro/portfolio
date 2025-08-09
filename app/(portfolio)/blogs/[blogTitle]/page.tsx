import { fetchBlog } from "utils/actions/blog";
import { isUndefined, lowerCase } from "lodash";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogContent from "./_components/BlogContent";
import Heading from "@/components/display/Heading";
import Image from "next/image";
import React from "react";

type Props = {
    params: Promise<{ blogTitle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blog = await fetchBlog({
        title: {
            equals: lowerCase((await params).blogTitle),
            mode: "insensitive",
        },
    });

    return {
        title: blog?.title,
    };
}

export default async function BlogPage({ params }: Props) {
    const blog = await fetchBlog({
        title: {
            equals: lowerCase((await params).blogTitle),
            mode: "insensitive",
        },
    });

    if (isUndefined(blog)) {
        notFound();
    }

    return (
        <main className="flex flex-col gap-4">
            <section
                aria-labelledby="blog-title"
                className="w-full lg:w-8/12 lg:mx-auto px-4 md:px-8 mt-56 flex flex-col gap-3 lg:gap-4"
            >
                <p className="text-sm font-light font-mono uppercase tracking-wider text-raisin-black">
                    Updated at <time>{blog.updatedAt.toUTCString()}</time>
                </p>
                <Heading
                    id="blog-title"
                    element="h1"
                    className="uppercase overflow-auto text-heading-3 leading-heading-3 lg:leading-heading-2 font-semibold tracking-[.25em] text-rich-black"
                >
                    {blog.title}
                </Heading>
                <p className="text-raisin-black">{blog.description}</p>
            </section>
            <section
                aria-labelledby="blog-header"
                className="relative my-6 md:my-10 lg:my-20 flex justify-end items-end bg-gradient-centered p-10 aspect-[21/9]"
            >
                <Image
                    fill
                    id="blog-header"
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE}/${blog.headerUrl}`}
                    alt={blog.title}
                    quality={100}
                    className="object-cover saturate-50 hover:saturate-100 transition-all duration-300 ease-in-out"
                />
            </section>
            <section className="w-full lg:w-8/12 lg:mx-auto px-4 md:px-8">
                <BlogContent value={blog?.content} />
            </section>
        </main>
    );
}
