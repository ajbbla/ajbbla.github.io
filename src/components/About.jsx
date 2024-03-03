import React, { useState, useLayoutEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import usePageVisit from '../hooks/usePageVisit'
import AboutLight from '../assets/images/about-light.png'
import AboutDark from '../assets/images/about-dark.png'

const About = () => {
    const { visitCount } = usePageVisit('aboutPage')
    const [isTypingDone, setIsTypingDone] = useState(false)
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'

    return (
        <article className='min-h-screen max-h-full bg-white dark:bg-black'>
            <section className='max-w-[1040px] m-auto md:px-20 p-4 py-16'>
                <header className='py-8 mb-8 fade-in font-chicago text-4xl text-center text-gray-800 border-b dark:text-gray-300 dark:border-gray-900'>
                    <h1>ABOUT</h1>
                </header>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid gap-0 px-4'>
                        <picture className='w-60 h-60 ml-auto mr-auto fade-in'>
                            <source 
                                srcSet={AboutDark}
                                media='(prefers-color-scheme: dark)'
                            />
                            <img 
                                src={AboutLight}
                                alt="A lowercase 'i' inside an 8-bit chat bubble" 
                            />
                        </picture>
                        <h2 className='mb-8 text-2xl text-center font-geneva font-bold text-gray-800 dark:text-gray-300'>
                            {/* Display a typing animation on first visit or static content otherwise */}
                            {visitCount === 1 ? (
                                <>
                                    {/* A hidden copy of the text for screenreader accessibility */}
                                    <span className='visually-hidden'>
                                        Welcome! I'm Allen — an ESL instructor turned software engineer.
                                    </span>
                                    <TypeAnimation
                                        aria-hidden='true'  // Removes element from the a11y tree
                                        cursor={false} 
                                        className={CURSOR_CLASS_NAME}
                                        sequence={[
                                            2000,
                                            "Welcome!",
                                            1000,
                                            "Welcome! I'm Allen —",
                                            1000,
                                            "Welcome! I'm Allen — an ESL instructor turned software engineer.",
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
                                    Welcome! I'm Allen — an ESL instructor turned software engineer.
                                </span>
                            )}
                        </h2>
                        <div className={visitCount > 1 || isTypingDone ? 'fade-in' : 'opacity-0'}>
                            <div className='text-lg'>
                                <p className='pb-4 font-geneva text-gray-800 dark:text-gray-300'>
                                    For nearly a decade, I've navigated language and culture as an English as a 
                                    Second Language (ESL) educator, forging connections with adult learners both 
                                    at home and abroad. This journey has not only honed my ability to empathize 
                                    with diverse perspectives but also instilled in me the profound commitment to 
                                    adaptability and continuous growth that I witnessed firsthand in each of my 
                                    students.
                                </p>
                                <p className='pb-4 font-geneva text-gray-800 dark:text-gray-300'>
                                    Guided by that commitment to growth, I've decided to make the leap into the 
                                    industry where learning truly never stops: software engineering. A newly 
                                    minted Bachelor of Science in Computer Science has me rooted in the 
                                    fundamentals of programming such as computer architecture, operating systems, 
                                    networks, and of course data structures and algorithms. 
                                </p>
                                <p className='pb-4 font-geneva text-gray-800 dark:text-gray-300'>
                                    My journey in programming encompasses an array of languages and frameworks, 
                                    from experimenting with Unix system programming in C and investigating 
                                    parallel programming in C++ to delving into the vibrant world of web design 
                                    through JavaScript, React, and Node.js/Express. Recently, I've been 
                                    immersing myself in Python and its spectrum of frameworks and libraries, 
                                    exploring Django, Flask, and my current favorite, FastAPI, while delving 
                                    into the realms of Natural Language Processing (NLP) and cloud application 
                                    development.
                                </p>
                                <p className='pb-4 font-geneva text-gray-800 dark:text-gray-300'>
                                    At the heart of my programming philosophy is a blend of curiosity and the 
                                    insatiable need to solve problems. I thoroughly enjoy breaking down seemingly 
                                    impossible tasks into small, manageable components, weaving them together 
                                    into elegant solutions. With meticulous attention to detail and a penchant 
                                    for experimentation, I thrive on pushing the boundaries of my abilities and 
                                    working with others who feel the same.
                                </p>
                                <p className='pb-4 font-geneva text-gray-800 dark:text-gray-300'>
                                    As I embark on this new chapter, I'm driven by a deep-seated desire to 
                                    leverage my unique blend of skills and perspectives to confront the challenges 
                                    that lie ahead. My background in ESL education has blessed me with invaluable 
                                    communication skills, flexibility, and a heightened sense of empathy, enriching 
                                    my approach to software engineering and positioning me to make meaningful 
                                    contributions to the field.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default About