import Image from "next/image";
import ArrowLink from "./button/ArrowLink";
import GradientLine from "./GradientLine";
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
        <div className="overflow-hidden h-svh text-center grid items-end md:p-12 p-4 relative">
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
                        name="LinkedIn"
                        isWithArrow
                        url="https://www.linkedin.com/in/jlfloro/"
                    />
                    <ArrowLink
                        name="X / Twitter"
                        isWithArrow
                        url="https://x.com/lois_today"
                    />
                    <ArrowLink
                        name="Github"
                        isWithArrow
                        url="https://github.com/loifloro"
                    />
                </div>
            </div>
            <div className="absolute h-svh w-full flex justify-end flex-col -z-10">
                <div className="absolute h-svh w-full bg-gradient-hero-bg flex items-end">
                    <GradientLine type="centered" />
                </div>
                <Image
                    fill
                    src="/png/hero-bg.png"
                    alt="Lois Floro"
                    style={{ objectFit: "cover" }}
                    quality={100}
                    className="dark:brightness-[.30] opacity-80 dark:opacity-100 contrast-[1.3] dark:contrast-[1.05] -z-10"
                />
            </div>
        </div>
    );
}
