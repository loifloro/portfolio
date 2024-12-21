"use client";

import { databases, frameworks, languages, tools } from "datasets/techStack";
import { IconType } from "@icons-pack/react-simple-icons";
import { isEqual } from "lodash";
import { TechStack } from "types/techStack";
import { useState } from "react";
import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import Subtitle from "@/components/display/Subtitle";

type CareerTechStackLogoProps = {
    logo: IconType;
    name: string;
};

function CareerTechStackLogo({ name, logo }: CareerTechStackLogoProps) {
    const Tag = logo;

    return (
        <div className="flex flex-col gap-3 items-center min-w-32">
            <Tag size={82} />
            <p className="font-mono uppercase text-sm font-normal leading-heading-4 tracking-wider">
                {name}
            </p>
        </div>
    );
}

export default function CareerTechStack() {
    const [activeTab, setActiveTab] = useState<TechStack>(languages);
    const tabs = [
        {
            id: 1,
            name: "Languages",
            tab: languages,
        },
        {
            id: 2,
            name: "Frameworks & Libraries",
            tab: frameworks,
        },
        {
            id: 3,
            name: "Databases & ORMs",
            tab: databases,
        },
        {
            id: 4,
            name: "Technologies & Tools",
            tab: tools,
        },
    ];

    const handleClick = (tab: TechStack) => {
        setActiveTab(tab);
    };

    return (
        <Container withDivider>
            <div className="text-center mb-36">
                <Subtitle name="Tools Used" size="sm" />
                <Heading
                    element="h3"
                    className="uppercase text-heading-3 leading-heading-3 tracking-widest text-rich-black"
                >
                    Career Tech Stack
                </Heading>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-32 mb-36">
                <div>
                    {tabs.map(({ id, name, tab }, index) => (
                        <div key={id} className="mb-16">
                            <div
                                className={`flex items-start gap-9 ${isEqual(activeTab, tab) ? "text-rich-black" : "text-battleship-gray"}`}
                                onClick={() => handleClick(tab)}
                            >
                                <div
                                    className={`relative h-11 w-11 rounded-full p-px bg-gradient-centered ${index < tabs.length - 1 && "before:absolute before:inline-block before:h-28 before:w-px before:bg-gradient-horizontal before:left-1/2 before:top-[100%]"}`}
                                >
                                    <div className="flex items-center justify-center bg-pale-white h-full w-full rounded-full overflow-hidden">
                                        <p className="uppercase text-base tracking-widest">
                                            {id}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="uppercase text-heading-4 leading-4 tracking-widest mt-3 cursor-pointer">
                                        {name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-16">
                    {activeTab.map(({ id, name, logo }) => (
                        <CareerTechStackLogo key={id} name={name} logo={logo} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
