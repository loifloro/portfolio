import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Subtitle from "@/components/display/Subtitle";
import React from "react";

type PaletteItemProps = {
    name: string;
    strokeColor: string;
    color: string;
};

type PaletteProps = {
    description: string;
    palette: {
        id: number;
        name: string;
        colorCode: string;
        strokeCode: string;
    }[];
};

function PaletteItem({ name, strokeColor, color }: PaletteItemProps) {
    const _strokeColor = `#${strokeColor}`;
    const _color = `#${color}`;

    return (
        <div
            className="flex flex-col min-h-[430px] justify-end w-full p-2"
            style={{
                borderTop: `5px solid ${_strokeColor}`,
                background: `linear-gradient(to top, rgba(17, 17, 17, 0) 0.05%, rgba(31, 31, 35, 0.2) 7.35%, ${_color} 78.87%, ${_color} 99.95%)`,
            }}
        >
            <div>
                <p className="font-light" style={{ color: _strokeColor }}>
                    {name}
                </p>
                <p
                    className="font-mono text-sm uppercase"
                    style={{ color: _color }}
                >
                    {strokeColor}
                </p>
            </div>
        </div>
    );
}

export default function Pallette({ description, palette }: PaletteProps) {
    return (
        <Container withDivider dividerType="space-between">
            <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-[auto_1fr] gap-y-16 mb-36 items-center">
                <div>
                    <Subtitle size="sm">Project Colors</Subtitle>
                    <Heading
                        element="h2"
                        className="text-heading-3 leading-heading-3 font-sans font-light tracking-widest text-rich-black mb-24"
                    >
                        The Palette
                    </Heading>
                    <p className="text-battleship-gray font-light sm:w-10/12">
                        {description}
                    </p>
                </div>
                <div className="flex md:justify-end">
                    {palette.map(({ id, name, colorCode, strokeCode }) => (
                        <PaletteItem
                            key={id}
                            name={name}
                            strokeColor={strokeCode}
                            color={colorCode}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}
