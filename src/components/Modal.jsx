import React from 'react'
import ReactDOM from 'react-dom'
import { FaTimes } from 'react-icons/fa'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null

    return ReactDOM.createPortal(
        <>
            {/* Modal Backdrop */}
            <div 
                className='fixed inset-0 bg-white dark:bg-black bg-opacity-[99%] dark:bg-opacity-[94%] z-40' 
                onClick={onClose}
            >
            </div>

            {/* Modal Content */}
            <div className='h-3/4 w-[85%] max-w-[800px] fixed flex flex-col items-center z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black rounded-lg shadow-2xl border-gray-300 dark:border-gray-700 border-2'>
                <button  
                    className='z-50 absolute top-0 right-0 mt-4 mr-4 text-gray-700 dark:text-gray-300 hover:text-teal-500' 
                    onClick={onClose}
                >
                    <FaTimes />
                </button>
                <div className='relative flex-1 w-5/6 overflow-y-auto hide-scrollbar content-fade'>
                     {children}
                </div>
            </div>
        </>,
        document.getElementById('modal-root')
    )
}

export default Modal