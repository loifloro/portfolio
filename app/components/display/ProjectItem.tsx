"use client";

import { inRange, isNull } from "lodash";
import {
    useInView,
    useScroll,
    useMotionValueEvent,
    motion,
} from "motion/react";
import Link from "next/link";
import { useRef, useState, Fragment } from "react";
import ArrowLink from "../button/ArrowLink";
import GradientLine from "../GradientLine";
import Heading from "./Heading";
import Image from "next/image";
import Tag from "./Tag";

type RecentProjectItemProps = {
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    thumbnailUrl?: string;
    tags: { id: number; name: string }[];
    slug: string;
};

export default function ProjectItem({
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
    const [isShown, setIsShown] = useState(true);
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

            return;
        }
    });

    return (
        <Fragment key={id}>
            <div
                className="flex sm:flex-row flex-col gap-2 justify-between sm:items-center sm:mt-11 my-8"
                ref={itemRef}
            >
                <div className="sm:w-[55%] mb-10 sm:mb-0">
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
                        className="relative z-10 md:-mt-16 md:left-[95%] lg:left-[unset] md:-translate-x-[50%] lg:-translate-x-0 lg:top-1/2 lg:-translate-y-1/2 pointer-events-none md:max-h-[110px]"
                        animate={{ opacity: isShown ? 1 : 0 }}
                        transition={{
                            duration: 2,
                            delay: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src={`/${slug}/${thumbnailUrl ? thumbnailUrl : "project-img-placeholder.png"}`}
                            alt={name}
                            height={200}
                            width={365}
                            quality={100}
                        />
                    </motion.div>
                </Link>
                <div className="flex sm:flex-col flex-row items-end justify-between gap-8 sm:mt-0 mt-10 w-full sm:w-fit md:w-[14%]">
                    <div className="flex flex-col sm:items-end items-start gap-2">
                        {tags
                            .filter((_, index) => index < 2)
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
