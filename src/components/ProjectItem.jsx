import React, { useState } from 'react'
import Modal from './Modal'

const ProjectItem = ({ img, title, tools, demo, code }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <div 
                className='relative flex items-center justify-center h-auto w-full rounded-xl group border-gray-300 dark:border-gray-700 border-2 cursor-pointer transition hover:scale-105 hover:border-teal-500 hover:shadow-2xl'
                onClick={() => setIsModalOpen(true)}
            >
                <img src={img} alt={title} className='rounded-xl opacity-10' />
                <div className='block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl sm:text-lg lg:text-2xl font-geneva font-bold text-gray-800 tracking-wider text-center dark:text-gray-300'>
                        {title}
                    </h3>
                    <p className='pb-4 pt-2 text-lg sm:text-sm lg:text-lg font-geneva text-gray-800 text-center dark:text-gray-300'>
                        {tools}
                    </p>
                </div>
            </div>

            {/* Modal Content */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className='p-4'>
                    <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                    <p>Description</p>
                    {/* add'l content */}
                </div>
            </Modal>
        </>
        
    )
}

export default ProjectItem