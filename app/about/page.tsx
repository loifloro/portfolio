import CareerBackground from "./components/CareerBackground";
import Description from "./components/Description";
import React from "react";
import SoftSkills from "./components/SoftSkills";
import WorkProcess from "./components/WorkProcess";
import CareerTechStack from "./components/CareerTechStack";

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
