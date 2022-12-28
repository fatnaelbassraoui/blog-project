import { Link } from 'react-router-dom'
import React from 'react'
import { FooterLinksOne } from '../Constants/FooterLinks'
import { v4 as uuidv4 } from 'uuid'
import LogoFooter from '../Assets/Logo.svg'

const Footer = () => {
    return (
        <footer className="flex flex-col  bg-zinc-50 p-4 text-yellow-500 justify-between w-screen mt-6">

            <div className="flex flex-col p-4 justify-evenly">

                <div>
                    <div className="flex justify-center items-center mb-2">

                        <img
                            src={LogoFooter}
                            width={49}
                            height={49}
                            alt="logo"
                        />
                    </div>
                    <ul className="flex flex-row p-4 justify-evenly ">
                        {FooterLinksOne.map((link) => {
                            return (
                                <Link key={uuidv4()} to={link.link}>
                                    <li
                                        className='flex justify-center items-center font-serif  text-yellow-500 text-lg  italic transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 w-[200px]  rounded-full bg-zinc-50'
                                    >
                                        {link.title}
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <div className="flex justify-center mt-2">
                        <p className="text-xs">
                            Faty blog S.p.A. © Tutti i diritti riservati
                            | Partita Iva 007462411000
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
