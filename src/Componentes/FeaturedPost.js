import React, { useEffect, useRef } from 'react'
import Card from './Card'
import ScrollToTopButton from './ScrollToTopButton'
import { useDispatch, useSelector } from 'react-redux'
import { getFeaturedPostsRedux, featuredPost, error, loading } from '../States/postFeaturedSlice'


 const FeaturedPost = () => {
    
    const topDiv = useRef()


    const dispatch = useDispatch()

    const allFeaturedPosts = useSelector(featuredPost)
    const isLoading = useSelector(loading)
    const err = useSelector(error)

    useEffect(() => {
        dispatch(getFeaturedPostsRedux())

    }, [dispatch])

    return (
        <>
            <h1>Featured Post</h1>
            <div className="container flex flex-col justify-center items-center">

                <div ref={topDiv}></div>
                {isLoading && !err && <h1>Caricamento in corso...</h1>}
                {err && !isLoading && <h1>Ops si è verificato un errore..</h1>}
                <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-auto ">
                    {!isLoading &&
                        !err &&
                        allFeaturedPosts?.slice(0, 20).map((post, index) => {

                            return (
                                <div
                                    key={index}
                                    className='flex flex-col justify-center p-2'>
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

export default FeaturedPost