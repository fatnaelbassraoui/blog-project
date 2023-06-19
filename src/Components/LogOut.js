import React from 'react'

const LogOut = () => {
    const userLogOut = () => {
        localStorage.clear()
        setTimeout(() => {
            window.location.reload(false)
        }, 800)
    }
    return (
        <button
            className="font-serif  text-yellow-500 text-xl  italic transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 w-[100px]  rounded-full bg-white"
            onClick={() => userLogOut()}
        >
            Log Out
        </button>
    )
}

export default LogOut
