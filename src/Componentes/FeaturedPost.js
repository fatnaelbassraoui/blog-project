import React,{useEffect,useState, useRef} from 'react'
import ReadMoreModal from './ReadMoreModal'
import Card from './Card'
import ScrollToTopButton from './ScrollToTopButton'
import { useDispatch, useSelector } from 'react-redux'
import { getFeaturedPostsRedux, featuredPost, error, loading} from '../States/postFeaturedSlice'




 const FeaturedPost = (/*{array}*/) => {
  const topDiv = useRef()
//   const [postData, setPostData] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
    const [readMoreModal, setReadMoreModal] = useState(false)
    const [singlePostData, setSinglePostData] = useState(null)
    
   
    const dispatch = useDispatch()
       
   const allFeaturedPosts = useSelector(featuredPost)
   const isLoading = useSelector(loading)
    const err = useSelector(error)
   

//     const getPosts = async () => {
//       setLoading(true)
//       try {
//           const myPosts = await fetch(
//             `${process.env.REACT_APP_SERVER_BASE_URL}/post/type?featured=true`
//           )
//           setLoading(false)
//           return await myPosts.json()
//       } catch (error) {
//           setError(error)
//       }
//   }


  const toggleReadMoreModal = () => setReadMoreModal(!readMoreModal)   

  useEffect(() => {
    // getPosts().then((res) => setPostData(res))
     dispatch(getFeaturedPostsRedux())
    
}, [dispatch])

  return (
    <>
            <h1>Not Featured Post</h1>
            <div className="container flex flex-col justify-center items-center">

                <div ref={topDiv}></div>
                {isLoading && !err && <h1>Caricamento in corso...</h1>}
                {err && !isLoading && <h1>Ops si è verificato un errore..</h1>}
                <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-auto ">
                    {!isLoading &&
                        !err &&
                        allFeaturedPosts?.slice(0,20).map((post, index) => {
                            // quando si parla di ogetti, quando ci sono errori undefind bloccanti mostra Undefind
                            /*console.log(post);*/

                            return (
                                <div 
                                key={index}
                                className='flex flex-col justify-center p-2'>
                                    <Card 
                                        post={post}
                                        toggle={setReadMoreModal}
                                        setSingle={setSinglePostData}
                                        // favoritList={array}
                                        
                                    />
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

export default FeaturedPost