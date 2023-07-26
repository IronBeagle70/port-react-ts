import React, {useState} from 'react';
import { projects } from '../projects';
import { ProjectCategory } from '../interfaces/ProjectCategory';

import ProjectButtons from './ProjectButtons';
import ProjectCarousel from './ProjectCarousel';



export default function Projects({projectsCategory}: any) {

    // const [activeCategory, setActiveCategory] = useState('all');
    
    // const filteredProjects = activeCategory === 'all' 
    // ? projectsCategory.flatMap(category => category.projects) 
    // : projectsCategory.find(category => category.category === activeCategory)?.projects || [];

    // const handleCategoryClick = (category: string) => {
    //     setActiveCategory(category)
    // };

    return (
        <div className='flex flex-col justify-center gap-[10vmin] workspace'>
            <div className='gap-4 flex flex-col justify-center'>
                <div className='mb-4'>
                    <h1 className='flex flex-wrap font-bold text-3xl min-[350px]:text-4xl min-[425px]:text-5xl sm:text-6xl lg:text-7xl'>
                        <span className='text-color-text'>Mis&nbsp;</span>
                        <span className='text-main-color-text'>proyectos</span>
                    </h1>
                </div>
                {/* <ProjectButtons projectsCategory = {projectsCategory} handleCategoryClick={handleCategoryClick} selectedCategory={activeCategory} /> */}
            </div>
            {/* <div className='w-full mb-[20vmin]'>
                <div>
                    <div>
                        <div className='overflow-hidden relative w-full'>
                            <ProjectCarousel filteredProjects = {filteredProjects} /> 
                        </div>
                    </div>
                </div>
            </div> */}
            {
                projectsCategory.map((project : any) => (
                    <div className='text-color-text flex flex-col items-center justify-center gap-4'>
                        <p className='text-main-color-text text-4xl'>Semana {project.nro}</p>
                        <img className='w-80' src={project.img} alt="semana_img" />
                        <p>{project.descripcion}</p>
                    </div>
                ))
            }
        </div>
    );
};
