import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    return (
        <div id='home' className='w-full h-screen object-cover object-left'>
            <div className='w-full h-screen absolute top-0 left-0 bg-white dark:bg-slate-800'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                    <h1 className='sm:text-5xl text-4xl text-gray-800 text-shadow-[1px_1px_2px] shadow-black font-mono font-bold dark:text-gray-300 dark:shadow-white'>
                        <TypeAnimation
                            sequence={[
                                2000, // waits 2s
                                'Hello World',
                                2000,
                                '您好世界',
                                2000,
                                'Chào thế giới',
                                2000,
                                '헬로 월드',
                            ]}
                            wrapper="div"
                            cursor={false}
                            repeat={Infinity}
                            speed={15}
                            className='type'
                        />
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home