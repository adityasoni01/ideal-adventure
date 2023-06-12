'use client';
import { useState, useEffect } from 'react';
import ErrorCard from '@/components/errorCard';
import Product from '@/components/product';
import PostBg from '@/public/post-bg.jpg';
import ProductModal from '@/components/ProductModal';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(true);

  useEffect(
    () => async () => {
      const res = await fetch('/api/product/', { cache: 'no-cache' });
      const products = await res.json();
      setProducts(products.data);
    },
    [modal]
  );

  function loadData() {
    setModal((state) => !state);
  }
  return (
    <section
      className=' bg-center bg-fixed bg-contain border-b-8 border-orange-500 h-screen w-screen'
      style={{
        backgroundImage: `url(${PostBg.src})`,
      }}
    >
        <ProductModal loadData={loadData} />
        <div id='main' className='mx-auto grid max-w-screen-xl grid-cols-1 gap-y-0 gap-x-6 p-6 md:grid-cols-2 lg:grid-cols-3'>
          {products === null ? (
            <ErrorCard message='Unable to load data. try again...' />
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                usercontact={product.Uid.phone}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))
          )}
        </div>
    </section>
  );
}
