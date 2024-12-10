import React from "react";
import Container from "./container/Container";

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
        "heading-2": "text-heading-2 tracking-[16px] font-semibold min-w-fit",
        "heading-3": "text-heading-3 tracking-[8px] font-normal min-w-fit",
        normal: "tracking-widest font-semibold min-w-fit",
        mono: "font-mono min-w-fit tracking-wide",
    };

    return (
        <Container fullWidth>
            <div className="overflow-hidden flex justify-center max-h-[950px]">
                <div className="text-rich-black flex flex-wrap items-center uppercase gap-x-10 min-w-[120%] justify-around">
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
                                    ]
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
