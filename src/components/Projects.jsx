import React, { useState, useEffect } from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../assets/images/property.jpg'
import cryptoImg from '../assets/images/crypto.jpg'
import netflixImg from '../assets/images/netflix.jpg'
import twitchImg from '../assets/images/twitch.jpg'
import { TypeAnimation } from 'react-type-animation'
import usePageVisit from '../hooks/usePageVisit'

const Projects = () => {
    const { isVisited, isTypingDone, setIsTypingDone } = usePageVisit('projectsPage')
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'
    
    const projects = [
        [cryptoImg, 'Small Shell', 'C, UNIX Process API', '/demogoeshere', 'https://github.com/ajbbla/smallsh'],
        [propertyImg, 'Graded Reader Generator', 'JavaScript, Express, Node.js', '/demogoeshere', '/codegoeshere'],
        [netflixImg, 'Cargo Port Management REST API', 'JavaScript, Express, Node.js, Google Cloud Platform', '/demogoeshere', '/codegoeshere'],
        [twitchImg, 'TicTacToe Server/Client', 'Python', '/demogoeshere', '/codegoeshere'],
    ]

    return (
        <article className='w-full h-full dark:bg-black'>
            <section className='max-w-[1040px] m-auto md:px-20 p-4 py-16'>
                <header className='py-8 mb-8 fade-in text-4xl text-center font-chicago text-gray-800 border-b dark:text-gray-300 dark:border-gray-900'>
                    <h1>Projects</h1>
                </header>
                <div className='max-w-[1000px] w-full px-4'>
                    <h2 className='text-left pb-8 text-2xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                        {/* Display a typing animation on first visit or static content otherwise */}
                        {!isVisited ? (
                            <>
                                {/* A hidden copy of the text for screenreader accessibility */}
                                <span className='visually-hidden'>
                                    My goal is to use my skills and experience to create innovative solutions and make a positive impact in the field of technology.
                                </span>
                                <TypeAnimation
                                    aria-hidden='true'  // Removes element from the a11y tree
                                    cursor={false}
                                    className={CURSOR_CLASS_NAME}
                                    sequence={[
                                        2000,
                                        "My goal is to use my skills and experience to create innovative solutions and make a positive impact in the field of technology.",
                                        (el) => el.classList.remove(CURSOR_CLASS_NAME),
                                        () => {
                                            setIsTypingDone(true)
                                        }
                                    ]}
                                    wrapper='span'
                                    repeat={0}
                                    speed={50}
                                />
                            </>
                        ) : (
                            <span className='fade-in'>
                                My goal is to use my skills and experience to create innovative solutions and make a positive impact in the field of technology.
                            </span> 
                        )}
                    </h2>
                    <div className={ isVisited || isTypingDone ? 'fade-in' : 'opacity-0'}>
                        <p className='text-center font-geneva pb-8 text-gray-800 dark:text-gray-300' >
                            Check out additional projects on <a
                                href='https://github.com/ajbbla'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='cursor-pointer underline text-teal-500'
                                aria-label='Visit my GitHub profile for additional projects'
                            >
                                GitHub
                            </a>.
                        </p>
                        <div className='grid sm:grid-cols-2 gap-10'>
                        {
                            projects.map(([image, title, tools, demo, code], index) => (
                                <ProjectItem key={index} img={image} title={title} tools={tools} demo={demo} code={code} />
                            ))
                        }
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Projects