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
            <div className='hidden md:flex fixed z-[99] w-full h-[60px] border-b pt-4 bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-300 dark:border-slate-700'>
                <ul className='flex lg:mr-0 ml-auto mr-auto'>
                    {
                        links.map(([title, link]) => (
                            <li>
                                <a
                                    href={link}
                                    className='hoverable text-xl font-mono font-bold m-4 px-[1px] text-shadow-[0.5px_0.5px_1px] shadow-black dark:shadow-white'
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
                            className='m-4 py-2 px-4 text-sm text-white font-mono font-bold text-center rounded-md bg-gray-800 hover:bg-white hover:text-gray-800 border-2 border-gray-800 drop-shadow-lg hover:drop-shadow-none dark:text-slate-800 dark:bg-gray-300 dark:border-gray-300 dark:hover:bg-slate-800 dark:hover:text-gray-300'
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden fixed z-[99] w-full h-[60px] border-b pt-4 bg-white dark:bg-slate-800 dark:border-slate-700'>
                <div
                    onClick={handleNav}
                    className='top-5 right-5 z-[99] fixed cursor-pointer md:hidden text-gray-800 dark:text-gray-300'
                >
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>
                {
                    nav ? (
                        <div className='fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20 dark:bg-slate-800'>
                            {
                                links.map(([title, link]) => (
                                    <a
                                        href={link}
                                        onClick={handleNav}
                                        className='m-8 px-[1px]'
                                    >
                                        <span className='hoverable text-4xl text-gray-800 font-mono font-bold dark:text-gray-300 text-shadow-[0.75px_0.75px_1.25px] shadow-black dark:shadow-white'>
                                            {title}
                                        </span>
                                    </a>
                                ))}
                            <div className='m-8'>
                                <a
                                    href={Resume}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='py-2 px-4 text-2xl text-white font-mono font-bold text-center rounded-md bg-gray-800 border-2 border-gray-800 drop-shadow-lg shadow hover:drop-shadow-none hover:bg-white hover:text-gray-800 dark:text-slate-800 dark:bg-gray-300 dark:border-gray-300 dark:hover:bg-slate-800 dark:hover:text-gray-300'
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