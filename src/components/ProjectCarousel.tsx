import React, {useState} from 'react';
import { Project } from '../interfaces/Project';
import { ProjectCategory } from '../interfaces/ProjectCategory';
import ProjectCard from './ProjectCard';

interface ProjectCarouselProps{
    filteredProjects: Project[];
}

export default function ProjectCarousel({filteredProjects}: ProjectCarouselProps) {

    return (
        <div>
            <div className='flex'>
                {
                    filteredProjects.map(project =>(
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </div>
        </div>
    );
};
