import { isNull, isUndefined } from "lodash";
import Container from "@/components/container/Container";
import GradientLine from "@/components/GradientLine";
import React, { ReactNode } from "react";
import Subtitle from "@/components/display/Subtitle";
import Heading from "@/components/display/Heading";

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
            companyName: "Business Tree PH",
            position: "Frontend Developer / Designer",
            dateStarted: 2023,
            dateEnded: "Present",
        },
        {
            id: 2,
            companyName: "Axandra Ventures",
            position: "QA Intern",
            dateStarted: 2023,
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
        },
        {
            id: 2,
            institutionName: "Philippine Christian University Dasmariñas",
            course: "TVL Strand  of Computer Programming",
            dateStarted: 2017,
            dateEnded: 2019,
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
                    ({ id, companyName, position, dateStarted, dateEnded }) => (
                        <div key={id} className="mt-8">
                            <div className="flex justify-between items-center mb-5 gap-4">
                                <p className="text-heading-4 tracking-wider">
                                    {companyName} - &nbsp;
                                    <span className="font-light text-battleship-gray">
                                        {position}
                                    </span>
                                </p>
                                <p className="uppercase tracking-widest text-right">
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
                    }) => (
                        <div key={id} className="mt-8">
                            <div className="flex sm:flex-row flex-col justify-between sm:items-end items-start mb-5 gap-4">
                                <div>
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
                                <p className="uppercase tracking-widest text-right">
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
