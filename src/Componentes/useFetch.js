import React,{useEffect,useState} from 'react'
import { ZoomControl } from 'react-leaflet'

const useFetch = (url) => {
    const[data,setData]=useState(null)
    const[dataLoading,setLoading]=useState(false)
    const[err, setError]=useState(null)
    useEffect(()=>{
        (
            async function(){
                try {
                    setLoading(true)
                    const response= await fetch(url)   
                    setData(response)
                    
                } catch (error) {
                    setError(error)
                    
                } finally{
                    setLoading(false)
                }
            }
        )()
    },[url])
  return {data,dataLoading,err}
}

export default useFetch