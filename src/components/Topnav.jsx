import React, { useState } from 'react'
import Resume from '../assets/ajbb-resume.pdf'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa'

const Topnav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    const links = [
        ['Home', '#home'],
        ['About', '#about'],
        ['Projects', '#projects'],
        ['Contact', '#contact'],
    ]

    return (
        <>
            {/* Navbar */}
            <div className='hidden md:flex fixed z-[99] w-full h-[60px] border-b pt-4 bg-white dark:bg-black dark:border-gray-900 font-chicago'>
                <ul className='flex lg:mr-0 ml-auto mr-auto'>
                    {
                        links.map(([title, link]) => (
                            <li>
                                <a
                                    href={link}
                                    className='text-xl m-4 px-[1px] text-gray-800 dark:text-gray-300 hover:underline hover:text-teal-500'
                                >
                                    {title}
                                </a>
                            </li>
                        ))
                    }
                    <li>
                        {/* this should open a pdf file in a new tab */}
                        <a
                            href={Resume}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='m-4 py-2 px-4 text-sm text-white font-bold text-center rounded-md bg-gray-800 hover:bg-white hover:text-gray-800 border-2 border-gray-800 dark:text-black dark:bg-gray-300 dark:border-gray-300 dark:hover:bg-black dark:hover:border-teal-500 dark:hover:text-teal-500'
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden fixed z-[99] w-full h-[60px] border-b pt-4 bg-white dark:bg-black dark:border-gray-900'>
                <div
                    onClick={handleNav}
                    className='top-5 right-5 z-[99] fixed cursor-pointer md:hidden text-gray-800 dark:text-gray-300 dark:hover:text-teal-500'
                >
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>
                {
                    nav ? (
                        <div className='fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20 dark:bg-black font-chicago'>
                            {
                                links.map(([title, link]) => (
                                    <a
                                        href={link}
                                        onClick={handleNav}
                                        className='m-8 px-[1px]'
                                    >
                                        <span className='text-4xl text-gray-800 dark:text-gray-300 dark:hover:underline dark:hover:text-teal-500'>
                                            {title}
                                        </span>
                                    </a>
                                ))}
                            <div className='m-8'>
                                <a
                                    href={Resume}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='py-2 px-4 text-2xl text-white font-bold text-center rounded-md bg-gray-800 border-2 border-gray-800 hover:bg-white hover:text-gray-800 dark:text-gray-700 dark:bg-gray-300 dark:border-gray-300 dark:hover:bg-black dark:hover:border-teal-500 dark:hover:text-teal-500'
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                    ) : (
                        ''
                    )
                }
            </div>
        </>
    )
}

export default Topnav