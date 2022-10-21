import React from 'react'
import ImgPageNotFound from '../Assets/ImgPageNotFound.jfif'

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-[250px]">
            <div>
                <img
                    className="w-[450px]"
                    src={ImgPageNotFound}
                    alt="ImgPageNotFound"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-7xl font-bold p-4 text-blue-600">
                    Oops...
                </h1>
                <h2 className="text-4xl font-semibold text-blue-600">
                    404 Page Not Found
                </h2>
            </div>
        </div>
    )
}

export default PageNotFound
