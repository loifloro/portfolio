import { BlogActionMenu } from "./ActionMenu";
import { fetchBlogs } from "utils/actions/blog";
import { kebabCase } from "lodash";
import ArrowLink from "@/components/button/ArrowLink";
import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import React from "react";

export default async function Blogs() {
    const blogs = await fetchBlogs();

    return (
        <Container aria-label="welcome-message" className="px-32">
            <div className="flex justify-between mb-16">
                <Heading
                    element="h2"
                    className="uppercase text-heading-3 leading-heading-3 font-semibold tracking-[.25em]"
                >
                    Blogs
                </Heading>
                <ArrowLink
                    name="Create New Blog"
                    url="/protected/blogs/create"
                />
            </div>
            <ul className="flex flex-col gap-10">
                {blogs?.map(({ id, title, description, isPublished }) => (
                    <li
                        key={id}
                        aria-label={kebabCase(title)}
                        className="flex justify-between items-center"
                    >
                        <div className="flex flex-col gap-1 w-4/6">
                            <Heading
                                element="h3"
                                className="uppercase text-heading-4 leading-heading-4 tracking-heading-4"
                            >
                                {title}
                            </Heading>
                            <p className="text-battleship-gray">
                                {description}
                            </p>
                        </div>
                        <BlogActionMenu id={id} isArchived={!isPublished} />
                    </li>
                ))}
            </ul>
        </Container>
    );
}
