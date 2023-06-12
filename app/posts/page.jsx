'use client';
import { useState, useEffect } from 'react';
import ErrorCard from '@/components/errorCard';
import Post from '@/components/post';
import PostModal from '@/components/PostModal';
import PostBg from '@/public/post-bg.jpg';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(true);

  useEffect(
    () => async () => {
      const res = await fetch('/api/posts/', { cache: 'no-cache' });
      const posts = await res.json();
      setPosts(posts.data);
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
      <div className='mx-auto w-full lg:max-w-[50vw]'>
        <PostModal loadData={loadData} />
        <div id='main' className='flex flex-col'>
          {posts === null ? (
            <ErrorCard message='Unable to load data. try again...' />
          ) : ( 
            posts.map((post) => ( 
              <Post
                key={post._id}
                user={post.Uid.name}
                caption={post.caption}
                image={post.image}
                time={post.time}
                avatar={'default.png'}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
