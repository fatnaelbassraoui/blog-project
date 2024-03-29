import React from 'react'
import { FaHeart } from 'react-icons/fa'
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { insertInFavorite } from '../States/favoriteSlice'
import useLocalStorage from './useLocalStorage'

const Card = ({ post, setSingle }) => {
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/posts/${post._id}`

    const dispatch = useDispatch()

    const { loggedInUser } = useLocalStorage()

    const deletePost = async () => {
        try {
            await fetch(url, {
                method: 'DELETE',
            }).then((res) => window.location.reload())
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div
                className=" flex flex-col justify-center w-[100%] min-w-[300px] h-[400px]  border rounded-xl relative shadow-md cursor-pointer  transform transition duration-500 hover:scale-110"
                style={{
                    backgroundImage: `url("${post.img}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex flex-col justify-center items-center   ">
                    <div className=" flex flex-col justify-center items-center w-full  absolute bottom-0 p-2 bg-orange-200/[.7] text-white  text-xs rounded-lg ">
                        <h2 className="  text-xl font-bold">{post.title}</h2>
                        <p>{`${post.body.slice(0, 40)}...`}</p>

                        <Link to={`posts/${post._id}`}>
                            <button
                                className=" w-[100px] p-2 mt-2 rounded-md bg-orange-300"
                                onClick={() => [setSingle(post)]}
                            >
                                Read more
                            </button>
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-col  top-1 right-1 mt-2 mb-2 absolute">
                    {loggedInUser && (
                        <button
                            className="text-xs m-auto mb-2  p-2 rounded-[50%] bg-orange-100 text-yellow-500 hover:bg-orange-200"
                            onClick={() => [
                                dispatch(insertInFavorite(post.title)),
                            ]}
                        >
                            <FaHeart />
                        </button>
                    )}
                    {loggedInUser && (
                        <button
                            onClick={() => deletePost()}
                            className="text-xs m-auto p-2 mb-2 rounded-[50%] bg-orange-100 text-yellow-500 hover:bg-orange-200"
                        >
                            <RestoreFromTrashIcon />
                        </button>
                    )}
                    {post.featured && (
                        <div className="text-xs m-auto mb-2  p-2 rounded-[50%] bg-orange-100 text-yellow-500 hover:bg-orange-200">
                            <StarBorderIcon />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Card
