import React from "react";

export default function Hero() {
    const data = {
        currentJob: "Frontend Developer",
        currentCompany: "Business Tree PH",
        headline: "Lois Floro",
        description:
            "Hi I'm Lois, passionate in converting designs into real life applications with care and commitment. Ever since high school I have loved the process of designing/developing applications and tweaking it to its fullest potential.",
    };

    return (
        <div className="min-h-screen text-center grid items-end p-12">
            <div>
                <div className="flex gap-2 justify-center items-center">
                    <p className="before:inline-block before:h-8 before:w-px before:bg-gradient-horizontal font-light font-mono uppercase tracking-wider flex gap-2 justify-center items-center">
                        {data.currentJob} at {data.currentCompany}
                    </p>
                </div>
                <h1 className="uppercase text-heading-1 font-semibold tracking-[30px]">
                    {data.headline}
                </h1>
                <p className="text-battleship-gray font-light max-w-screen-lg mx-auto">
                    {data.description}
                </p>
            </div>
        </div>
    );
}
