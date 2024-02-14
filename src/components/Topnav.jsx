import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Resume from '../assets/ajbb-resume.pdf'
import { FaBars, FaTimes } from 'react-icons/fa'

const Topnav = () => {
    const location = useLocation()
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const links = [
        { title: 'HOME', path: '/' },
        { title: 'ABOUT', path: '/about' },
        { title: 'PROJECTS', path: '/projects' },
        { title: 'CONTACT', path: '/contact' },
    ]

    return (
        <>
            {/* Navbar */}
            <div className='hidden md:flex fixed z-[99] w-full h-[60px] border-b pt-4 bg-white dark:bg-black dark:border-gray-900 font-chicago'>
                <ul className='flex lg:mr-0 ml-auto mr-auto'>
                    {
                        links.map(({title, path}) => (
                            <li key={title}>
                                <Link
                                    to={path}
                                    className={`text-xl m-4 px-[1px] ${location.pathname === path ? 'text-gray-300 dark:text-gray-800 pointer-events-none' : 'text-gray-800 dark:text-gray-300 hover:text-teal-500'}`}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                    <li>
                        {/* Opens pdf file in a new tab */}
                        <a
                            href={Resume}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='m-4 py-1 px-3 text-xl text-gray-800 text-center rounded-md bg-gray-200 hover:bg-teal-500 border-2 border-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-black hover:border-teal-500 hover:text-white'
                        >
                            RESUME
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden fixed z-[99] w-full h-[60px] border-b pt-4 bg-white dark:bg-black dark:border-gray-900'>
                <div
                    onClick={handleNav}
                    className='top-5 right-5 z-[99] fixed cursor-pointer md:hidden text-gray-800 dark:text-gray-300 hover:text-teal-500'
                >
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>
                {
                    nav && (
                        <div className='fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20 dark:bg-black font-chicago'>
                            {
                                links.map(({ title, path }) => (
                                    <Link
                                        key={title}
                                        to={path}
                                        onClick={handleNav}  // Close the mobile menu on click
                                        className='m-8 px-[1px]'
                                    >
                                        <span className={`text-4xl ${location.pathname === path ? 'text-gray-300 dark:text-gray-800 pointer-events-none' : 'text-gray-800 dark:text-gray-300 hover:text-teal-500'}`}>
                                            {title}
                                        </span>
                                    </Link>
                                ))
                            }
                            <div className='m-12'>
                                <a
                                    href={Resume}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='py-2 px-4 text-4xl text-gray-800 text-center rounded-xl bg-gray-200 border-2 border-gray-200 hover:bg-teal-500 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-black hover:border-teal-500 hover:text-white'
                                >
                                    RESUME
                                </a>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Topnav