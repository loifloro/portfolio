import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import React from "react";
import Subtitle from "@/components/display/Subtitle";

export default function SoftSkills() {
    const softSkills = [
        { id: 1, name: "Initiative" },
        { id: 2, name: "Leadership" },
        { id: 3, name: "Self-aware" },
        { id: 4, name: "Adaptable" },
        { id: 5, name: "Collaborative" },
    ];

    return (
        <Container>
            <div className="text-center mb-36">
                <Subtitle size="sm">How I view myself</Subtitle>
                <Heading
                    element="h2"
                    className="uppercase text-heading-3 leading-heading-3 tracking-widest text-rich-black"
                >
                    Soft Skills
                </Heading>
            </div>
            <div className="flex flex-wrap justify-center mb-20">
                {softSkills.map(({ id, name }) => (
                    <div
                        key={id}
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
            <p className="md:max-w-[40%] sm:max-w-[80%] max-w-full mx-auto text-center text-battleship-gray">
                Lois strongly believes that improving these soft skills will
                gain better traction towards his goals as a professional.
            </p>
        </Container>
    );
}
