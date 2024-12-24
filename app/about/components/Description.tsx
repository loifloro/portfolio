import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Subtitle from "@/components/display/Subtitle";
import GradientLine from "@/components/GradientLine";
import React from "react";

export default function Description() {
    return (
        <Container>
            <div className="min-h-screen grid items-end py-4 mb-4">
                <div className="flex flex-col md:max-w-[60%] sm:max-w-[80%] md:mx-0 mx-auto md:text-left text-center md:items-start items-center">
                    <Subtitle>Something about Lois</Subtitle>
                    <Heading
                        element="h1"
                        className="uppercase text-heading-3 leading-heading-3 font-normal tracking-heading-3 text-rich-black mb-2"
                    >
                        Pellentesque ac eget vestibulum
                    </Heading>
                    <p className="text-battleship-gray">
                        A viverra ut eget urna amet cras pharetra. Risus vitae
                        quam libero pellentesque. Vitae nibh mollis platea sem
                        justo dis ultrices. Aliquet non sit accumsan placerat
                        varius diam nec lorem .
                    </p>
                </div>
            </div>
            <GradientLine type="space-between" />
        </Container>
    );
}
