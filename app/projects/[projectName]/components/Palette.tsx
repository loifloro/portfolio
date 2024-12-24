import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Subtitle from "@/components/display/Subtitle";
import React from "react";

type PaletteItemProps = {
    name: string;
    strokeColor: string;
    midColor: string;
};

function PaletteItem({ name, strokeColor, midColor }: PaletteItemProps) {
    const _strokeColor = `#${strokeColor}`;
    const _midColor = `#${midColor}`;

    return (
        <div
            className="flex flex-col min-h-[430px] justify-end w-[150px] p-2"
            style={{
                borderTop: `5px solid ${_strokeColor}`,
                background: `linear-gradient(to top, rgba(17, 17, 17, 0) 0.05%, rgba(31, 31, 35, 0.2) 7.35%, ${_midColor} 78.87%, ${_midColor} 99.95%)`,
            }}
        >
            <div>
                <p className="font-light" style={{ color: _strokeColor }}>
                    {name}
                </p>
                <p
                    className="font-mono text-sm uppercase"
                    style={{ color: _midColor }}
                >
                    {strokeColor}
                </p>
            </div>
        </div>
    );
}

export default function Pallette() {
    const data = [
        {
            name: "Gold",
            strokeColor: "FFD500",
            midColor: "AA931E",
        },
        {
            name: "Rose Ebony",
            strokeColor: "392020",
            midColor: "543636",
        },
        {
            name: "Misty Rose",
            strokeColor: "FFFFFF",
            midColor: "EBD2D2",
        },
        {
            name: "Blood Red",
            strokeColor: "500000",
            midColor: "6E0909",
        },
        {
            name: "Rosy Brown",
            strokeColor: "AC7070",
            midColor: "B88A8A",
        },
    ];

    return (
        <Container withDivider dividerType="space-between">
            <div className="grid grid-cols-2 mb-36 items-center">
                <div>
                    <Subtitle size="sm">Project Colors</Subtitle>
                    <Heading
                        element="h2"
                        className="text-heading-3 leading-heading-3 font-sans font-light tracking-widest text-rich-black mb-24"
                    >
                        The Palette
                    </Heading>
                    <p className="text-battleship-gray font-light max-w-[80%]">
                        A viverra ut eget urna amet cras pharetra. Risus vitae
                        quam libero pellentesque. Vitae nibh mollis platea sem
                        justo dis ultrices. Aliquet non sit accumsan placerat
                        varius diam nec. Scelerisque odio nunc pharetra felis
                        leo sem est pharetra. Adipiscing nisl at eget feugiat
                        senectus id aliquet. At feugiat est turpis posuere
                        lorem.
                    </p>
                </div>
                <div className="flex justify-end">
                    {data.map(({ name, strokeColor, midColor }) => (
                        <PaletteItem
                            key={strokeColor}
                            name={name}
                            strokeColor={strokeColor}
                            midColor={midColor}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}
