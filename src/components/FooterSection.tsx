import React from 'react';

import { FiHome, FiUser, FiMail } from "react-icons/fi";
// import { IconName } from "react-icons/tb";

export default function FooterSection() {
    return (
        <div className='flex flex-col gap-6 workspace'>
            <div className='flex flex-col items-center justify-center gap-8'>
                <nav>
                    <ul className=' flex flex-col items-center justify-center gap-5 min-[450px]:flex-row min-[450px]:gap-[10px] '>
                        <li>
                            <a className='text-sm min-[500px]:text-base text-color-text flex items-center justify-center min-[450px]:p-4 hover:text-main-color-text transition-all duration-200 ease-in-out' href="#welcome">
                                <FiHome className='footer-icons transition-none text-color-text' />
                                Home
                            </a>
                        </li>
                        <li>
                            <a className='text-sm min-[500px]:text-base text-color-text flex items-center min-[450px]:p-4 hover:text-main-color-text transition-all duration-200 ease-in-out' href="#about">
                                <FiUser className='footer-icons transition-none text-color-text' />
                                About me
                            </a>
                        </li>
                        <li>
                            <a className='text-sm min-[500px]:text-base text-color-text flex items-center min-[450px]:p-4 hover:text-main-color-text transition-all duration-200 ease-in-out' href="#contact">
                                <FiMail className='footer-icons transition-none text-color-text' />
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='text-color-text text-base min-[500px]:text-lg flex items-center'>
                    Project: <a href="https://github.com/IronBeagle70/port-react-ts" target="_blank" rel="noopener noreferrer" className='ml-2 font-bold text-main-color-text btn-text-shadow hover:text-color-text' >Repository link</a>
                </div>
            </div>
        </div>
    );
};
