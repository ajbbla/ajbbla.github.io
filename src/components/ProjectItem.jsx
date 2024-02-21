import React, { useState } from 'react'
import Modal from './Modal'
import { FaGithub } from 'react-icons/fa'

const ProjectItem = ({ img, title, tools, repo, link, linktext, modalContent }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            {/* Project Tile */}
            <div 
                className='relative flex items-center justify-center h-auto w-full rounded-xl group border-gray-300 dark:border-gray-700 border-2 cursor-pointer transition hover:scale-105 hover:border-teal-500 hover:shadow-2xl'
                onClick={() => setIsModalOpen(true)}
            >
                <img src={img} alt={title} className='rounded-xl opacity-10 dark:opacity-30' />
                <div className='block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl sm:text-lg lg:text-2xl font-geneva font-bold text-gray-800 tracking-wider text-center dark:text-gray-300'>
                        {title}
                    </h3>
                    <p className='pb-4 pt-2 text-lg sm:text-sm lg:text-lg font-geneva text-gray-800 text-center dark:text-gray-300'>
                        {tools}
                    </p>
                </div>
            </div>

            {/* Project Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className='px-4 py-16 text-left'>
                    <header>
                        <h1 className='mb-4 pb-2 border-b dark:border-gray-900 text-4xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                            {title}
                        </h1>
                    </header>
                    <p className='text-sm font-geneva text-gray-300 dark:text-gray-700'>
                        {linktext}
                    </p>
                    <a 
                        href={repo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='mt-4 mb-12 inline-flex items-center py-1 px-3 text-xl text-gray-800 rounded-md bg-gray-200 hover:bg-teal-500 border-2 border-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:border-teal-500 hover:text-white dark:hover:text-black'
                    >
                        <FaGithub />
                        <span className='pl-1 font-chicago'>GITHUB</span>
                    </a>
                    <div className=''>
                        {modalContent}
                    </div>
                    <footer>
                        <div className='mt-4 pt-2 pb-10 border-t dark:border-gray-900' />
                    </footer>
                </div>
            </Modal>
        </>
    )
}

export default ProjectItem