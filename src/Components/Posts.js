import React, { useEffect, useRef } from 'react'
import Card from './Card'
import ScrollToTopButton from './ScrollToTopButton'
import FeaturedPost from './FeaturedPost'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsRedux, post, error, loading } from '../States/postSlice'
import StoryOfImperialCities from './StoryOfImperialCities'




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
            <div className="container  flex flex-col justify-center items-center m-auto mt-8">
                <div>
                    <StoryOfImperialCities />
                </div>
                <div
                    className='mt-5'
                >
                    <FeaturedPost />
                </div>
                <div ref={topDiv}></div>
                <div
                    className='flex justify-center items-center mb-6 '
                >
                    <h1
                        className='font-serif italic text-4xl mt-6'
                    >
                        Other lovely places to visit
                    </h1>
                </div>
                {isLoading && !err && <h1>Caricamento in corso...</h1>}
                {err && !isLoading && <h1>Ops si è verificato un errore..</h1>}
                <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-auto ">
                    {!isLoading &&
                        !err &&
                        allPosts?.slice(0, 20).map((post, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex flex-wrap justify-center p-2 mt-5'>
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
