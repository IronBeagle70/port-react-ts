import React from 'react';

import { Project } from '../interfaces/Project';

interface ProjectCardProps{
    project: Project;
}

export default function ProjectCard({project}: ProjectCardProps) {
    return (
        <div>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>
                {
                    project.urlDeploy && (
                        <a href={project.urlDeploy} target="_blank" rel="noopener noreferrer">Deploy</a>
                    )
                }
                {
                    project.urlGithub && (
                        <a href={project.urlGithub} target="_blank" rel="noopener noreferrer">Github</a>
                    )
                }
            </div>
        </div>
    );
};
