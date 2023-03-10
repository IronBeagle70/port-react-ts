import React, {useState} from 'react';
import { ProjectCategory } from '../interfaces/ProjectCategory';

interface ProjectButtonsProps{
    projectsCategory: ProjectCategory[];
    handleCategoryClick: (category: string ) => void;
}

export default function ProjectButtons({projectsCategory, handleCategoryClick}: ProjectButtonsProps) {

    return (
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
    );
};
