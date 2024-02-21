import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'

    return (
        <div className='w-full h-full absolute top-0 left-0 bg-white dark:bg-black'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                <h1 className='sm:text-5xl text-4xl text-gray-800 font-geneva font-bold dark:text-gray-300'>
                    {/* A hidden copy of the text for screenreader accessibility */}
                    <span className='visually-hidden'>
                        Hello World
                    </span>
                    <TypeAnimation
                        aria-hidden='true'  // Removes element from the a11y tree
                        cursor={false}
                        className={CURSOR_CLASS_NAME}
                        sequence={[
                            2000, // waits 2s
                            'Hello, World',
                            2000,
                            '您好世界',
                            2000,
                            'Xin chào thế giới',
                            2000,
                            '헬로 월드',
                        ]}
                        wrapper='h1'
                        repeat={Infinity}
                        speed={1}
                    />
                </h1>
            </div>
        </div>
    )
}

export default Home