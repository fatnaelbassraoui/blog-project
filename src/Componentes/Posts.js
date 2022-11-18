import React, { useEffect, useRef } from 'react'
import Card from './Card'
import ScrollToTopButton from './ScrollToTopButton'
import FeaturedPost from './FeaturedPost'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsRedux, post, error, loading } from '../States/postSlice'





const Posts = () => {
    const topDiv = useRef()
   
    const dispatch = useDispatch()


    const allPosts = useSelector(post)
    const isLoading = useSelector(loading)
    const err = useSelector(error)

    useEffect(() => {
        dispatch(getPostsRedux())
    }, [dispatch])

    return (
        <>
            <div className="container flex flex-col justify-center items-center m-auto">
            <FeaturedPost />
            <hr />
                <div ref={topDiv}></div>
                <h1>Not Featured Post</h1>
                {isLoading && !err && <h1>Caricamento in corso...</h1>}
                {err && !isLoading && <h1>Ops si è verificato un errore..</h1>}
                <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-auto ">
                    {!isLoading &&
                        !err &&
                        allPosts?.slice(0, 20).map((post, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex flex-wrap justify-center p-2'>
                                    <Card
                                        post={post}
                                    />
                                </div>
                            )
                        })}
                </div>
                
                <ScrollToTopButton />
            </div>
        </>
    )
}

export default Posts
