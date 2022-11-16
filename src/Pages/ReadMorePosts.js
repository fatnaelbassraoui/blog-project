import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Componentes/useFetch'
import NavBar from '../Componentes/NavBar'
import Footer from '../Componentes/Footer'



const ReadMorePosts = ({post}) => {
  console.log(post);
    const {id} = useParams()
    const {data, loading, error}= useFetch(`http://localhost:3030/posts/${id}`)
  return (
    <>
            <NavBar/>
            {loading && !error && <p>page is loading</p>}
            {!data && !loading && error && (
                <p>Oops qualcosa non è andata a buon fine...</p>
            )}
            {data && !error && (
                <div className='flex flex-row w-[50%] justify-center items-center mx-auto'>
                 <div className='w-[50%] '>
                  <img 
                  className='rounded-xl'
                  src={data.img} />
                  </div>
                  <div className='w-[50%] flex flex-col justify-center items-center mt-4'>
                    <h1 className="font-bold-600">{data.title}</h1>
                    <p>{data.author}</p>
                    <p>{data.body}</p>
                    </div>
                </div>
            )}
            <Footer/>
        </>
  )
}

export default ReadMorePosts