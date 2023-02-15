import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Product1 = () => {
    const [data , setData ] = useState([])
    const navigate  = useNavigate()

    const fetchData = async () => {
      try{
        const  { data } = await axios.get("https://p4v6aoqh3g.execute-api.ap-south-1.amazonaws.com/dev/api/v1/blog/all")
        setData(data)
      }catch(err){
        console.log(err)
      }
    }
  
    useEffect(() => {
      fetchData()
    },[])
  
    return (
     <>
     <div style={{display : 'grid' , gridTemplateColumns : "auto auto auto" , marginTop : '100px' , justifyContent : 'space-evenly'}}>
     {data?.message?.map((i , index ) => (
          <div key={index}>
            <img src={i.image} alt=''  style={{width : '400px' , height : '200px'}} onClick={() => navigate(`/home/${i._id}`)}/>
          </div>
        ))}
     </div>
        
     </>
    )
  }

export default Product1