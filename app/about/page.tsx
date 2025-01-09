import { Metadata } from "next";
import CareerBackground from "./components/CareerBackground";
import CareerTechStack from "./components/CareerTechStack";
import Description from "./components/Description";
import React from "react";
import SoftSkills from "./components/SoftSkills";
import WorkProcess from "./components/WorkProcess";

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
        <div className="flex flex-col gap-32">
            <Description />
            <CareerBackground />
            <WorkProcess />
            <CareerTechStack />
            <SoftSkills />
        </div>
    );
}
