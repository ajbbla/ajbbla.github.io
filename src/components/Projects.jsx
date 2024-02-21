import React, { useState, useEffect } from 'react'
import ProjectItem from './ProjectItem'
import { TypeAnimation } from 'react-type-animation'
import usePageVisit from '../hooks/usePageVisit'
import ProjectsLight from '../assets/images/projects-light.png'
import ProjectsDark from '../assets/images/projects-dark.png'
import projectsData from '../data/projectsData'

const Projects = () => {
    const { isVisited, isTypingDone, setIsTypingDone } = usePageVisit('projectsPage')
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'
    
    return (
        <article className='w-full h-full dark:bg-black'>
            <section className='max-w-[1040px] m-auto md:px-20 p-4 py-16'>
                <header className='py-8 mb-8 fade-in text-4xl text-center font-chicago text-gray-800 border-b dark:text-gray-300 dark:border-gray-900'>
                    <h1>PROJECTS</h1>
                </header>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid gap-0 px-4'>
                        <picture className='w-60 h-60 ml-auto mr-auto fade-in'>
                            <source 
                                srcset={ProjectsDark}
                                media='(prefers-color-scheme: dark)'
                            />
                            <img 
                                src={ProjectsLight}
                                alt="An 8-bit rendering of code in a text editor" 
                            />
                        </picture>
                        <h2 className='pb-8 text-2xl text-center font-geneva font-bold text-gray-800 dark:text-gray-300'>
                            {/* Display a typing animation on first visit or static content otherwise */}
                            {!isVisited ? (
                                <>
                                    {/* A hidden copy of the text for screenreader accessibility */}
                                    <span className='visually-hidden'>
                                        Take a look at what I've been working on and what I've learned.
                                    </span>
                                    <TypeAnimation
                                        aria-hidden='true'  // Removes element from the a11y tree
                                        cursor={false}
                                        className={CURSOR_CLASS_NAME}
                                        sequence={[
                                            2000,
                                            "Take a look at what I've been working on and what I've learned.",
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
                                    Take a look at what I've been working on and what I've learned.
                                </span> 
                            )}
                        </h2>
                        <div className={ isVisited || isTypingDone ? 'fade-in' : 'opacity-0'}>
                            <p className='text-center text-lg font-geneva pb-8 text-gray-800 dark:text-gray-300' >
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
                                projectsData.map(project => (
                                    <ProjectItem key={project.id} {...project} />
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Projects