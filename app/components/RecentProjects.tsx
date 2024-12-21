"use client";

import { Fragment, useState } from "react";
import { getProjects } from "utils/project";
import ArrowLink from "./button/ArrowLink";
import Container from "./container/Container";
import GradientLine from "./GradientLine";
import Subtitle from "./display/Subtitle";
import Tag from "./display/Tag";
import Image from "next/image";
import Link from "next/link";

type RecentProjectItemProps = {
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    tags: { id: number; name: string }[];
    slug: string;
};

function RecentProjectItem({
    id,
    name,
    description,
    shortDescription,
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
                id="projects"
                className="flex gap-2 justify-between items-center mt-11 mb-4 md:max-h-[110px] max-h-none"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="max-w-[55%]">
                    <h3 className="uppercase text-rich-black md:text-heading-3 text-heading-4 tracking-widest font-normal mb-2">
                        {name}
                    </h3>
                    <div className="text-battleship-gray font-light text-base">
                        <p className="md:block hidden">{description}</p>
                        <p className="md:hidden block">{shortDescription}</p>
                    </div>
                </div>
                <Link href={projectPage}>
                    <div
                        className={`hidden md:block z-10 -mt-14 transition-opacity ease-in duration-300 ${isShown ? "opacity-100" : "opacity-0"}`}
                    >
                        <Image
                            src="/png/project-img-placeholder.png"
                            alt=""
                            height={200}
                            width={365}
                        />
                    </div>
                </Link>
                <div className="flex flex-col items-end gap-8">
                    <div className="flex flex-col items-end gap-2">
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
        <Container>
            <Subtitle name="Five Most Recent Works" />
            <h3 className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-[20px] text-rich-black mb-24">
                Projects
            </h3>
            {projects.map(
                ({ id, name, description, shortDescription, tags, slug }) => (
                    <RecentProjectItem
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        shortDescription={shortDescription}
                        tags={tags}
                        slug={slug}
                    />
                )
            )}
        </Container>
    );
}
