import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Subtitle from "@/components/display/Subtitle";
import GradientLine from "@/components/GradientLine";
import React from "react";

export default function Description() {
    return (
        <Container>
            <div className="min-h-screen grid sm:items-center items-end py-4 mb-4">
                <div className="flex flex-col md:max-w-[40%] sm:max-w-[80%] md:mx-0 mx-auto md:text-left text-center md:items-start items-center">
                    <Subtitle>About Lois</Subtitle>
                    <Heading
                        element="h1"
                        className="uppercase text-heading-3 leading-heading-3 font-normal tracking-heading-3 text-rich-black mb-2"
                    >
                        A Frontend Enthusiast
                    </Heading>
                    <p className="text-battleship-gray">
                        Lois is a frontend enthusiast through and through,
                        whether it would be designing and converting designs I
                        find it very rewarding. To create something with visual
                        modality is what I enjoy the most.
                    </p>
                </div>
            </div>
            <GradientLine type="space-between" />
        </Container>
    );
}
