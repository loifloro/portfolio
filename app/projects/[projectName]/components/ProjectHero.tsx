import ArrowLink from "@/components/button/ArrowLink";
import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Tag from "@/components/display/Tag";
import React from "react";

type ProjectHeroProps = {
    name: string;
    tags: { id: number; name: string }[];
    liveUrl: URL | string;
    githubUrl: URL | string;
    mainImg: URL | string;
};

export default function ProjectHero({
    name,
    githubUrl,
    liveUrl,
    mainImg,
    tags,
}: ProjectHeroProps) {
    const background = `bg-[url('/png/${mainImg}')]`;

    return (
        <Container fullWidth withDivider>
            <div
                className={`min-h-screen grid items-end p-7 bg-cover bg-no-repeat ${background}`}
            >
                <div className="grid grid-cols-2 justify-end">
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4">
                            <p>01</p>
                            <span>/</span>
                            <p>05</p>
                        </div>
                        <div>
                            <Heading
                                element="h1"
                                className="uppercase leading-heading-1 text-heading-2 font-semibold align-middle tracking-widest mt-1"
                            >
                                {name}
                            </Heading>
                        </div>
                    </div>
                    <div className="flex flex-col items-end ml-auto w-4/6 justify-between">
                        <div className="flex gap-2 flex-wrap flex-row-reverse">
                            {tags.map(({ id, name }) => (
                                <Tag key={id} name={name} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 items-end text-sm">
                            <ArrowLink
                                name="Visit Live Project"
                                url={liveUrl}
                            />
                            <ArrowLink
                                name="Visit Source Code"
                                url={githubUrl}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
