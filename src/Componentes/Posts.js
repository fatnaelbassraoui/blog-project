import React, { useState, useEffect, useRef } from 'react'
import ReadMoreModal from './ReadMoreModal'
import Card from './Card'
import ScrollToTopButton from './ScrollToTopButton'
import LikeAndDislikeButton from './LikeAndDislikeButton'
import useFetch from './useFetch'
import { FaHeart} from 'react-icons/fa';

const Posts = () => {
    const topDiv = useRef()
    const [postData, setPostData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [readMoreModal, setReadMoreModal] = useState(false)
    const [singlePostData, setSinglePostData] = useState(null)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [favoriteList,setFavoriteList]=useState([])
    const [favoritePost, setFavoritePost]=useState(null)
    

    
    const handleScrollPossition = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPossition)
    }, [])

    const getPosts = async () => {
        setLoading(true)
        try {
            const myPosts = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            )
            setLoading(false)
            return await myPosts.json()
        } catch (error) {
            setError(error)
        }
    }

    const {data, dataLoading,err}= useFetch('https://jsonplaceholder.typicode.com/posts')
    console.log(data, dataLoading, err);
    

    const toggleReadMoreModal = () => setReadMoreModal(!readMoreModal) //Toggle: imposto readMoreModal al contrario di quello che è.Se è false diventa vero e viceversa

    useEffect(() => {
        getPosts().then((res) => setPostData(res))
    }, [])

    return (
        <>
         <div className='flex justify-end items-center p-2 py-8'>
              <p className='mr-4'>My favorite list</p>  <LikeAndDislikeButton array={favoriteList}/>
            </div>
        <div className="container flex flex-col justify-center items-center">
           
            <div ref={topDiv}></div>
            {loading && !error && <h1>Caricamento in corso...</h1>}
            {error && !loading && <h1>Ops si è verificato un errore..</h1>}
            <div className="grid grid-cols-4 gap-2 mx-auto ">
                {!loading &&
                    !error &&
                    postData?.slice(0, 12).map((post, index) => {
                        // quando si parla di ogetti, quando ci sono errori undefind bloccanti mostra Unefind
                        /*console.log(post);*/

                        return (
                            <div className='flex flex-col justify-center p-2'>
                            <Card
                                key={index}
                                post={post}
                                toggle={setReadMoreModal}
                                setSingle={setSinglePostData}
                                
                            />
                            <button className='flex justify-center' onClick={()=>setFavoriteList(prev=>[...prev,post.title])}><FaHeart/></button>
                            </div>
                        )
                    })}
            </div>

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
