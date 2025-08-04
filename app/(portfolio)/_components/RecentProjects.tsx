import { recentProjects } from "datasets/projects";
import Container from "@/components/container/Container";
import Heading from "@/components/display/Heading";
import ProjectItem from "@/components/display/ProjectItem";
import Subtitle from "@/components/display/Subtitle";

export default function RecentProjects() {
    return (
        <Container id="projects" aria-labelledby="projects-heading">
            <Subtitle>Most Recent Works</Subtitle>
            <Heading
                id="projects-heading"
                element="h2"
                className="uppercase text-heading-2 leading-heading-2 font-semibold tracking-[.25em] text-rich-black mb-24"
            >
                Projects
            </Heading>
            {recentProjects.map(
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
