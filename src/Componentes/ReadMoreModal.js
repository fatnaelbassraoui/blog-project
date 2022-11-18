import React from 'react'
import 'flowbite';

const ReadMoreModal = ({ close, singlePost }) => {
    return (
        <div className="w-screen h-screen fixed top-1/2 left-1/2 flex intem-center transform -translate-y-1/2 -translate-x-1/2 backdrop-blur-lg">
            <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-pink-100 min-w-[500px] p-4 rounded-xl h-fit ">
                <div className="flex flex-col relative justify-center items-center w-[500px] h-fit p-4 ">
                    <div
                        className="absolute right-2 top-2 cursor-pointer"
                        onClick={() => close(false)}
                    >
                        X
                    </div>
                    <h1
                    className='text-xl italic mb-1'
                    >{singlePost.title}</h1>
                    <p
                     className='mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left'
                     >
                        {singlePost.body}
                        </p>
                </div>
            </div>
        </div>
    )
}

export default ReadMoreModal
