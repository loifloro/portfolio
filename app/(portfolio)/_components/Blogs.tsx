import { Blog } from "@prisma/client";
import { fetchBlogs } from "utils/actions/blog";
import { kebabCase } from "lodash";
import ArrowLink from "@/components/button/ArrowLink";
import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Image from "next/image";
import React from "react";
import Subtitle from "@/components/display/Subtitle";

function BlogItem({
    id,
    thumbnailUrl,
    title,
}: Pick<Blog, "id" | "thumbnailUrl" | "title">) {
    return (
        <div
            aria-label={kebabCase(title)}
            role="list-item"
            className="flex flex-col w-[300px] md:w-[360px]"
        >
            <span
                role="directory"
                className="font-mono text-raisin-black mb-10"
            >
                {String(id).padStart(2, "0")}
            </span>
            <h4 className="font-light md:w-[90%] line-clamp-2">{title}</h4>
            <div className="relative h-[320px] md:h-[340px] my-5 transition filter brightness-[.3] grayscale hover:grayscale-0 hover:brightness-100 duration-700 ease-in-out">
                <Image
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE}/${thumbnailUrl}`}
                    alt={title}
                    fill={true}
                    quality={100}
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <ArrowLink name="Read Blog" url={`blogs/${kebabCase(title)}`} />
        </div>
    );
}

export default async function Blogs() {
    const blogs = await fetchBlogs({ isPublished: true });

    return (
        <Container id="blogs" aria-label="blogs" fullWidth>
            <div className="text-center mb-32">
                <Subtitle>Writings</Subtitle>
                <Heading
                    element="h3"
                    className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-[.25em] text-rich-black"
                >
                    Blogs
                </Heading>
            </div>
            <div className="overflow-auto flex justify-start sm:justify-center max-h-[950px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div
                    role="list"
                    className="text-rich-black flex items-start uppercase"
                >
                    {blogs?.map((item, index) => (
                        <BlogItem
                            key={item.id}
                            id={index + 1}
                            thumbnailUrl={item.thumbnailUrl}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}
