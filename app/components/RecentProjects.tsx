import { recentProjects } from "datasets/projects";
import Container from "./container/Container";
import Heading from "./display/Heading";
import ProjectItem from "./display/ProjectItem";
import Subtitle from "./display/Subtitle";

export default function RecentProjects() {
    return (
        <Container id="projects">
            <Subtitle>Most Recent Works</Subtitle>
            <Heading
                element="h3"
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
