'use client';
import { useState, useEffect } from 'react';
import ErrorCard from '@/components/errorCard';
import Product from '@/components/product';
import PostBg from '@/public/post-bg.jpg';
import ProductModal from '@/components/ProductModal';
import FoodModal from '@/components/foodModal';
import Food from '@/components/food';

export default function Foods() {
  const [foods, setFoods] = useState([]);
  const [modal, setModal] = useState(true);

  useEffect(
    () => async () => {
      const res = await fetch('/api/food/', { cache: 'no-cache' });
      const foods = await res.json();
      setFoods(foods.data);
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
        <FoodModal loadData={loadData} />
        <div id='main' className='mx-auto grid max-w-screen-xl grid-cols-1 gap-y-0 gap-x-6 p-6 md:grid-cols-2 lg:grid-cols-3'>
          {foods === null ? (
            <ErrorCard message='Unable to load data. try again...' />
          ) : (
            foods.map((food) => (
              <Food
                key={food._id}
                usercontact={food.Uid.phone}
                name={food.name}
                image={food.image}
                timing={food.timing}
                location={food.location}
              />
            ))
          )}
        </div>
    </section>
  );
}
