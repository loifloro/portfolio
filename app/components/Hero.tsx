import ArrowLink from "./button/ArrowLink";
import GradientLine from "./GradientLine";
import heroImg from "@/public/png/hero-bg.png";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
    const data = {
        currentJob: "Frontend Developer",
        currentCompany: "Golden Bell Future",
        headline: "Lois Floro",
        description:
            "Lois is passionate in converting designs into real life applications with care and commitment. He loves the process of designing/developing applications and tweaking it to its fullest potential.",
    };

    return (
        <div className="supports-[h-svh]:h-svh h-screen text-center grid items-end md:p-12 p-4 relative transition-all transition-discrete duration-700 ease-in-out text-white">
            <div>
                <div className="flex gap-3 sm:gap-2 justify-center items-center">
                    <p className="before:inline-block before:h-8 before:w-px before:bg-gradient-horizontal font-light font-mono uppercase tracking-wider flex gap-2 justify-center items-center md:text-base text-sm">
                        {data.currentJob} at {data.currentCompany}
                    </p>
                </div>
                <h1 className="uppercase text-center text-heading-1 font-semibold tracking-heading-1 ml-[var(--spacing-heading-1)]">
                    {data.headline}
                </h1>
                <p className="text-battleship-gray font-light max-w-screen-md mx-auto text-pretty">
                    {data.description}
                </p>
                <div className="flex justify-center gap-5 sm:gap-8 mt-6 mb-2 sm:mb-0 sm:mt-8">
                    <ArrowLink
                        name="View Lois' Background"
                        isWithArrow
                        url="/about"
                        className="text-white"
                    />
                </div>
            </div>
            <div className="absolute supports-[h-svh]:h-svh h-screen w-full flex justify-end flex-col -z-10 transition-all transition-discrete duration-700 ease-in-out">
                <div className="absolute supports-[h-svh]:h-svh h-screen w-full bg-gradient-hero-bg flex items-end transition-all transition-discrete duration-700 ease-in-out">
                    <GradientLine type="centered" />
                </div>
                <Image
                    fill
                    src={heroImg}
                    alt="Lois Floro"
                    style={{ objectFit: "cover" }}
                    quality={100}
                    placeholder="blur"
                    className="dark:brightness-[.30] opacity-80 dark:opacity-100 contrast-[1.3] dark:contrast-[1.05] -z-10"
                />
            </div>
            <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 text-start px-8 hidden md:block">
                <ul className="font-mono uppercase flex flex-col gap-4 text-xs text-rich-black opacity-20">
                    <li>UI / UX Design</li>
                    <li>Full Stack Development</li>
                    <li>Frontend Development</li>
                    <li>Writing / Blogs</li>
                </ul>
            </div>
            <div className="absolute right-0 z-10 top-1/2 -translate-y-1/2 text-start px-10 hidden md:block">
                <ul className="font-mono uppercase flex flex-col gap-10 text-sm text-battleship-gray">
                    <li>
                        <Link
                            href="https://github.com/loifloro"
                            target="_blank"
                        >
                            <SiGithub />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/jlfloro/"
                            target="_blank"
                        >
                            <SiLinkedin />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://x.com/lois_today" target="_blank">
                            <SiX />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
