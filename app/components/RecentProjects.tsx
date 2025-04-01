"use client";

import { Fragment, useState } from "react";
import { getProjects } from "utils/project";
import ArrowLink from "./button/ArrowLink";
import Container from "./container/Container";
import GradientLine from "./GradientLine";
import Heading from "./display/Heading";
import Image from "next/image";
import Link from "next/link";
import Subtitle from "./display/Subtitle";
import Tag from "./display/Tag";

type RecentProjectItemProps = {
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    thumbnailUrl?: string;
    tags: { id: number; name: string }[];
    slug: string;
};

function RecentProjectItem({
    id,
    name,
    description,
    shortDescription,
    thumbnailUrl,
    tags,
    slug,
}: RecentProjectItemProps) {
    const [isShown, setIsShown] = useState(false);
    const projectPage = `projects\/${slug}`;

    const handleMouseEnter = () => {
        setIsShown(true);
    };

    const handleMouseLeave = () => {
        setIsShown(false);
    };

    return (
        <Fragment key={id}>
            <div
                className="flex sm:flex-row flex-col gap-2 justify-between items-center sm:mt-11 mt-4 mb-4 md:max-h-[110px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="sm:max-w-[55%]">
                    <Heading
                        element="h4"
                        className="uppercase text-rich-black text-heading-3 tracking-heading-3 sm:font-normal font-medium mb-2"
                    >
                        {name}
                    </Heading>
                    <div className="text-battleship-gray font-light text-base">
                        <p className="lg:block hidden">{description}</p>
                        <p className="lg:hidden block">{shortDescription}</p>
                    </div>
                </div>
                <Link href={projectPage}>
                    <div
                        className={`hidden lg:block z-10 -mt-14 transition-opacity ease-in duration-300 ${isShown ? "opacity-100" : "opacity-0"}`}
                    >
                        <Image
                            src={`/png/${thumbnailUrl ? thumbnailUrl : "project-img-placeholder.png"}`}
                            alt=""
                            height={200}
                            width={365}
                            quality={100}
                        />
                    </div>
                </Link>
                <div className="flex sm:flex-col flex-row items-end justify-between gap-8 sm:mt-0 mt-10 sm:w-fit w-full">
                    <div className="flex flex-col sm:items-end items-start gap-2">
                        {tags
                            .filter(({}, index) => index < 2)
                            .map(({ id, name }) => (
                                <Tag key={id} name={name} />
                            ))}
                    </div>
                    <ArrowLink name="View Project" url={projectPage} />
                </div>
            </div>
            <GradientLine type="space-between" />
        </Fragment>
    );
}

export default function RecentProjects() {
    const projects = getProjects();

    return (
        <Container id="projects">
            <Subtitle>Most Recent Works</Subtitle>
            <Heading
                element="h3"
                className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-[.25em] text-rich-black mb-24"
            >
                Projects
            </Heading>
            {projects.map(
                ({
                    id,
                    name,
                    description,
                    shortDescription,
                    tags,
                    slug,
                    thumbnail,
                }) => (
                    <RecentProjectItem
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        shortDescription={shortDescription}
                        thumbnailUrl={thumbnail}
                        tags={tags}
                        slug={slug}
                    />
                )
            )}
        </Container>
    );
}
