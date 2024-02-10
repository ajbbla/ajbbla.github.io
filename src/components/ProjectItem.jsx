import React from 'react'

const ProjectItem = ({ img, title, tools, demo, code }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group hover:bg-white dark:shadow-slate-900 dark:hover:bg-slate-800'>
            <img src={img} alt={title} className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-chicago'>
                <h3 className='text-2xl sm:text-lg lg:text-2xl font-bold text-gray-800 tracking-wider text-center dark:text-gray-300'>
                    {title}
                </h3>
                <p className='pb-4 pt-2 text-lg sm:text-sm lg:text-lg text-gray-800 text-center dark:text-gray-300'>
                    {tools}
                </p>
                <div className='flex justify-center'>
                    {/* <a
                        href={demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-center mx-2 py-2 px-4 rounded-lg bg-gray-800 border-2 border-gray-800 text-white font-bold cursor-pointer text-sm hover:text-gray-800 hover:bg-white dark:text-slate-800 dark:bg-gray-300 dark:border-gray-300 dark:hover:bg-slate-800 dark:hover:text-gray-300'
                    >
                        Demo
                    </a> */}
                    <a
                        href={code}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-center mx-2 py-2 px-4 rounded-lg bg-gray-800 border-2 border-gray-800 text-white font-bold cursor-pointer text-sm hover:text-gray-800 hover:bg-white dark:text-slate-800 dark:bg-gray-300 dark:border-gray-300 dark:hover:bg-slate-800 dark:hover:text-gray-300'
                    >
                        Code
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ProjectItem