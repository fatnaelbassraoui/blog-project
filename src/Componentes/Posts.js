import React, { useState, useEffect, useRef } from 'react'
import ReadMoreModal from './ReadMoreModal'
import Card from './Card'
import ScrollToTopButton from './ScrollToTopButton'
import LikeAndDislikeButton from './LikeAndDislikeButton'
import FeaturedPost from './FeaturedPost'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsRedux, post, error, loading } from '../States/postSlice'





const Posts = () => {
    const topDiv = useRef()
    // const [postData, setPostData] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
    const [readMoreModal, setReadMoreModal] = useState(false)
    const [singlePostData, setSinglePostData] = useState(null)
    // const [favoriteList, setFavoriteList] = useState([])
    
    const dispatch = useDispatch()
    
       
    const allPosts = useSelector(post)
    const isLoading = useSelector(loading)
    const err = useSelector(error)
   

    // const getPosts = async () => {
    //     setLoading(true)
    //     try {
    //         const myPosts = await fetch(
    //             `${process.env.REACT_APP_SERVER_BASE_URL}/post/type?featured=false`
    //         )
    //         setLoading(false)
    //         return await myPosts.json()
    //     } catch (error) {
    //         setError(error)
    //     }
    // }


    // const {data, dataLoading,err}= useFetch('http://localhost:3030/posts')
    // console.log(data);


    const toggleReadMoreModal = () => setReadMoreModal(!readMoreModal) //Toggle: imposto readMoreModal al contrario di quello che è.Se è false diventa vero e viceversa

    useEffect(() => {
        // getPosts().then((res) => setPostData(res))
        dispatch(getPostsRedux())
    }, [dispatch])

    return (
        <>
            <div className='flex flex-wrap justify-end items-center p-2 py-8'>
                <p className='text-center mr-1 mt-2  bg-pink-300 rounded-xl w-[130px] text-white'>My favorite list</p> 
                 <LikeAndDislikeButton />
            </div>
            <div className="container flex flex-col justify-center items-center m-auto">

                <div ref={topDiv}></div>
                {isLoading && !err && <h1>Caricamento in corso...</h1>}
                {err && !isLoading && <h1>Ops si è verificato un errore..</h1>}
                <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-auto ">
                    {!isLoading &&
                        !err &&
                        allPosts?.slice(0, 20).map((post, index) => {
                            // quando si parla di ogetti, quando ci sono errori undefind bloccanti mostra Unefind
                            /*console.log(post);*/

                            return (
                                <div 
                                key={index}
                                className='flex flex-wrap justify-center p-2'>
                                    <Card 
                                        post={post}
                                        toggle={setReadMoreModal}
                                        setSingle={setSinglePostData}
                                        // favoritList={setFavoriteList}
                                    />
                                </div>
                            )
                        })}
                </div>
                <hr></hr>
                <FeaturedPost
                // array={setFavoriteList}
                />
                {
                    readMoreModal && (
                        <ReadMoreModal
                            singlePost={singlePostData}
                            close={setReadMoreModal}
                        />
                    ) /*se è true renderizzami le props di readmodal*/
                }

                <ScrollToTopButton />
            </div>
        </>
    )
}

export default Posts
