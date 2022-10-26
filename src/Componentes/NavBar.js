import React, { useState } from 'react'
import LogoNavbar from '../Assets/Logo.png'
import ModalLogin from './ModalLogin'
import { NavbarLinks } from '../Constants/NavBar'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [modalForm, setModalForm] = useState(false)
    return (
        <nav>
            <div className="flex bg-[#ff0099] p-4 text-white justify-between">
                <div className="flex items-center">
                    <div className="mr-4">
                        <img src={LogoNavbar} width={150} alt="img" />
                    </div>
                </div>
                <div>
                {NavbarLinks.map((link) => {
                            return (
                                <Link  to={link.link}>
                                    <p>{link.title}</p>
                                </Link>
                            )
                        })}
                </div>
                <button
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 w-24  rounded-full bg-pink-400"
                    onClick={() => setModalForm(true)}
                >
                    Login
                </button>
            </div>
            {modalForm && <ModalLogin close={setModalForm} />}
        </nav>
    )
}

export default NavBar
