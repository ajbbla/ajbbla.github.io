import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../assets/images/property.jpg'
import cryptoImg from '../assets/images/crypto.jpg'
import netflixImg from '../assets/images/netflix.jpg'
import twitchImg from '../assets/images/twitch.jpg'

const Projects = () => {
    const projects = [
        [cryptoImg, 'Small Shell', 'C, UNIX Process API', '/demogoeshere', 'https://github.com/ajbbla/smallsh'],
        [propertyImg, 'Graded Reader Generator', 'JavaScript, Express, Node.js', '/demogoeshere', '/codegoeshere'],
        [netflixImg, 'Cargo Port Management REST API', 'JavaScript, Express, Node.js, Google Cloud Platform', '/demogoeshere', '/codegoeshere'],
        [twitchImg, 'TicTacToe Server/Client', 'Python', '/demogoeshere', '/codegoeshere'],
    ]

    return (
        <div className='dark:bg-black'>
            <div id='projects' className='max-w-[1040px] m-auto md:px-20 p-4 py-16 font-chicago'>
                <h1 className='py-8 mb-10 text-4xl text-center text-gray-800 border-b dark:text-gray-300 dark:border-gray-900'>
                    Projects
                </h1>
                <div className='max-w-[1000px] w-full px-4'>
                    <p className='text-left pb-10 text-xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                        My goal is to use my skills and experience to create innovative solutions
                        and make a positive impact in the field of technology. Check out
                        additional projects on my <a
                            href='https://github.com/ajbbla'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer underline text-blue-600 dark:text-teal-500'
                        >
                            Github
                        </a>.
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 gap-10'>
                    {
                        projects.map(([image, title, tools, demo, code]) => (
                            <ProjectItem img={image} title={title} tools={tools} demo={demo} code={code} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects