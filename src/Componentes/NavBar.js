import React, { useState, useEffect } from 'react'
import LogoNavbar from '../Assets/Logo.png'
import ModalLogin from './ModalLogin'
import { NavbarLinks } from '../Constants/NavBarLink'
import { Link } from 'react-router-dom'
import LikeAndDislikeButton from '../Componentes/LikeAndDislikeButton'
import LogOut from './LogOut'
import useLocalStorage from './useLocalStorage'

const NavBar = () => {
    const [modalForm, setModalForm] = useState(false)
    

    const {loggedInUser} = useLocalStorage()
    console.log(loggedInUser);



    return (
        <nav>
            <div className="flex item-center bg-pink-500 p-4 text-white justify-between">
                <div className="flex items-center">
                    <div className="mr-4">
                        <img src={LogoNavbar} width={150} alt="img" />
                    </div>
                    <div className="flex items-center ">
                        <h1 class>Faty Blog</h1>
                    </div>
                </div>
                <div className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 w-24  rounded-full bg-pink-500'>
                    {NavbarLinks.map((link, index) => {
                        return (
                            <Link
                                key={index}
                                to={link.link}>
                                <p>{link.title}</p>
                            </Link>
                        )
                    })}
                </div>
               {loggedInUser && <div className='flex flex-row  justify-center item-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 w-[150px] p-1  rounded-full bg-pink-500'>
                    <p className='pt-1 mr-1 '>Favorite List </p>
                    <LikeAndDislikeButton />
                </div>}
                <div>
                    {!loggedInUser && <button
                        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 w-24  rounded-full bg-pink-500"
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
