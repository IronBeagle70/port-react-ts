import React, {useState} from 'react';
import { Project } from '../interfaces/Project';
import { ProjectCategory } from '../interfaces/ProjectCategory';
import ProjectCard from './ProjectCard';

interface ProjectCarouselProps{
    filteredProjects: Project[];
}

export default function ProjectCarousel({filteredProjects}: ProjectCarouselProps) {

    return (
        <ul className='flex overflow-x-scroll touch:overflow-x-auto scroll-snap-x snap-mandatory '>
                {
                    filteredProjects.map(project =>(
                        <li className='mr-4 flex'>
                            <ProjectCard key={project.id} project={project} />  
                        </li>
                    ))
                }
        </ul>
    );
};
