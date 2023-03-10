import React, {useState} from 'react';
import { ProjectCategory } from '../interfaces/ProjectCategory';

interface ProjectButtonsProps{
    projectsCategory: ProjectCategory[];
    handleCategoryClick: (category: string ) => void;
    selectedCategory :string;
}

export default function ProjectButtons({projectsCategory, handleCategoryClick, selectedCategory}: ProjectButtonsProps) {

    return (
        <div className='flex flex-wrap gap-4'>
            <button className={`${selectedCategory === 'all' ? 'bg-main-color-text': 'bg-bg-second-btn'} cursor-pointer text-color-text text-sm min-[350px]:text-base lg:text-lg btn-text-shadow btn-box-shadow flex items-center justify-center py-[10px] px-6 md:px-7 lg:px-8 font-bold rounded-[1000px] max-w-full md:max-w-[240px] gap-3`} onClick={()=>  handleCategoryClick('all')} >All</button>
                {
                    projectsCategory.map(category => (
                        <button key={category.category} onClick={()=> handleCategoryClick(category.category)} className={`${selectedCategory === category.category ? 'bg-main-color-text': 'bg-bg-second-btn'} cursor-pointer text-color-text text-sm min-[350px]:text-base lg:text-lg btn-text-shadow btn-box-shadow flex items-center justify-center py-[10px] px-6 md:px-7 lg:px-8 font-bold rounded-[1000px] max-w-full md:max-w-[240px] gap-3`} >
                            {category.category}
                        </button>
                    ))
                }
        </div>
    );
};
