import React from 'react'
import FormModalLogin from './FormModalLogin'
import CreateNewAccount from './CreateNewAccount'

function ModalLogin({ close }) {
    return (
        <div className="w-screen h-screen fixed top-1/2 left-1/2 flex intem-center transform -translate-y-1/2 -translate-x-1/2 backdrop-blur-lg">
            <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-stone-300 min-w-[500px] p-4 rounded-xl h-fit ">
                <div className="flex flex-col relative justify-center items-center w-[500px] h-fit p-4 bg-stone-100">
                    <div
                        className="absolute right-2 top-2 cursor-pointer"
                        onClick={() => close(false)}
                    >
                        X
                    </div>
                    <FormModalLogin />
                    <CreateNewAccount />
                </div>
            </div>
        </div>
    )
}

export default ModalLogin
