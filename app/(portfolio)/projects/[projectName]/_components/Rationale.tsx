import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Subtitle from "@/components/display/Subtitle";
import React from "react";

type RationaleProps = {
    description: string;
    reason: string;
};

export default function Rationale({ description, reason }: RationaleProps) {
    return (
        <Container
            aria-labelledby="project-rationale"
            withDivider
            dividerType="space-between"
        >
            <div className="text-center mb-24">
                <Subtitle size="sm">Project Rationale</Subtitle>
                <Heading
                    id="project-rationale"
                    element="h2"
                    className="text-heading-3 leading-heading-3 font-sans font-light tracking-widest text-rich-black mb-24"
                >
                    The Background
                </Heading>
                <div className="md:w-1/2 sm:w-10/12 mx-auto text-battleship-gray">
                    <p className="mb-10">{description}</p>
                    <p>{reason}</p>
                </div>
            </div>
        </Container>
    );
}
