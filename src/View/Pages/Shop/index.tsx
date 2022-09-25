import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Products } from './Products';
import s from './Shop.module.scss';

export interface IProducts {
  category: string;
  description: string | null;
  id: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}
export const Shop = () => {
  const [categories, setCategories] = useState<string[]>([])
  
  useEffect(() => {

    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=>setCategories(json));

  }, []);

  return (
    <div className={s.shopPage}>
      <div className={s.categories}>
        {categories.map((item) => {
          return <Link to={`/shop/products/${item}`} className={s.category}>{item}</Link>
        })}
      </div>
    </div>
  )
}
