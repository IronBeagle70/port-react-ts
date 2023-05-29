import React, {useState, useEffect} from 'react';
import { Project } from '../interfaces/Project';
import { ProjectCategory } from '../interfaces/ProjectCategory';
import ProjectCard from './ProjectCard';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface ProjectCarouselProps{
    filteredProjects: Project[];
}

export default function ProjectCarousel({filteredProjects}: ProjectCarouselProps) {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentIndex(0);
    }, [filteredProjects]);

    const handlePrevClick=():void=>{
        if(currentIndex>0){
            setCurrentIndex(currentIndex - 1);
        };
    };
    
    const handleNextClick=():void=>{
        if(currentIndex < filteredProjects.length - 1){
            setCurrentIndex(currentIndex+1);
        };
    };
    
    return (
        <>
            <ul className='h-full flex transition-transform ease-in-out duration-500' style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                {
                    filteredProjects.map((project,index) =>(
                        <li key={project.id} className={`li-card `} style={{ marginRight: index === filteredProjects.length - 1 ? 0 : '1rem' }}  >
                            <ProjectCard  project={project} />
                        </li>
                    ))
                }
            </ul>
            <div className='flex items-center justify-between mt-2'>
                <FaArrowCircleLeft className='text-main-color-text text-2xl cursor-pointer' onClick={handlePrevClick}></FaArrowCircleLeft>
                <FaArrowCircleRight className='text-main-color-text text-2xl cursor-pointer' onClick={handleNextClick}></FaArrowCircleRight>
            </div>
        </>
    );
};
