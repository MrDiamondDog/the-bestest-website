import { Elements } from "./elements";

export type Project = {
    name: string;
    description: string;
    github: string;
}

export const projects: Project[] = [
    {
        name: "Filatrack",
        description: "My current passion project for tracking 3d printing filament. Free, easy to use, no ads!",
        github: "https://github.com/mrdiamonddog/filatrack",
    }
]

export function initProjects() {
    for (const project of projects) {
        const elem = makeProject(project);

        Elements.main.pages.projects.appendChild(elem);
    }
}

export function makeProject(project: Project): HTMLDivElement {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";

    const infoDiv = document.createElement("div");
    infoDiv.className = "info";

    const title = document.createElement("h2");
    title.innerText = project.name;
    title.className = "title";

    const description = document.createElement("p");
    description.innerText = project.description;
    description.className = "description";

    infoDiv.appendChild(title);
    infoDiv.appendChild(description);

    projectDiv.appendChild(infoDiv);

    return projectDiv;
}