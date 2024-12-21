import Container from "@/components/container/Container";
import Subtitle from "@/components/display/Subtitle";
import GradientLine from "@/components/GradientLine";
import React from "react";

export default function Description() {
    return (
        <Container>
            <div className="min-h-screen grid items-end py-4">
                <div className="max-w-[50%]">
                    <Subtitle name="I’ll Tell About My Self" />
                    <h1 className="uppercase text-heading-3 leading-heading-3 font-normal tracking-widest text-rich-black mb-10">
                        Pellentesque ac eget vestibulum integer quam nunc
                    </h1>
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
                <GradientLine type="space-between" />
            </div>
        </Container>
    );
}
