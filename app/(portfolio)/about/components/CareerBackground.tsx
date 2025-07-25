import { isNull, isUndefined } from "lodash";
import Container from "app/components/container/Container";
import GradientLine from "app/components/GradientLine";
import React, { ReactNode } from "react";
import Subtitle from "app/components/display/Subtitle";
import Heading from "app/components/display/Heading";
import Image from "next/image";

type CareerBackgroundSectionProps = {
    name: string;
    number: number;
    children: ReactNode;
};

function CareerBackgroundSection({
    name,
    number,
    children,
}: CareerBackgroundSectionProps) {
    return (
        <div className="my-36">
            <div className="grid md:grid-cols-3">
                <span className="text-raisin-black font-grotesk">
                    {number < 10 && "0"}
                    {number}
                </span>
                <div className="col-span-2">
                    <Heading
                        element="h3"
                        className="uppercase text-heading-3 leading-heading-3 tracking-heading-3 font-normal text-rich-black mb-20"
                    >
                        {name}
                    </Heading>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function CareerBackground() {
    const workExperience = [
        {
            id: 1,
            companyName: "The Golden Bell Future",
            position: "Frontend Developer / Designer",
            dateStarted: 2023,
            dateEnded: "Present",
            logoPath: "/svg/golden-bell-future-logo.svg",
        },
        {
            id: 2,
            companyName: "Axandra Ventures",
            position: "QA Intern",
            dateStarted: 2023,
            logoPath: "/png/axadra-logo.png",
        },
    ];
    const educationBackground = [
        {
            id: 1,
            institutionName: "Cavite State University Indang",
            course: "Bachelor of Science in Information Technology",
            award: "Cum Laude",
            dateStarted: 2019,
            dateEnded: 2023,
            logoPath: "/png/cvsu-logo.png",
        },
        {
            id: 2,
            institutionName: "Philippine Christian University Dasmariñas",
            course: "TVL Strand  of Computer Programming",
            dateStarted: 2017,
            dateEnded: 2019,
            logoPath: "/png/pcu-logo.png",
        },
    ];

    return (
        <Container withDivider dividerType="space-between">
            <Subtitle size="sm">Career Resume</Subtitle>
            <Heading
                element="h3"
                className="uppercase text-heading-3 leading-heading-3 font-normal tracking-widest text-rich-black"
            >
                Career Background
            </Heading>
            <CareerBackgroundSection number={1} name="Experience">
                {workExperience.map(
                    ({
                        id,
                        companyName,
                        position,
                        dateStarted,
                        dateEnded,
                        logoPath,
                    }) => (
                        <div key={id} className="mt-10">
                            <div className="flex sm:flex-row flex-col justify-between sm:items-end items-start mb-5 gap-16">
                                <div>
                                    <Image
                                        src={logoPath}
                                        alt={companyName}
                                        width={64}
                                        height={64}
                                        className="mb-4 drop-shadow-xl grayscale-[.25]"
                                    />
                                    <p className="text-heading-4 tracking-wider">
                                        {companyName}{" "}
                                        <span className="hidden md:inline">
                                            - &nbsp;
                                        </span>
                                        <span className="font-light text-battleship-gray block md:inline">
                                            {position}
                                        </span>
                                    </p>
                                </div>
                                <p className="uppercase tracking-widest text-right font-grotesk">
                                    {dateStarted}{" "}
                                    {!isUndefined(dateEnded) && "- "}
                                    {!isNull(dateEnded) && dateEnded}
                                </p>
                            </div>
                            <GradientLine
                                type="centered"
                                onMobile="space-between"
                            />
                        </div>
                    )
                )}
            </CareerBackgroundSection>
            <CareerBackgroundSection name="Education" number={2}>
                {educationBackground.map(
                    ({
                        id,
                        institutionName,
                        award,
                        course,
                        dateStarted,
                        dateEnded,
                        logoPath,
                    }) => (
                        <div key={id} className="mt-10">
                            <div className="flex sm:flex-row flex-col justify-between sm:items-end items-start mb-5 gap-16">
                                <div>
                                    <Image
                                        src={logoPath}
                                        alt={institutionName}
                                        width={64}
                                        height={64}
                                        className="mb-4 drop-shadow-xl grayscale-[.25]"
                                    />
                                    <p className="text-heading-4 mb-2 tracking-wider">
                                        {institutionName}
                                        <span className="font-light text-battleship-gray">
                                            {!isUndefined(award) &&
                                                ` - ${award}`}
                                        </span>
                                    </p>
                                    <p className="font-light text-battleship-gray tracking-wider">
                                        {course}
                                    </p>
                                </div>
                                <p className="uppercase tracking-widest text-right font-grotesk">
                                    {dateStarted}{" "}
                                    {!isUndefined(dateEnded) && "- "}
                                    {!isNull(dateEnded) && dateEnded}
                                </p>
                            </div>
                            <GradientLine
                                type="centered"
                                onMobile="space-between"
                            />
                        </div>
                    )
                )}
            </CareerBackgroundSection>
        </Container>
    );
}
