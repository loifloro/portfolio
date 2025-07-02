import { Blog } from "types/blog";
import { blogs } from "datasets/blogs";
import ArrowLink from "./button/ArrowLink";
import Container from "./container/Container";
import Heading from "./display/Heading";
import Image from "next/image";
import React from "react";
import Subtitle from "./display/Subtitle";

function BlogItem({ id, thumbnailPath, title, mediumUrl }: Blog) {
    return (
        <div className="flex flex-col w-[300px] md:w-[360px]">
            <p className="font-mono text-raisin-black mb-10">
                {String(id).padStart(2, "0")}
            </p>
            <h4 className="font-light md:w-[90%] line-clamp-2">{title}</h4>
            <div className="relative h-[320px] md:h-[340px] my-5 transition filter brightness-[.3] grayscale hover:grayscale-0 hover:brightness-100 duration-700 ease-in-out">
                <Image
                    src={thumbnailPath}
                    alt=""
                    fill={true}
                    quality={100}
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <ArrowLink name="Read on Medium" url={mediumUrl} />
        </div>
    );
}

export default function Blogs() {
    return (
        <Container fullWidth id="blogs">
            <div className="text-center mb-32">
                <Subtitle>Writings</Subtitle>
                <Heading
                    element="h3"
                    className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-[.25em] text-rich-black"
                >
                    Blogs
                </Heading>
            </div>
            <div className="overflow-auto flex justify-start xl:justify-center max-h-[950px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="text-rich-black flex items-start uppercase">
                    {blogs.map((item) => (
                        <BlogItem
                            key={item.id}
                            id={item.id}
                            thumbnailPath={item.thumbnailPath}
                            mediumUrl={item.mediumUrl}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}
