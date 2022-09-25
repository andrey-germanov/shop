import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { IProducts } from '..'

export const Product = () => {
  const [data, setData] = useState<IProducts | any>([])
  
  const {productId} = useParams();
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(json => setData(json));
  }, [])

    return (
        <div>
            <h1>{data.title}</h1>
            <p>Price: ${data.price}</p>
            <img style={{width: '100px'}} src={data.image} alt="" />
        </div>
    )
}
