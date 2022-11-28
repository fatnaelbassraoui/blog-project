import React, { useState, useEffect } from 'react'
import LogoNavbar from '../Assets/Logo.png'
import ModalLogin from './ModalLogin'
import { NavbarLinks } from '../Constants/NavBarLink'
import { Link } from 'react-router-dom'
import LikeAndDislikeButton from '../Componentes/LikeAndDislikeButton'
import LogOut from './LogOut'

const NavBar = () => {
    const [modalForm, setModalForm] = useState(false)
    const [stateOfLocalStorage, setStateOfLocalStorage] = useState(false)
    // const isLoggedIn = localStorage.getItem('userData')



      useEffect(() => {
        const items = JSON.parse(localStorage.getItem('userData'));
        if (items) {
            setStateOfLocalStorage(true);
        }else{
        setStateOfLocalStorage(false)
    }
        window.addEventListener('storage',()=>{
            window.location.reload()
        })
          
      }, [stateOfLocalStorage]);

    
    return (
        <nav>
            <div className="flex bg-pink-500 p-4 text-white justify-between">
                <div className="flex items-center">
                    <div className="mr-4">
                        <img src={LogoNavbar} width={150} alt="img" />
                    </div>
                </div>
                <div>
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
                <div className='rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 w-24  rounded-full bg-pink-400'>
                    <LikeAndDislikeButton />
                </div>
                <button
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 w-24  rounded-full bg-pink-400"
                    onClick={() => setModalForm(true)}
                >
                    Login
                </button>
            </div>
            {modalForm && <ModalLogin close={setModalForm} />}

            {stateOfLocalStorage && <LogOut />}
        </nav>
    )
}

export default NavBar
