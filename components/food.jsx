import Image from 'next/image';

export default function Food({ usercontact, name, image, timing,location }) {
  return (
    <section class="py-10">

    <article class="rounded-xl bg-yellow-50 p-3 shadow-lg hover:shadow-2xl hover:scale-95 transition duration-200">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <Image
          width={500}
          height={400}
          src={`/food/${image}`}
          alt=''
          className='object-cover border-b-2 border-l-2 border-r-2 shadow-lg border-black w-96 mb-4 h-60 sm:h-96 bg-white overflow-hidden inline-block'
        />
          {/* this is for the rating 
          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="text-slate-400 ml-1 text-sm">4.9</span>
          </div> */}
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700 text-xl font-bold">{name}</h2>
              <span class="text-base font-bold text-orange-400">Timings : {timing}</span><br/>
              <span class="text-base font-bold text-orange-400">Address : {location}</span><br/>
              <span class="text-base font-bold text-gray-600">Contact For More Info: {usercontact}</span>

        </div>
    </article>

   
</section>

  );
}
