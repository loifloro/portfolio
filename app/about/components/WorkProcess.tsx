import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Subtitle from "@/components/display/Subtitle";
import React from "react";

export default function WorkProcess() {
    return (
        <Container withDivider dividerType="centered">
            <div className="flex justify-center text-center mb-36">
                <div className="md:max-w-[60%] sm:max-w-[80%]">
                    <Subtitle size="sm">How I Work</Subtitle>
                    <Heading
                        element="h3"
                        className="uppercase text-heading-3 leading-heading-3 tracking-widest text-rich-black mb-10"
                    >
                        Lois in the workplace
                    </Heading>
                    <p className="text-battleship-gray">
                        My thought process always start with how the users will
                        consume my work, how hard it would be for them when they
                        actually use it, whether it would when designing or
                        developing the designs from other designers I always
                        incorporate care in everything that I do.
                    </p>
                </div>
            </div>
        </Container>
    );
}
