import React from "react";
import Container from "./container/Container";

type T = "heading-2" | "heading-3" | "normal" | "mono";

export default function TechStack() {
    const data = [
        "Ui Design",
        "Web Development",
        "React",
        "CSS",
        "SASS",
        "Mobile Development",
        "HTML",
        "Tailwind",
        "Prisma",
        "Responsive Design",
        "Gulp",
        "Git",
        "Figma",
        "WordPress",
        "Next JS",
        "Github",
        "JavaScript",
    ];

    const styles = {
        "heading-2":
            "text-heading-2 tracking-[16px] font-semibold min-w-fit text-nowrap",
        "heading-3":
            "text-heading-3 tracking-[8px] font-normal min-w-fit text-nowrap",
        normal: "tracking-widest font-semibold min-w-fit",
        mono: "font-mono min-w-fit tracking-wide",
    };

    return (
        <Container fullWidth>
            <div className="overflow-auto flex max-h-[950px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="text-rich-black flex flex-wrap items-center uppercase gap-x-20 gap-y-10 md:gap-y-4 md:gap-x-10 min-w-[120%] justify-around">
                    {data.map((value) => (
                        <p
                            key={value}
                            className={
                                styles[
                                    Object.keys(styles)[
                                        Math.floor(
                                            Math.random() *
                                                Object.keys(styles).length
                                        )
                                    ] as T
                                ]
                            }
                        >
                            {value}
                        </p>
                    ))}
                </div>
            </div>
        </Container>
    );
}
