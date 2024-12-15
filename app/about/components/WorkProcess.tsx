import Container from "@/components/container/Container";
import Subtitle from "@/components/display/Subtitle";
import React from "react";

export default function WorkProcess() {
    return (
        <Container withDivider dividerType="centered">
            <div className="flex justify-center text-center mb-36">
                <div className="max-w-[50%]">
                    <Subtitle name="How I Work" size="sm" />
                    <h3 className="uppercase text-heading-3 leading-heading-3 tracking-widest text-rich-black mb-10">
                        Career Tech Stack
                    </h3>
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
