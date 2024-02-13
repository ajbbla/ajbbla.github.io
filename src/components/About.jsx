import React from 'react'
import AboutLight from '../assets/images/about-light.png'
import AboutDark from '../assets/images/about-dark.png'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
    return (
        <div className='dark:bg-black'>
            <div id='about' className='max-w-[1040px] m-auto md:px-20 p-4 py-16 font-chicago'>
                <h1 className='py-8 mb-8 text-4xl text-center text-gray-800 border-b dark:text-gray-300 dark:border-gray-900'>
                    About
                </h1>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid gap-2  px-4'>
                        <picture>
                            <source
                                srcset={AboutDark}
                                media="(prefers-color-scheme: dark)"
                                className='mx-auto h-80 w-80'
                            />
                            <img
                                src={AboutLight}
                                className='mx-auto h-80 w-80'
                            />
                        </picture>
                        <div>
                            <h2 className='mb-8 text-2xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                                <TypeAnimation 
                                    sequence={[
                                        3000,
                                        "Hi, I'm Allen —",
                                        1000,
                                        "Hi, I'm Allen — an ESL instructor turned software engineer.",
                                    ]}
                                    wrapper="h2"
                                    cursor={true}
                                    repeat={0}
                                    speed={50}
                                />
                            </h2>
                            <div>
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
            </div>
        </div>
    )
}

export default About