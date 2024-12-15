import { isEqual } from "lodash";
import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import React from "react";
import Subtitle from "@/components/display/Subtitle";

function ProcessTimeline() {
    const data = [
        {
            id: 1,
            title: "Mood Boarding",
            description:
                "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
            side: "right",
        },
        {
            id: 2,
            title: "Nunc tempor",
            description:
                "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
            side: "left",
        },
        {
            id: 3,
            title: "Id felis",
            description:
                "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
            side: "right",
        },
        {
            id: 4,
            title: "Sociis urna diam",
            description:
                "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
            side: "left",
        },
        {
            id: 5,
            title: "Vitae nunc at",
            description:
                "Diam blandit nec placerat habitasse at aliquam risus. Condimentum sit morbi nisl dui et.",
            side: "right",
        },
    ];

    return (
        <div className="mb-24">
            {data.map(({ id, title, side, description }, index) => (
                <div
                    key={id}
                    className="grid grid-rows-1 gap-10 row-start-1 grid-cols-[1fr_auto_1fr]"
                >
                    <div className="col-start-2 flex flex-col">
                        <div className="col-start-2 h-11 w-11 rounded-full overflow-hidden p-px bg-gradient-centered">
                            <div className="flex items-center justify-center bg-pale-white h-full w-full rounded-full">
                                <p className="uppercase font-mono text-heading-4 tracking-widest text-rich-black">
                                    {id}
                                </p>
                            </div>
                        </div>
                        {index < data.length - 1 && (
                            <div className="h-28 before:inline-block before:h-28 before:w-px before:bg-gradient-horizontal flex gap-2 justify-center items-center"></div>
                        )}
                    </div>
                    <div
                        className={`${isEqual(side, "right") ? "col-start-3 mr-auto" : "ml-auto text-right col-start-1"} mt-4 row-start-1 max-w-[80%]`}
                    >
                        <Heading
                            element="h4"
                            className="text-heading-4 leading-heading-4 tracking-widest"
                        >
                            {title}
                        </Heading>
                        <p className="mt-2 text-battleship-gray">
                            {description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Process() {
    return (
        <Container withDivider dividerType="space-between">
            <div className="text-center">
                <Subtitle name="Project Cycle" size="sm" />
                <Heading
                    element="h2"
                    className="text-heading-3 leading-heading-3 font-sans font-light tracking-widest text-rich-black mb-24"
                >
                    The Process
                </Heading>
            </div>
            <ProcessTimeline />
        </Container>
    );
}
