import React, { useState, useEffect , useRef} from 'react'
import ReadMoreModal from './ReadMoreModal'
import Card from './Card'
import ScrollToTopButton from './ScrollToTopButton'

const Posts = () => {
    const topDiv = useRef()
    console.log(topDiv);
    const [postData, setPostData] = useState([])
    /*console.log(postData);*/
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [readMoreModal, setReadMoreModal] = useState(false)
    const [singlePostData, setSinglePostData] = useState(null)
    const [scrollPosition, setScrollPosition]= useState(0)
    console.log(scrollPosition);

    const handleScrollPossition = ()=>{
        const position= window.pageYOffset
        setScrollPosition(position)
        
    }

    

    useEffect (
        ()=>{
            window.addEventListener("scroll", handleScrollPossition )
            
        },[]
    )
    
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

    const toggleReadMoreModal = () => setReadMoreModal(!readMoreModal) //Toggle: imposto readMoreModal al contrario di quello che è.Se è false diventa vero e viceversa

    useEffect(() => {
        getPosts().then((res) => setPostData(res))
    }, [])

    return (
        <div className="container flex justify-center items-center">
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
                            <Card
                                key={index}
                                post={post}
                                toggle={setReadMoreModal}
                                setSingle={setSinglePostData}
                            />
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
            <ScrollToTopButton 
            />
        </div>
        
    )
}

export default Posts
