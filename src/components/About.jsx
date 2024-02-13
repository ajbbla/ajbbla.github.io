import React from 'react'
import Allen from '../assets/images/allen.jpg'
import AboutLight from '../assets/images/about-light.png'
import AboutDark from '../assets/images/about-dark.png'

const About = () => {
    return (
        <div className='dark:bg-black'>
            <div id='about' className='max-w-[1040px] m-auto md:px-20 p-4 py-16 font-chicago'>
                <h1 className='py-8 mb-10 text-4xl text-center text-gray-800 border-b dark:text-gray-300 dark:border-gray-900'>
                    About
                </h1>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid gap-2 lg:grid-cols-2 px-4'>
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
                            <div className='mb-8 text-2xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                                <p>
                                    Hi, I'm Allen — an ESL teacher turned software engineer.
                                </p>
                            </div>
                            <div>
                                <p className='font-geneva text-gray-800 dark:text-gray-300'>
                                    I have 6 years of experience teaching English to adult students from a
                                    diverse set of backgrounds and cultures, which has given me valuable skills
                                    in communication, problem-solving, and adaptability. I have always been
                                    passionate about both technology and language, and I believe that with my
                                    background in teaching I bring a unique perspective on how to approach 
                                    and solve problems in the field of software engineering.
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