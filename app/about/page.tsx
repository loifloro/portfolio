import CareerBackground from "./components/CareerBackground";
import Description from "./components/Description";
import React from "react";
import SoftSkills from "./components/SoftSkills";
import Tools from "./components/Tools";
import WorkProcess from "./components/WorkProcess";

export default function About() {
    return (
        <div className="flex flex-col gap-32">
            <Description />
            <CareerBackground />
            <WorkProcess />
            <SoftSkills />
            <Tools />
        </div>
    );
}
