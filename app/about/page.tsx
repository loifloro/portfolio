import CareerBackground from "./_components/CareerBackground";
import Description from "./_components/Description";
import React from "react";
import SoftSkills from "./_components/SoftSkills";
import Tools from "./_components/Tools";
import WorkProcess from "./_components/WorkProcess";

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
