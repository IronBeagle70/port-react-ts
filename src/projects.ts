import {ProjectCategory} from './interfaces/ProjectCategory';

export const projects: ProjectCategory[] = [
    {
        category: 'Vanilla',
        projects: [
            {
            id: 1,
            title: 'CRUD with OOP',
            description: 'Vanilla CRUD with OOP in Node.js and web technologies',
            image: '',
            urlDeploy: '',
            urlGithub: '',
            },
            {
            id: 2,
            title: 'My first portfolio',
            description: 'Web portfolio with vanilla HTML, CSS, JS and a Node.js server',
            image: '',
            urlDeploy: '',
            urlGithub: '',
            }
        ]
    },
    {
        category: 'Front-React',
        projects: [
            {
            id: 3,
            title: 'Pokédex',
            description: 'Pokédex app made with React, consuming the official Pokemon API and deployed on Vercel',
            image: '',
            urlDeploy: '',
            urlGithub: '',
            },
            {
            id: 4,
            title: 'Static Shopping Cart',
            description: 'Shopping cart made with React and Tailwind CSS implemented in Vercel as a static website',
            image: '',
            urlDeploy: '',
            urlGithub: '',
            },
            {
            id: 5,
            title: 'Partial CRUD of items in React',
            description: 'Semi-CRUD for items made with React and Vanilla CSS uploaded to Vercel',
            image: '',
            urlDeploy: '',
            urlGithub: '',
            },
            {
            id: 6,
            title: 'My new portfolio',
            description: 'This project made with React, TypeScript, and Tailwind CSS uploaded to Vercel',
            image: '',
            urlDeploy: '',
            urlGithub: '',
            }
        ]
    },
    {
        category: 'Backend',
        projects: [
            {
            id: 7,
            title: 'Basic REST API',
            description: 'REST API CRUD for movies using a JSON file as database',
            image: '',
            urlDeploy: '',
            urlGithub: '',
            },
            {
            id: 8,
            title: 'REST API with MongoDB',
            description: 'REST API CRUD for tasks with environment variables and pagination using MongoDB',
            image: '',
            urlDeploy: '',
            urlGithub: '',
            }
        ]
    }
];