import React from 'react'

export default function HeaderComponent() {
    return (
        <header className='bg-bg-general flex justify-end items-center head-width h-[130px] left-0 absolute right-0 top-0 text-color-text font-normal text-sm min-[350px]:text-base border-b border-solid border-color-border main-padding-head z-[103] '>
            {/* <div>
                <a href="#">Logo</a>
            </div> */}
            <nav>
                <ul className='flex items-center justify-center gap-[10px]'>
                    <li>
                        <a className='head-padding hover:text-main-color-text transition-all duration-200 ease-in-out' href="#welcome">Home</a>
                    </li>
                    <li>
                        <a className='head-padding hover:text-main-color-text transition-all duration-200 ease-in-out' href="#about">About me</a>
                    </li>
                    <li>
                        <a className='head-padding hover:text-main-color-text transition-all duration-200 ease-in-out' href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
