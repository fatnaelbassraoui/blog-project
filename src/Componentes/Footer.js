import { Link } from 'react-router-dom'
import React from 'react'
import LogoNavbar from '../Assets/Logo.png'
import { FooterLinksOne, FooterLinksTwo } from '../Constants/FooterLinks'




const Footer = () => {
  return (
    <footer className="flex flex-col  bg-[#ff0099] p-4 text-white justify-between mt-6">
        <div className=" container flex items-center justify-center p-4">
          <img src={LogoNavbar} width={150} alt="img" />
        </div>
        <div className='flex p-4 justify-evenly'>
          <div>
          <ul>
            {FooterLinksOne.map((link,index)=>{
              return(
                <li>{link.title}</li>

              )
            }
            )}
          </ul>
          </div>
          <div>
            <ul>
              {FooterLinksTwo.map((link,index)=>{
                return(
                  <li>{link.title}</li>
                )
              })}
            </ul>
          </div>

        </div>
    </footer>
  )
}

export default Footer