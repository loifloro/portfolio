import { Metadata } from "next";
import CareerBackground from "./_components/CareerBackground";
import CareerTechStack from "./_components/CareerTechStack";
import Description from "./_components/Description";
import React from "react";
import SoftSkills from "./_components/SoftSkills";
import WorkProcess from "./_components/WorkProcess";

export const metadata: Metadata = {
    title: "About | Lois Floro",
    description:
        "Lois is a frontend enthusiast through and through, whether it would be designing and converting designs is what he finds very rewarding. To create something with visual modality is what he enjoy the most.",
    openGraph: {
        title: "About | Lois Floro",
        description:
            "Lois is a frontend enthusiast through and through, whether it would be designing and converting designs is what he finds very rewarding. To create something with visual modality is what he enjoy the most.",
    },
};

export default function About() {
    return (
        <main className="flex flex-col gap-32">
            <Description />
            <CareerBackground />
            <WorkProcess />
            <CareerTechStack />
            <SoftSkills />
        </main>
    );
}
