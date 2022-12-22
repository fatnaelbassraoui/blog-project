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
          className='flex flex-row  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2  w-[50%] justify-center items-center mx-auto'
        >
          <div
            className='w-[50%] '
          >
            <img
              className='rounded-xl '
              src={data.img}
            />
          </div>
          <div
            className='w-[50%] max-h-full flex flex-col  ml-3 mx-auto '
          >
            <h1
              className="font-serif	 text-center text-lg font-bold mb-8"
            >
              {data.title}
            </h1>

            <p
              className='font-serif	 text-justify mb-8'
            >
              {data.body}
            </p>
            <p
              className='font-serif	text-right italic text-xs font-bold'
            >
              {data.author}
            </p>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default ReadMorePosts