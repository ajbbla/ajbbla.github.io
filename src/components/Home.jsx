import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    return (
        <div id='home' className='w-full h-screen object-cover object-left'>
            <div className='w-full h-screen absolute top-0 left-0 bg-white dark:bg-black'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                    <h1 className='sm:text-5xl text-4xl text-gray-800 font-geneva font-bold dark:text-gray-300'>
                        <TypeAnimation
                            sequence={[
                                3000, // waits 2s
                                'Hello World',
                                3000,
                                '您好世界',
                                3000,
                                'Chào thế giới',
                                3000,
                                '헬로 월드',
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            speed={10}
                            // className='type'
                        />
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home