import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import FormModalLogin from './FormModalLogin'
import { ModalLoginLinks } from '../Constants/ModalLoginLinks'

function ModalLogin({ close }) {
    return (
        <div className="w-screen h-screen fixed top-1/2 left-1/2 flex item-center transform -translate-y-1/2 -translate-x-1/2 backdrop-blur-lg z-40 ">
            <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-orange-200 min-w-[300px] p-4 rounded-xl h-fit ">
                <div className="flex flex-col relative justify-center items-center w-[300px] h-fit p-4 bg-orange-100">
                    <div
                        className="absolute right-2 top-2 cursor-pointer"
                        onClick={() => close(false)}
                    >
                        X
                    </div>
                    <FormModalLogin close={close} />
                    <h5 className="font-serif italic text-xl">
                        Create new Account
                    </h5>

                    <div>
                        {ModalLoginLinks.map((link) => {
                            return (
                                <Link key={uuidv4()} to={link.link}>
                                    <p className="font-serif  text-yellow-500 text-xl  italic flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-300 w-60  rounded-full bg-white">
                                        {link.title}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLogin
