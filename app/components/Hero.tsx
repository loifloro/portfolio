import React from "react";

export default function Hero() {
    const data = {
        currentJob: "Frontend Developer",
        currentCompany: "Business Tree PH",
        headline: "Lois Floro",
        description:
            "Hi it's Lois, passionate in converting designs into real life applications with care and commitment. Ever since high school he loves the process of designing/developing applications and tweaking it to its fullest potential.",
    };

    return (
        <div className="min-h-screen text-center grid items-end md:p-12 p-4">
            <div>
                <div className="flex gap-2 justify-center items-center">
                    <p className="before:inline-block before:h-8 before:w-px before:bg-gradient-horizontal font-light font-mono uppercase tracking-wider flex gap-2 justify-center items-center md:text-base text-sm">
                        {data.currentJob} at {data.currentCompany}
                    </p>
                </div>
                <h1 className="uppercase text-center text-heading-1 font-semibold tracking-heading-1 ml-[var(--spacing-heading-1)]">
                    {data.headline}
                </h1>
                <p className="text-battleship-gray font-light max-w-screen-lg mx-auto">
                    {data.description}
                </p>
            </div>
        </div>
    );
}
