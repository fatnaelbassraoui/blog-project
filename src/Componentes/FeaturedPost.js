import React,{useEffect,useState, useRef} from 'react'
import ReadMoreModal from './ReadMoreModal'
import Card from './Card'
import ScrollToTopButton from './ScrollToTopButton'
import LikeAndDislikeButton from './LikeAndDislikeButton'

const FeaturedPost = () => {
  const topDiv = useRef()
  const [postData, setPostData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [readMoreModal, setReadMoreModal] = useState(false)
    const [singlePostData, setSinglePostData] = useState(null)
    const [favoriteList, setFavoriteList] = useState([])

    const getPosts = async () => {
      setLoading(true)
      try {
          const myPosts = await fetch(
              'http://localhost:3030/post/type?featured=true'
          )
          setLoading(false)
          return await myPosts.json()
      } catch (error) {
          setError(error)
      }
  }
  const toggleReadMoreModal = () => setReadMoreModal(!readMoreModal)   
  useEffect(() => {
    getPosts().then((res) => setPostData(res))
}, [])

  return (
    <>
            <div className='flex justify-end items-center p-2 py-8'>
                <p className='mr-4'>My favorite list</p>  <LikeAndDislikeButton array={favoriteList} />
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
                                <div 
                                key={index}
                                className='flex flex-col justify-center p-2'>
                                    <Card 
                                        post={post}
                                        toggle={setReadMoreModal}
                                        setSingle={setSinglePostData}
                                        favoritList={setFavoriteList}
                                    />
                                </div>
                            )
                        })}
                </div>
                <hr/>
                <FeaturedPost/>
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

export default FeaturedPost