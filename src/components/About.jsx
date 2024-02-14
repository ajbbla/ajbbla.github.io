import React, { useState, useEffect } from 'react'
import AboutLight from '../assets/images/about-light.png'
import AboutDark from '../assets/images/about-dark.png'
import { TypeAnimation } from 'react-type-animation'
import usePageVisit from '../hooks/usePageVisit'

const About = () => {
    const { isVisited, isTypingDone, setIsTypingDone } = usePageVisit('aboutPage')
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'

    return (
        <article className='min-h-screen max-h-full dark:bg-black'>
            <section className='max-w-[1040px] m-auto md:px-20 p-4 py-16'>
                <header className='py-8 mb-8 fade-in font-chicago text-4xl text-center text-gray-800 border-b dark:text-gray-300 dark:border-gray-900'>
                    <h1>ABOUT</h1>
                </header>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid gap-2 px-4'>
                        <picture className='fade-in'>
                            <source
                                srcset={AboutDark}
                                media="(prefers-color-scheme: dark)"
                                className='mx-auto h-80 w-80'
                            />
                            <img
                                src={AboutLight}
                                alt='Information icon in a pixel art style'
                                className='mx-auto h-80 w-80'
                            />
                        </picture>
                        <div>
                            <h2 className='mb-8 text-2xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                                {/* Display a typing animation on first visit or static content otherwise */}
                                {!isVisited ? (
                                    <>
                                        {/* A hidden copy of the text for screenreader accessibility */}
                                        <span className='visually-hidden'>
                                            Hi, I'm Allen — an ESL instructor turned software engineer.
                                        </span>
                                        <TypeAnimation
                                            aria-hidden='true'  // Removes element from the a11y tree
                                            cursor={false} 
                                            className={CURSOR_CLASS_NAME}
                                            sequence={[
                                                2000,
                                                "Hi, I'm Allen —",
                                                1000,
                                                "Hi, I'm Allen — an ESL instructor turned software engineer.",
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
                                        Hi, I'm Allen — an ESL instructor turned software engineer.
                                    </span>
                                )}
                            </h2>
                            <div className={isVisited || isTypingDone ? 'fade-in' : 'opacity-0'}>
                                <p className='font-geneva text-gray-800 dark:text-gray-300'>
                                    With nearly a decade of experience teaching English to adult learners from various 
                                    backgrounds and cultures, I've honed key skills in communication, adaptability, and 
                                    problem-solving. Transitioning from education to technology, I've recently completed
                                    a Bachelor of Science in Computer Science, marking a significant pivot in my career. 
                                    My teaching background grants me a distinct approach to software engineering, 
                                    allowing me to merge my passions for language and technology and develop creative 
                                    and thoughtful solutions to the complex problems of the tech industry.
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