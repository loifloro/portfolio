"use client";

import { isUndefined } from "lodash";
import ArrowLink from "app/components/button/ArrowLink";
import Container from "app/components/container/Container";
import Heading from "app/components/display/Heading";
import React from "react";
import Tag from "app/components/display/Tag";
import { useParams } from "next/navigation";

type ProjectHeroProps = {
    name: string;
    tags: { id: number; name: string }[];
    liveUrl?: string;
    githubUrl?: string;
    mainImg: string;
    id: number;
};

export default function ProjectHero({
    name,
    githubUrl,
    liveUrl,
    mainImg,
    tags,
    id,
}: ProjectHeroProps) {
    const { projectName } = useParams();

    return (
        <Container fullWidth withDivider>
            <div
                className="min-h-screen grid items-end sm:p-7 p-4 bg-cover bg-no-repeat bg-center bg-local"
                style={{
                    backgroundImage: `linear-gradient(var(--project-hero-bg-top), var(--project-hero-bg-bottom)), url(/${projectName}/${mainImg})`,
                }}
            >
                <div className="grid sm:grid-cols-2 grid-cols-1 grid-rows-[auto_1fr] justify-end items-end gap-4">
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4 font-grotesk">
                            <p>0{id}</p>
                            <span>/</span>
                            <p>05</p>
                        </div>
                        <div>
                            <Heading
                                element="h1"
                                className="uppercase sm:leading-heading-2 sm:text-heading-2 text-heading-3 leading-heading-3 sm:font-semibold align-middle tracking-widest mt-1"
                            >
                                {name}
                            </Heading>
                        </div>
                    </div>
                    <div className="flex flex-col sm:items-end sm:ml-auto sm:w-4/6 justify-between gap-6">
                        <div className="flex gap-2 flex-wrap sm:flex-row-reverse">
                            {tags.map(({ id, name }) => (
                                <Tag key={id} name={name} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 mt-4 sm:mt-0 sm:items-end text-sm">
                            {!isUndefined(liveUrl) && (
                                <ArrowLink
                                    name="Visit Live Project"
                                    url={liveUrl}
                                />
                            )}
                            {!isUndefined(githubUrl) && (
                                <ArrowLink
                                    name="Visit Live Project"
                                    url={githubUrl}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
