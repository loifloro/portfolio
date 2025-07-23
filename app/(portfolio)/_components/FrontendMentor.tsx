import { frontendMentor } from "datasets/projects";
import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import ProjectItem from "@/components/display/ProjectItem";
import React from "react";
import Subtitle from "@/components/display/Subtitle";

export default function FrontendMentor() {
    return (
        <Container aria-label="frontend-mentor">
            <Subtitle>Design to Develop Challenges</Subtitle>
            <Heading
                element="h3"
                className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-[.25em] text-rich-black mb-24"
            >
                Frontend Mentor
            </Heading>
            {frontendMentor.map(
                ({
                    id,
                    name,
                    description,
                    shortDescription,
                    tags,
                    slug,
                    thumbnail,
                }) => (
                    <ProjectItem
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        shortDescription={shortDescription}
                        thumbnailUrl={thumbnail}
                        tags={tags}
                        slug={slug}
                    />
                )
            )}
        </Container>
    );
}
