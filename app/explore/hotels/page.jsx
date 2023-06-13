'use client';
import { useState, useEffect } from 'react';
import ErrorCard from '@/components/errorCard';
import PostBg from '@/public/post-bg.jpg';
import HotelModal from '@/components/hotelModal';
import Hotel from '@/components/hotel';

export default function Products() {
  const [hotels, setHotels] = useState([]);
  const [modal, setModal] = useState(true);

  useEffect(
    () => async () => {
      const res = await fetch('/api/hotel/', { cache: 'no-cache' });
      const hotels = await res.json();
      setHotels(hotels.data);
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
        <HotelModal loadData={loadData} />
        <div id='main' className='mx-auto grid max-w-screen-xl grid-cols-1 gap-y-0 gap-x-6 p-6 md:grid-cols-2 lg:grid-cols-3'>
          {hotels === null ? (
            <ErrorCard message='Unable to load data. try again...' />
          ) : (
            hotels.map((hotel) => (
              <Hotel
                key={hotel._id}
                usercontact={hotel.Uid.phone}
                name={hotel.name}
                image={hotel.image}
                price={hotel.price}
                location={hotel.location}
                capacity={hotel.capacity}
              />
            ))
          )}
        </div>
    </section>
  );
}
