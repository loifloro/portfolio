import { getProjectBySlug } from "utils/project";
import { isNull } from "lodash";
import { notFound } from "next/navigation";
import Gallery from "./components/Gallery";
import Pallette from "./components/Palette";
import Process from "./components/Process";
import ProjectHero from "./components/ProjectHero";
import React from "react";
import Rationale from "./components/Rationale";

export default async function Page({
    params,
}: {
    params: Promise<{ projectName: string }>;
}) {
    const project = getProjectBySlug((await params).projectName);

    if (isNull(project)) {
        return notFound();
    }

    return (
        <div className="flex flex-col gap-32">
            <ProjectHero
                name={project.name}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                mainImg={project.mainImg}
            />
            <Rationale
                description={project.description}
                reason={project.reason}
            />
            <Pallette
                description={project.palletteDescription}
                palette={project.pallette}
            />
            <Process processes={project.process} />
            <Gallery items={project.gallery} />
        </div>
    );
}
