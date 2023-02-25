import React from 'react'

export default function HeaderComponent() {
    return (
        <header className='bg-bg-general flex justify-between'>
            <div>
                <a href="#">Logo</a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About me</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
