import { isUndefined } from "lodash";
import { Project } from "types/project";
import { projects } from "projects";

/**
 * Get the project object based on the projectName
 *
 * @export
 * @param {string} slug
 * @returns {Project|null} Project or null
 */
export function getProjectBySlug(slug: string): Project | null {
    const [project] = projects.filter((item) => item.slug === slug);

    if (!isUndefined(project)) {
        return project;
    }

    return null;
}
