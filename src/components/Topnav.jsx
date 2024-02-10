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
            <div className='hidden md:flex fixed z-[99] w-full h-[60px] border-b pt-4 bg-white dark:bg-black dark:border-green-900'>
                <ul className='flex lg:mr-0 ml-auto mr-auto'>
                    {
                        links.map(([title, link]) => (
                            <li>
                                <a
                                    href={link}
                                    className='hoverable text-xl font-mono font-bold m-4 px-[1px] text-gray-800 dark:text-green-500 text-shadow-[0px_0px_15px] shadow-green-300'
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
                            className='m-4 py-2 px-4 text-sm text-white font-mono font-bold text-center rounded-md bg-gray-800 hover:bg-white hover:text-gray-800 border-2 border-gray-800 dark:text-green-900 dark:bg-green-500 dark:border-green-500 dark:hover:bg-black dark:hover:text-green-500 dark:shadow-[0px_0px_15px] dark:shadow-green-300 dark:hover:text-shadow-[0px_0px_15px]'
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden fixed z-[99] w-full h-[60px] border-b pt-4 bg-white dark:bg-black dark:border-green-900'>
                <div
                    onClick={handleNav}
                    className='top-5 right-5 z-[99] fixed cursor-pointer md:hidden text-gray-800 dark:text-green-500'
                >
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>
                {
                    nav ? (
                        <div className='fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20 dark:bg-black'>
                            {
                                links.map(([title, link]) => (
                                    <a
                                        href={link}
                                        onClick={handleNav}
                                        className='m-8 px-[1px]'
                                    >
                                        <span className='hoverable text-4xl text-gray-800 font-mono font-bold dark:text-green-500 text-shadow-[0px_0px_15px] shadow-green-300'>
                                            {title}
                                        </span>
                                    </a>
                                ))}
                            <div className='m-8'>
                                <a
                                    href={Resume}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='py-2 px-4 text-2xl text-white font-mono font-bold text-center rounded-md bg-gray-800 border-2 border-gray-800 hover:bg-white hover:text-gray-800 dark:text-green-900 dark:bg-green-500 dark:border-green-500 dark:hover:bg-black dark:hover:text-green-500 dark:shadow-[0px_0px_15px] dark:shadow-green-300 dark:hover:text-shadow-[0px_0px_15px]'
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