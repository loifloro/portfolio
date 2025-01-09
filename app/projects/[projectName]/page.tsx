import { getProjectBySlug } from "utils/project";
import { isNull } from "lodash";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Gallery from "./components/Gallery";
import Pallette from "./components/Palette";
import Process from "./components/Process";
import ProjectHero from "./components/ProjectHero";
import Rationale from "./components/Rationale";
import React from "react";

type Props = {
    params: Promise<{ projectName: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = getProjectBySlug((await params).projectName);

    if (isNull(project)) {
        return notFound();
    }

    return {
        title: project.name,
        description: project.description,
        openGraph: {
            title: project.name,
            description: project.description,
            images: [project.thumbnail],
        },
    };
}

export default async function Page({ params }: Props) {
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
