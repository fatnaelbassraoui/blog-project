import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash'

const Card = ({ post, toggle, setSingle, favoritList}) => {
    const url = `http://localhost:3030/posts/${post._id}`
    const deletePost = async ()=>{
        try {
            await fetch(url,{
                method: 'DELETE'
            }
                ).then(res=>window.location.reload())

            
        } catch (error) {
            
            console.log(error);
        }
    }
    return (
        <>
            <div
            className=" text-center w-[250px] bg-zinc-100 ">
                <div>
                    <img
                        src={post.img}
                        className="object-center object-cover w-full rounded-md h-52"
                    />
                    <div className="flex flex-col justify-center p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold">{post.author}</h2>
                            <p>{`${post.body.slice(0, 40)}...`}</p>
                        </div>
                        <button
                            className="flex justify-center items-center w-full p-3 rounded-md bg-[#ff0099]"
                            onClick={() => [toggle(true), setSingle(post)]}
                        >
                            Read more
                        </button>
                        <div className="flex  justify-evenly items-center">
                            <button
                                className="flex justify-center"
                                onClick={() =>
                                    favoritList((prev) => [
                                        ...prev,
                                        post.title,
                                    ])
                                }
                            >
                                <FaHeart />
                            </button>
                            <button
                            onClick={()=>deletePost()}

                            >
                                <RestoreFromTrashIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Card
