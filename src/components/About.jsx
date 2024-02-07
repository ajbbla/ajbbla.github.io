import React from 'react'
import Allen from '../assets/allen.jpg'

const About = () => {
    return (
        <div className='dark:bg-slate-800'>
            <div id='about' className='max-w-[1040px] m-auto md:px-20 p-4 py-16 font-mono'>
                <h1 className='py-8 mb-10 text-4xl font-bold text-center text-gray-800 border-b dark:text-gray-300 dark:border-slate-700 text-shadow-[0.75px_0.75px_1.25px] shadow-black dark:shadow-white'>
                    About
                </h1>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid gap-8 lg:grid-cols-2 px-4'>
                        <img
                            src={Allen}
                            className='lg:mt-8 mx-auto rounded-full h-80 w-80 shadow-lg shadow-gray-400 dark:shadow-slate-900'
                        />
                        <div>
                            <div className='mb-8 text-2xl font-bold text-gray-800 dark:text-gray-300 text-shadow-[0.5px_0.5px_1px] shadow-black dark:shadow-white'>
                                <p>
                                    Hi! I'm Allen, an ESL teacher turned software engineer.
                                </p>
                            </div>
                            <div>
                                <p className='text-gray-800 dark:text-gray-300'>
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