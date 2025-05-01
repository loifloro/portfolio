"use client";

import { Fragment, useRef, useState } from "react";
import { getProjects } from "utils/project";
import ArrowLink from "./button/ArrowLink";
import Container from "./container/Container";
import GradientLine from "./GradientLine";
import Heading from "./display/Heading";
import Image from "next/image";
import Link from "next/link";
import Subtitle from "./display/Subtitle";
import Tag from "./display/Tag";
import {
    motion,
    useScroll,
    useMotionValueEvent,
    useInView,
} from "motion/react";
import { inRange, isNull } from "lodash";

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
    const itemRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(itemRef);
    const [isShown, setIsShown] = useState(false);
    const projectPage = `projects\/${slug}`;

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", () => {
        if (isNull(itemRef.current)) {
            return;
        }

        if (window.innerWidth > 768) {
            setIsShown(
                inRange(
                    window.innerHeight / 2,
                    itemRef.current.getBoundingClientRect().y - 70,
                    itemRef.current.getBoundingClientRect().y + 70
                )
            );

            return;
        }

        if (window.innerWidth < 640) {
            setIsShown(isInView);
        }
    });

    return (
        <Fragment key={id}>
            <div
                className="flex sm:flex-row flex-col gap-2 justify-between sm:items-center sm:mt-11 my-8 md:max-h-[110px]"
                ref={itemRef}
            >
                <div className="sm:max-w-[55%] mb-10 sm:mb-0">
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
                <Link href={projectPage} className="self-center">
                    <motion.div
                        className={`z-10 md:-mt-14 pointer-events-none`}
                        animate={{ opacity: isShown ? 1 : 0 }}
                        transition={{
                            duration: 2,
                            delay: 0.2,
                            type: "tween",
                        }}
                    >
                        <Image
                            src={`/webp/${slug}/${thumbnailUrl ? thumbnailUrl : "project-img-placeholder.png"}`}
                            alt={name}
                            height={200}
                            width={365}
                            quality={100}
                        />
                    </motion.div>
                </Link>
                <div className="flex sm:flex-col flex-row items-end justify-between gap-8 sm:mt-0 mt-10 w-full sm:w-fit lg:w-[14%]">
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
