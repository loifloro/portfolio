import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import React from "react";
import Subtitle from "@/components/display/Subtitle";

export default function SoftSkills() {
    const softSkills = [
        {
            name: "Eros",
        },
        {
            name: "Amet",
        },
        {
            name: "Enim",
        },
        {
            name: "Vel",
        },
        {
            name: "Dignissim",
        },
    ];

    return (
        <Container>
            <div className="text-center mb-36">
                <Subtitle size="sm">Tools Used</Subtitle>
                <Heading
                    element="h2"
                    className="uppercase text-heading-3 leading-heading-3 tracking-widest text-rich-black"
                >
                    Soft Skills
                </Heading>
            </div>
            <div className="flex flex-wrap justify-center mb-20">
                {softSkills.map(({ name }) => (
                    <div
                        key={name}
                        className="h-[clamp(18.75rem,_18.9481rem_+_-0.8451vw,_18.1875rem)] w-[clamp(18.75rem,_18.9481rem_+_-0.8451vw,_18.1875rem)] rounded-full overflow-hidden p-px mx-[-20px] -mt-20 bg-gradient-centered hover:bg-rich-black hover:z-10 transition-all ease-in-out duration-300"
                    >
                        <div className="flex items-center justify-center bg-pale-white h-full w-full rounded-full">
                            <p className="uppercase font-mono text-heading-4 tracking-widest text-rich-black">
                                {name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="md:max-w-[60%] sm:max-w-[80%] max-w-full mx-auto text-center text-battleship-gray">
                Nisl et sit ultrices ac. Vitae risus nibh malesuada nulla nibh
                in gravida ut. Sem nibh integer libero nulla id morbi elit
                dictum.
            </p>
        </Container>
    );
}
