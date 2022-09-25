import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IProducts } from '..';

interface IProductsProps {
  clickedCategory?: string;
}
export const Products = ({clickedCategory}: IProductsProps) => {
    const [data, setData] = useState<IProducts[]>([])
    const {category} = useParams();
    console.log(category)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>setData(json))
  }, [category])

  const products = data.map(product => {
      return (
        <div key={product.id}>
          <h3>
            <Link to={`/shop/products/${category}/${product.id}`}>{product.title}</Link>
          </h3>
          <p>Price: ${product.price}</p>
          <hr />
        </div>
      );
    });
    
  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  );
}
