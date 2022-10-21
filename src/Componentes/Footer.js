import { Link } from 'react-router-dom'
import React from 'react'
import LogoNavbar from '../Assets/Logo.png'
import { FooterLinksOne, FooterLinksTwo } from '../Constants/FooterLinks'
import { v4 as uuidv4 } from 'uuid'

const Footer = () => {
    return (
        <footer className="flex flex-col  bg-[#ff0099] p-4 text-white justify-between mt-6">
            <div className=" container flex items-center justify-center p-4">
                <img src={LogoNavbar} width={150} alt="img" />
            </div>
            <div className="flex flex-col p-4 justify-evenly">
                <div>
                    <ul className="flex flex-row p-4 justify-evenly">
                        {FooterLinksOne.map((link) => {
                            return (
                                <Link key={uuidv4()} to={link.link}>
                                    <li>{link.title}</li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-row p-4 justify-evenly">
                        {FooterLinksTwo.map((link) => {
                            return <li key={uuidv4()}> {link.title}</li>
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
