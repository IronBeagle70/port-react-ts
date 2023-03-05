import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Contact() {
    return (
        <div className='flex items-center justify-center workspace'>
            <div className='flex flex-col flex-1 gap-5 sm:gap-7 mb-[5vmin]'>
                <div className='flex justify-center items-center'>
                    <h1 className='flex flex-col justify-center items-center flex-1 gap-3 sm:gap-6'>
                        <span className='font-normal text-center text-color-text text-2xl min-[350px]:text-3xl min-[425px]:text-4xl sm:text-5xl lg:text-6xl'>Let's work together!</span>
                        <span className='font-normal text-center italic text-main-color-text text-xl min-[350px]:text-2xl min-[425px]:text-3xl sm:text-4xl lg:text-5xl'>How would you like to contact me?</span>
                    </h1>
                </div>
                <div>
                    <ul className='flex items-center justify-center'>
                        <li className='mx-4'>
                            <a href="/" target="_blank" rel="noopener noreferrer" className='text-bg-icons text-2xl min-[350px]:text-3xl min-[425px]:text-4xl sm:text-5xl ' >
                                <FaFacebook />
                            </a>
                        </li>
                        <li className='mx-4'>
                            <a href="https://github.com/IronBeagle70" target="_blank" rel="noopener noreferrer" className='text-bg-icons text-2xl min-[350px]:text-3xl min-[425px]:text-4xl sm:text-5xl '>
                                <FaGithub />
                            </a>
                        </li>
                        <li className='mx-4'>
                            <a href="https://www.linkedin.com/in/alvaro-mateo-mendoza-capcha-27907a248/" target="_blank" rel="noopener noreferrer" className='text-bg-icons text-2xl min-[350px]:text-3xl min-[425px]:text-4xl sm:text-5xl '>
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
