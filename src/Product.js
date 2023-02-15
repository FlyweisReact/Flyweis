/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://p4v6aoqh3g.execute-api.ap-south-1.amazonaws.com/dev/api/v1/blog/get/${id}`
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
        <img src={data?.message?.image} alt='' style={{width : '400px' , margin : 'auto' , display : 'block' , marginTop : '100px'}} />
    </>
  );
};

export default Product;
