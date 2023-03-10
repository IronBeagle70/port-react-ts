import React, {useState} from 'react';
import { projects } from '../projects';
import { ProjectCategory } from '../interfaces/ProjectCategory';

import ProjectButtons from './ProjectButtons';
import ProjectCarousel from './ProjectCarousel';

interface ProjectsProps{
    projectsCategory: ProjectCategory[];
}

export default function Projects({projectsCategory}: ProjectsProps) {

    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all' 
    ? projectsCategory.flatMap(category => category.projects) 
    : projectsCategory.find(category => category.category === activeCategory)?.projects || [];

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category)
    };

    return (
        <div className='flex flex-col justify-center gap-[10vmin] workspace'>
            <div className='gap-4 flex flex-col justify-center'>
                <div>
                    <h1 className='flex flex-wrap font-bold text-3xl min-[350px]:text-4xl min-[425px]:text-5xl sm:text-6xl lg:text-7xl'>
                        <span className='text-color-text'>My&nbsp;</span>
                        <span className='text-main-color-text'>projects</span>
                    </h1>
                </div>
                <ProjectButtons projectsCategory = {projectsCategory} handleCategoryClick={handleCategoryClick} />
            </div>
            <div className='card'>
                <ProjectCarousel filteredProjects = {filteredProjects} /> 
            </div>
        </div>
    );
};
