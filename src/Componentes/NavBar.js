import React, { useState } from 'react'
import LogoNavbar from '../Assets/Logo.png'
import ModalLogin from './ModalLogin'
import DropDown from './DropDown'

const NavBar = () => {
    const [modalForm, setModalForm] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    /*const localestorage = JSON.parse(localStorage.getItem("Faty"))*/
    return (
        <nav>
            <div className="flex bg-[#ff0099] p-4 text-white justify-between">
                <div className="flex items-center">
                    <div className="mr-4">
                        <img src={LogoNavbar} width={150} alt="img" />
                    </div>
                    <div>Ciao questo è il mio Blog</div>
                </div>
                <DropDown />
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
