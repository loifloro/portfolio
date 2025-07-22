import { databases, languages, frameworks, tools } from "datasets/techStack";
import { isString, shuffle } from "lodash";
import Container from "@/components/container/Container";

export default function TechStack() {
    const data = shuffle([
        "Ui Design",
        "Web Development",
        "Mobile Development",
        "Responsive Design",
        ...databases,
        ...languages,
        ...frameworks,
        ...tools,
    ]);

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
            <div className="overflow-y-hidden max-h-screen md:max-h-full overflow-x-auto flex [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <ul className="text-rich-black flex flex-wrap items-center uppercase gap-x-20 gap-y-10 md:gap-y-4 md:gap-x-10 min-w-[120%] justify-around">
                    {data.map((value, index) => (
                        <li
                            key={index}
                            className={
                                Object.values(styles)[
                                    Math.floor(
                                        Math.random() *
                                            Object.keys(styles).length
                                    )
                                ]
                            }
                        >
                            {isString(value) ? value : value.name}
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}
