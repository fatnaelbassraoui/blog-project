import React, { useState } from 'react'
import LogoNavbar from '../Assets/Logo.svg'
import ModalLogin from './ModalLogin'
import { NavbarLinks } from '../Constants/NavBarLink'
import { Link } from 'react-router-dom'
import LikeAndDislikeButton from '../Components/LikeAndDislikeButton'
import LogOut from './LogOut'
import useLocalStorage from './useLocalStorage'

const NavBar = () => {
    const [modalForm, setModalForm] = useState(false)


    const { loggedInUser } = useLocalStorage()




    return (
        <nav>
            <div className="flex item-center bg-white text-xl p-4 text-black justify-between">
                <div className="flex items-center">
                    <div className="mr-4">
                        <img
                            src={LogoNavbar}
                            width={49}
                            height={49}
                            alt="img"
                        />
                    </div>
                    <div className="flex items-center ">
                        <h1
                            className='font-serif  text-yellow-500 text-xl  italic'
                        >
                            Faty Blog
                        </h1>
                    </div>
                </div>
                <div className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 w-24  rounded-full bg-white'>
                    {NavbarLinks.map((link, index) => {
                        return (
                            <Link
                                key={index}
                                to={link.link}>
                                <p
                                    className='font-serif  text-yellow-500 text-xl  italic'
                                >{link.title}</p>
                            </Link>
                        )
                    })}
                </div>
                {loggedInUser && <div className='flex flex-row  justify-center item-center mt-1 font-serif  text-yellow-500 text-xl  italic transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 w-[200px]  rounded-full bg-white'>
                    <p className='pt-2 pr-1 mr-1 '>Favorite List </p>
                    <LikeAndDislikeButton />
                </div>}
                <div>
                    {!loggedInUser && <button
                        className="mt-3 font-serif  text-yellow-500 text-xl  italic transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 w-[100px]  rounded-full bg-white"
                        onClick={() => setModalForm(true)}
                    >
                        Login
                    </button>}
                </div>
                {modalForm && <ModalLogin close={setModalForm} />}

                {loggedInUser && <LogOut />}
            </div>
        </nav>
    )
}

export default NavBar
