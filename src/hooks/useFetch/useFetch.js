import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url){
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    const fetchData = async () =>{
        try{
          const {data: responseData} = await axios.get(url)
          setData(responseData)
          setLoading(false)
          
          
        }
        catch (err){
          setError(err.message)
          setLoading(false)
          
          
        }
          
      }
    useEffect(()=>{
        fetchData()
        console.log(url)
    },[])


    return{error,loading,data}
}

export default useFetch