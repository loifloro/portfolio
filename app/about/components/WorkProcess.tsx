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
                        A viverra ut eget urna amet cras pharetra. Risus vitae
                        quam libero pellentesque. Vitae nibh mollis platea sem
                        justo dis ultrices. Aliquet non sit accumsan placerat
                        varius diam nec. Scelerisque odio nunc pharetra felis
                        leo sem est pharetra. Adipiscing nisl at eget feugiat
                        senectus id aliquet. At feugiat est turpis posuere
                        lorem.
                    </p>
                </div>
            </div>
        </Container>
    );
}
