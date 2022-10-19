import React, { useState } from 'react'

const DropDown = () => {
    return (
        <>
            <div className="relative">
                <input
                    type="checkbox"
                    id="sortbox"
                    className="hidden absolute"
                />
                <label
                    htmlFor="sortbox"
                    className="flex items-center space-x-1 cursor-pointer"
                >
                    <span className="text-lg">Sort By</span>
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
                    className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10"
                >
                    <ul className="block text-right text-gray-900">
                        <li>
                            <a
                                href="#"
                                className="block px-3 py-2 hover:bg-gray-200"
                            >
                                Featured
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-3 py-2 hover:bg-gray-200"
                            >
                                Newest
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-3 py-2 hover:bg-gray-200"
                            >
                                Price: Low to High
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-3 py-2 hover:bg-gray-200"
                            >
                                Price: High to Low
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DropDown
