import React from 'react'

export default function HeaderComponent() {
    return (
        <header className='bg-bg-general flex justify-between items-center absolute top-0 right-0 left-0 text-color-text font-normal text-sm md:text-base w-full h-[130px] border-b border-solid border-color-border main-padding-head'>
            <div>
                <a href="#">Logo</a>
            </div>
            <nav>
                <ul className='flex items-center justify-center gap-[10px]'>
                    <li>
                        <a className='p-4 hover:text-main-color-text transition-all duration-200 ease-in-out' href="#">Home</a>
                    </li>
                    <li>
                        <a className='p-4 hover:text-main-color-text transition-all duration-200 ease-in-out' href="#">About me</a>
                    </li>
                    <li>
                        <a className='p-4 hover:text-main-color-text transition-all duration-200 ease-in-out' href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
