import React from 'react'

const Hero = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
            <div className="container mx-auto w-[70%] flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                <div className="flex flex-col space-y-4 text-center lg:text-left">
                    <h1 className="text-5xl font-bold leading-none">
                        Stay in the loop
                    </h1>
                    <p className="text-lg">
                        Doloribus consectetur quasi ipsa quo neque culpa
                        blanditiis ducimus recusandae a veritatis optio cumque,
                        in harum ad nam!
                    </p>
                </div>
                <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                    <div className="flex flex-row">
                        <input
                            type="text"
                            placeholder="example@email.com"
                            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
                        />
                        <button
                            type="button"
                            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
