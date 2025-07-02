"use client";

import { isUndefined } from "lodash";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { navigationBarItems } from "datasets/navigation";
import { useState } from "react";
import ArrowLink from "../button/ArrowLink";
import clsx from "clsx";
import GradientLine from "../GradientLine";
import Link from "next/link";
import Logo from "../Logo";
import MobileNavigation from "./MobileNavigation";

type HeaderItemProps = {
    name: string;
    isComingSoon?: boolean;
    url: string;
};

function HeaderItem({ name, isComingSoon = false, url }: HeaderItemProps) {
    return (
        <nav>
            <Link
                href={url}
                className="text-sm uppercase font-light tracking-widest text-rich-black relative"
            >
                <li
                    className={`inline-block ${isComingSoon && "pointer-events-none text-battleship-gray before:w-[calc(100%+20px)] before:h-[.6px] before:bg-battleship-gray before:relative before:block before:right-3 before:top-3"}`}
                >
                    {name}
                </li>
                {isComingSoon && (
                    <span className="min-w-max absolute float-right font-mono font-thin text-xs bottom-4">
                        Coming Soon!
                    </span>
                )}
            </Link>
        </nav>
    );
}

export default function Header() {
    const { scrollY } = useScroll();
    const [isShown, setIsShown] = useState(true);

    const variants = {
        shown: {
            top: 0,
        },
        hidden: {
            top: -100,
            transition: { duration: 1 },
        },
    };

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious();

        if (!isUndefined(prev) && prev > latest) {
            setIsShown(true);

            return;
        }

        if (latest < 100) {
            setIsShown(true);

            return;
        }

        setIsShown(false);
    });

    return (
        <motion.header
            className=" fixed w-full z-10"
            animate={isShown ? "shown" : "hidden"}
            variants={variants}
        >
            <div
                className={clsx(
                    "flex items-center justify-between md:px-8 px-4 py-6 ",
                    scrollY.get() > 100 && "bg-opacity-[0.002] backdrop-blur-sm"
                )}
            >
                <nav className="min-w-32">
                    <Logo />
                </nav>
                <ul className="lg:flex hidden gap-16">
                    {navigationBarItems.map(({ name, comingSoon, url }) => (
                        <HeaderItem
                            key={url}
                            name={name}
                            isComingSoon={comingSoon}
                            url={url}
                        />
                    ))}
                </ul>
                <nav>
                    <ArrowLink
                        className="lg:flex hidden"
                        name="Get in Touch"
                        url="#get-in-touch"
                    />
                </nav>
                <MobileNavigation />
            </div>
            <GradientLine type="centered" onMobile="space-between" />
        </motion.header>
    );
}
