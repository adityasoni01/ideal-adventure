'use client';
import { useEffect, useState } from 'react';
import ImageUpload from './imageUpload';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function FoodModal({ loadData }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [timing, setTiming] = useState('');
  const [location, setLocation] = useState('');
  const { data: session } = useSession();
//   console.log(session?.user._id)
  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const uploadPost = async (e) => {
    try {
      if (!checkFile) return alert('Please select a file ');
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('name', name);
      formData.append('timing', timing);
      formData.append('location', location);
      formData.append('Uid', session.user._id);
      const res = await fetch('/api/food/new-food', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      console.log(data)
      if (res.ok) {
        alert('Your Restaurant is Added Successfully');
        setShowModal(false);
        loadData();
        setSelectedFile(null);
      } else alert('something went wrong');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
       <div className="flex bg-custom-yellow pb-4 rounded-xl  shadow-xl">
          <h1 class="text-5xl font-serif dark:text-white text-center mx-auto pt-6">
            Restaurants and Cafes
        {/* <ProductModal loadData={loadData} /> */}
          </h1><button class="bg-orange-300 hover:scale-105 transition duration-200 mr-10 text-black mt-6 px-4  rounded" onClick={()=>setShowModal(true)}>Click to Add Your Own Cafe</button>
        </div>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              <div className=' rounded-lg shadow-lg relative w-full bg-white'>
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>Add Your Cafe</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-60 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className=' text-gray-800 opacity-80 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      x
                    </span>
                  </button>
                </div>
                <form
                  action=''
                  className='p-4 m-4'
                  onSubmit={(e) => {
                    e.preventDefault();
                    uploadPost(e);
                  }}
                >
                    <label for="cafename" class="font-semibold">Cafe Name:</label>
  <input type="text" id="cafename" name="cafename" placeholder='Name of the Cafe' class="ml-10 border border-gray-300 " onChange={(e) => setName(e.target.value)}/><br/><br/>
  <label for="cafetiming" class="font-semibold">Cafe Timings:       </label>
  <input type="text" id="cafetiming" name="cafetiming" placeholder='09:00 - 17:00' class="ml-5 border border-gray-300 " onChange={(e) => setTiming(e.target.value)}/><br/><br/>
  <label for="cafetiming" class="font-semibold">Cafe Location:       </label>
  <input type="text" id="cafelocation" name="cafeloaction" placeholder='Address' class="ml-4 border border-gray-300 " onChange={(e) => setLocation(e.target.value)}/>
                  <div id='image-upload'>
                    <div className='flex justify-center items-center m-4'>
                      {selectedFile && (
                        <Image
                          width='300'
                          height='300'
                          className={`inline-block m-4  ${
                            checkFile ? 'opacity-1' : 'opacity-0'
                          }`}
                          alt='image upload'
                          src={
                            selectedFile
                              ? URL.createObjectURL(selectedFile)
                              : null
                          }
                        />
                      )}
                    </div>
                  </div>
                  <div className='flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b'>
                    <div className=' p-2'>
                      <label htmlFor='file-input'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-12 h-12 text-gray-400 group-hover:text-gray-600 cursor-pointer inline'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </label>
                      <input
                        type='file'
                        id='file-input'
                        className=' hidden'
                        onChange={imageHandler}
                      />
                    </div>
                    <input
                      className='inline-block bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer'
                      type='submit'
                      value={'upload'}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
