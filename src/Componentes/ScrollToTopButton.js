import React from 'react'

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className="fixed bottom-4 right-2 bg-indigo-500 rounded-[100%] w-[70px] h-[70px] text-center text-white ">
            <button onClick={() => scrollToTop()} className="mt-5">
                Torna su
            </button>
        </div>
    )
}

export default ScrollToTopButton
