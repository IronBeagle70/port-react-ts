import React from 'react';

import { Project } from '../interfaces/Project';

interface ProjectCardProps{
    project: Project;
}

export default function ProjectCard({project}: ProjectCardProps) {
    return (
        <div className='bg-bg-project flex flex-col w-96 h-80 rounded-2xl'>
            <img className='h-[85%] m-auto object-contain w-[85%]' src={project.image} alt={project.title} />
            {/* <div className='front'></div>
            <div className='back'>
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
            </div> */}
        </div>
    );
};
