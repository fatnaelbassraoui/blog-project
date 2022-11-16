import React from 'react'
import { FaHeart } from 'react-icons/fa'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useSelector } from 'react-redux';
import { favorite } from '../States/favoriteSlice';

const LikeAndDislikeButton = () => {

    const favoriteList = useSelector(favorite)
    return (
        <>
            <div className="relative mt-2 text-pink-300">
                <input
                    type="checkbox"
                    id="sortbox"
                    className="hidden absolute"
                />
                <label
                    htmlFor="sortbox"
                    className="flex items-center space-x-1 cursor-pointer"
                >
                    <span className="text-lg ">
                        <FaHeart />
                    </span>
                    <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </label>

                <div
                    id="sortboxmenu"
                    className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-100 border border-gray-400 transition delay-75 ease-in-out z-10  w-[200px]"
                >
                    <ul className="block  text-gray-900 ">
                        {favoriteList && favoriteList.length <= 0 ? (
                            <p>La lista è vuota</p>
                        ) : (
                            favoriteList.map((favorite, index) => {
                                console.log(favorite)
                                return (
                                    <li
                                    key={index}
                                    className=" ml-8 p-2 flex flex-row text-justify font-semibold list-disc ">
                                       <StarOutlineIcon/> {favorite} 
                                    </li>
                                )
                            })
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default LikeAndDislikeButton
