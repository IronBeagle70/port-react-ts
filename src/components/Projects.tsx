import React from 'react';
import { projects } from '../projects';

import ProjectCarousel from './ProjectCarousel';

export default function Projects() {
    return (
        <div className='flex flex-col justify-center gap-[10vmin] workspace'>
            <div className='gap-4 flex flex-col justify-center'>
                <div>
                    <h1 className='flex flex-wrap font-bold text-3xl min-[350px]:text-4xl min-[425px]:text-5xl sm:text-6xl lg:text-7xl'>
                        <span className='text-color-text'>My&nbsp;</span>
                        <span className='text-main-color-text'>projects</span>
                    </h1>
                </div>
                {/* <div>
                    
                </div> */}
            </div>
            <div className='card'>
                <ProjectCarousel projectsCategory = {projects} />
            </div>
        </div>
    );
};
