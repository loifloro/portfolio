import { isEqual } from "lodash";
import Container from "app/components/container/Container";
import Heading from "app/components/display/Heading";
import React from "react";
import Subtitle from "app/components/display/Subtitle";

type ProcessProps = {
    processes: { id: number; title: string; description: string }[];
};

export default function Process({ processes }: ProcessProps) {
    return (
        <Container withDivider dividerType="space-between">
            <div className="sm:text-center">
                <Subtitle size="sm">Project Journey</Subtitle>
                <Heading
                    element="h2"
                    className="text-heading-3 leading-heading-3 font-sans font-light tracking-widest text-rich-black mb-24"
                >
                    The Process
                </Heading>
            </div>
            <div className="mb-24">
                {processes.map(({ id, title, description }, index) => (
                    <div
                        key={id}
                        className="grid grid-rows-1 mb-4 sm:gap-10 row-start-1 sm:grid-cols-[1fr_auto_1fr] grid-cols-[auto_1fr]"
                    >
                        <div className="col-start-2 flex flex-col">
                            <div className="col-start-2 h-11 w-11 rounded-full overflow-hidden p-px bg-gradient-centered">
                                <div className="flex items-center justify-center bg-pale-white h-full w-full rounded-full">
                                    <p className="uppercase font-mono text-heading-4 leading-heading-4 tracking-widest text-rich-black">
                                        {id}
                                    </p>
                                </div>
                            </div>
                            {index < processes.length - 1 && (
                                <div className="h-28 before:inline-block before:h-28 before:w-px before:bg-gradient-horizontal flex gap-2 justify-center items-center"></div>
                            )}
                        </div>
                        <div
                            className={`${isEqual(index % 2, 0) ? "col-start-3 mr-auto" : "sm:ml-auto sm:text-right sm:col-start-1 col-start-3"} mt-3 row-start-1 sm:max-w-[80%] sm:ml-0 ml-6`}
                        >
                            <Heading
                                element="h4"
                                className="text-heading-4 leading-heading-3 md:leading-heading-4 tracking-widest mb-4"
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
        </Container>
    );
}
