import React from 'react'
import Morocco from '../Assets/Morocco.jpg'

const StoryOfImperialCities = () => {
    return (
        <div className="container   justify-center items-center m-auto mb-8 ">
            <div
                className='flex justify-center items-center mb-6 '
            >
                <h1
                    className='font-serif italic text-6xl '
                >
                    Morocco’s imperial cities
                </h1>
            </div>
            <div
                className='flex flex-row'
            >
                <div
                    className='ml-2 w-[50%] h-[300px] m-auto  '
                >
                    <img
                        src={Morocco}
                        className=" w-[600px] h-[330px] float-left pr-2 rounded-md"
                        alt="Morocco" />
                </div>
                <div
                    className='item-body w-[50%]  m-auto'
                >
                    <p
                        className='font-serif indent-8'
                    >
                        Rabat, Marrakesh, Fez and Meknes are Morocco’s four imperial cities and visitors can enjoy getting lost amid their maze-like medinas, which have been made UNESCO World Heritage Sites. Enticing Arabic culture with its palaces, madrasas and mosques waits for you around every corner. These cities are also a shopper’s paradise and their lively souks are perfect for giving in to temptation.
                        These four exotic cities are bursting with life and here visitors can experience endless sensations: colors, scents, tastes, sounds and textures that make each one special and give it its own particular character. Morocco’s imperial cities are ancient religious, cultural and political centres and are compulsory stops on a visit to the country.The Weather:
                        We were there at the end of June, and Essaouira was the nicest weather we had in Morocco! Like it was breezy and cool enough that I slept up on the terrace’s little area with the windows open. Autumn had to wear jeans and a light jacket in the evenings it got that cool. After sweating to death in Merzouga, let me tell you, it was blissful.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StoryOfImperialCities