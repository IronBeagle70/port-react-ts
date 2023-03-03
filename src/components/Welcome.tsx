import React from 'react';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import jsLogo from '../assets/js.svg';
import download from '../assets/download.svg';


export default function Welcome() {
    return (
        <div className='flex items-center justify-center workspace'>
            <div className='flex items-end welcome-container'>
                <div className='flex flex-col welcome-data-container'>
                    <div className='flex title-center flex-col flex-wrap'>
                        <h1 className='font-bold text-5xl min-[350px]:text-6xl min-[425px]:text-7xl sm:text-[84px] lg:text-8xl text-color-text'>Frontend</h1>
                        <h1 className='font-bold text-5xl min-[350px]:text-6xl min-[425px]:text-7xl sm:text-[84px] lg:text-8xl text-main-color-text'>Developer</h1>
                    </div>
                    <div className='flex items-center btns-center flex-wrap gap-6'>
                        <a href="#contact" className='bg-main-color-text cursor-pointer text-color-text text-sm min-[350px]:text-base lg:text-lg btn-text-shadow btn-box-shadow flex items-center justify-center py-[10px] px-6 md:px-7 lg:px-8 font-bold rounded-[1000px] max-w-full md:max-w-[240px] gap-3'> 
                            <span>Contact me</span>
                        </a>
                        <a className='bg-bg-second-btn cursor-pointer text-color-text text-sm min-[350px]:text-base lg:text-lg btn-text-shadow btn-box-shadow flex items-center justify-center py-[10px] px-6 md:px-7 lg:px-8 font-bold rounded-[1000px] max-w-full md:max-w-[240px] gap-3'>
                            <span>Download CV</span>
                            <img className='w-4 md:w-[18px]' src={download} alt="download_svg" />
                        </a>
                    </div>
                </div>
                
            </div>
            <div className='svg-container items-center justify-center flex-1 max-w-[600px] max-h-[430px]'>
                <img className='svg-welcome' src={htmlLogo} alt="logo_html" />
                <img className='svg-welcome' src={cssLogo} alt="logo_css" />
                <img className='svg-welcome' src={jsLogo} alt="logo_js" />
            </div>
        </div>
    );
};
