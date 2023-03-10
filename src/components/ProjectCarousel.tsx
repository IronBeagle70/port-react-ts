import React, {useState} from 'react';
import { ProjectCategory } from '../interfaces/ProjectCategory';
import ProjectCard from './ProjectCard';

interface ProjectCarouselProps{
    projectsCategory: ProjectCategory[];
}

export default function ProjectCarousel({projectsCategory}: ProjectCarouselProps) {

    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all' 
    ? projectsCategory.flatMap(category => category.projects) 
    : projectsCategory.find(category => category.category === activeCategory)?.projects || [];

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category)
    };

    return (
        <div>
            <div>
                <button onClick={()=> handleCategoryClick('all')} >All</button>
                {
                    projectsCategory.map(category => (
                        <button key={category.category} onClick={()=> handleCategoryClick(category.category)} >
                            {category.category}
                        </button>
                    ))
                }
            </div>
            <div>
                {
                    filteredProjects.map(project =>(
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </div>
        </div>
    );
};
