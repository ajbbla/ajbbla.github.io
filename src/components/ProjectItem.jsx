import React from 'react'

const ProjectItem = ({ img, title, tools, demo, code }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full rounded-xl group border-gray-300 dark:border-gray-700 border-2 transition hover:scale-105'>
            <img src={img} alt={title} className='rounded-xl opacity-10' />
            <div className='block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl sm:text-lg lg:text-2xl font-geneva font-bold text-gray-800 tracking-wider text-center dark:text-gray-300'>
                    {title}
                </h3>
                <p className='pb-4 pt-2 text-lg sm:text-sm lg:text-lg font-geneva text-gray-800 text-center dark:text-gray-300'>
                    {tools}
                </p>
                <div className='flex justify-center'>
                    <a
                        href={demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-center mx-2 py-1 px-3 rounded-lg bg-gray-300 border-2 border-gray-300 text-black font-chicago cursor-pointer text-sm hover:text-white hover:bg-teal-500 hover:border-teal-500 dark:text-white dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-teal-500 dark:hover:border-teal-500 dark:hover:text-black'
                    >
                        DEMO
                    </a>
                    <a
                        href={code}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-center mx-2 py-1 px-3 rounded-lg bg-gray-300 border-2 border-gray-300 text-black font-chicago cursor-pointer text-sm hover:text-white hover:bg-teal-500 hover:border-teal-500 dark:text-white dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-teal-500 dark:hover:border-teal-500 dark:hover:text-black'
                    >
                        CODE
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ProjectItem