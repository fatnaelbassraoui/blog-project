import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Components/useFetch'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ImgError from '../Assets/ImgPageNotFound.jfif'



const ReadMorePosts = ({ post }) => {
  console.log(post);
  const { id } = useParams()
  const { data, loading, error } = useFetch(`${process.env.REACT_APP_SERVER_BASE_URL}/posts/${id}`)
  console.log(data);
  const splittedPost = data && data.body.split('.')
  console.log(splittedPost);
  return (
    <>
      <NavBar />
      {loading && !error && <p>page is loading</p>}
      {!data && !loading && error && (
        <div
          className="flex flex-col items-center justify-center mt-[250px]">
          <div>
            <img
              className="w-[450px]"
              src={ImgError}
              alt="ImgError"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold p-4 text-blue-600">
              Oops...
            </h1>
            <h2 className="text-4xl font-semibold text-blue-600">
              Qualcosa non è andata a buon fine...
            </h2>
          </div>
        </div>
      )}
      {data && !error && (
        <div
          className='container justify-center items-center flex flex-wrap md:flex-nowrap gap-6 mx-auto text-center '
        >
          <div
            className='max-w-[600px] px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2'
          >
            <h1
              className='text-5xl  font-serif  mb-4 '
            >
              {data.title}
            </h1>
            <p
              className='font-serif	 text-justify mb-4'
            >
              {data.body}
            </p>
            <p
              className='font-serif	text-right italic text-xs font-bold'
            >
              {data.author}
            </p>

          </div>
          <img 
          className='max-w-[500px] object-cover rounded-md xl:col-span-3 '
          src={data.img}
          alt="img" 
          />
         
        </div>
      )}
      <Footer/>
    </>
  )
}

export default ReadMorePosts