import { isUndefined } from "lodash";
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
            focus: true,
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
                <Subtitle name="Lorem Ipsum" size="sm" />
                <Heading
                    element="h2"
                    className="uppercase text-heading-3 leading-heading-3 tracking-widest text-rich-black"
                >
                    Soft Skills
                </Heading>
            </div>
            <div className="flex justify-center mb-20">
                {softSkills.map(({ name, focus }) => (
                    <div
                        key={name}
                        className={`h-[300px] w-[300px] rounded-full overflow-hidden p-px mx-[-20px] ${isUndefined(focus) ? "bg-gradient-centered" : "bg-rich-black z-10"}`}
                    >
                        <div className="flex items-center justify-center bg-pale-white h-full w-full rounded-full">
                            <p className="uppercase font-mono text-heading-4 tracking-widest text-rich-black">
                                {name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="max-w-[40%] mx-auto text-center text-battleship-gray">
                Nisl et sit ultrices ac. Vitae risus nibh malesuada nulla nibh
                in gravida ut. Sem nibh integer libero nulla id morbi elit
                dictum.
            </p>
        </Container>
    );
}
