'use client'
import { useState } from 'react'
import Image from "next/image"
export default function Food(){
    const [showLocation, setLocation] = useState("https://maps.google.com/maps?q=Alsisar Haveli&t=k&z=15&ie=UTF8&iwloc=&output=embed");
    return(
        <>
        <div class=" border-t-4 border-orange-600 bg-cover w-50 py-6 bg-body-color">
            <h1 class="text-5xl  font-serif dark:text-white text-center pt-10">HERITAGE PROPERTIES</h1>
        <p class="text-xl  font-serif dark:text-white text-center pt-4">LIVE LIKE A ROYAL IN THE VERY STRUCTURES THAT WERE MADE FOR THE ROYALS THEMSELVES </p>
        <p class="text-lg  font-serif dark:text-white text-center pt-4 pb-10 border-b-8 border-orange-600 border-double">These Heritage hotels will take you back in time to the Golden Era of Rajasthan’s History </p>
        </div>
        <section class="bg-body-color border-b-8 dark:bg-gray-900 border-orange-600 border-solid">
        <div class="mapouter absolute text-right h-5/6 w-11/12 py-16"><div class="gmap_canvas rounded-2xl absolute overflow-hidden bg-none ml-96 h-full w-full"><iframe width="80%" height="85%" id="gmap_canvas" src={showLocation} frameborder="0" scrolling="no" className=" rounded-2xl"></iframe></div></div>
    <div class="container px-8 py-8 mx-auto">
        <div>

            <h2 class="text-2xl font-semibold text-gray-800 md:text-2xl dark:text-white font-serif">Jaipur Famous Hotels</h2>
        </div>

       
            <div>
            <div class="w-80 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-500 dark:border-gray-600 dark:text-white">
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" onClick={()=> setLocation("https://maps.google.com/maps?q=Alsisar Haveli&t=k&z=15&ie=UTF8&iwloc=&output=embed")}>
    <Image src="/bullet.svg" height = "20" width = "20">

    </Image>
        <div className="px-3">Alsisar Haveli</div>
    </button>
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
    <Image src="/bullet.svg" height = "20" width = "20" onClick={()=> setLocation("https://maps.google.com/maps?q=Bharat Mahal Palace&t=k&z=15&ie=UTF8&iwloc=&output=embed")}>

    </Image>
        <div className="px-3">Bharat Mahal Palace</div>
    </button>
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
    <Image src="/bullet.svg" height = "20" width = "20" onClick={()=> setLocation("https://maps.google.com/maps?q=Naila Bagh Palace&t=k&z=15&ie=UTF8&iwloc=&output=embed")}>

    </Image>
        <div className="px-3">Naila Bagh Palace</div>
    </button>
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" onClick={()=> setLocation("https://maps.google.com/maps?q=Lal Mahal Palace jaipur&t=k&z=15&ie=UTF8&iwloc=&output=embed")}>
    <Image src="/bullet.svg" height = "20" width = "20">

    </Image>
        <div className="px-3">Lal Mahal Palace</div>
    </button>
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" onClick={()=> setLocation("https://maps.google.com/maps?q=Fort Pokaran&t=k&z=15&ie=UTF8&iwloc=&output=embed")}>
    <Image src="/bullet.svg" height = "20" width = "20">

    </Image>
        <div className="px-3">Fort Pokaran
</div>
    </button>
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" onClick={()=> setLocation("https://maps.google.com/maps?q=diggi Palace&t=k&z=15&ie=UTF8&iwloc=&output=embed")}>
    <Image src="/bullet.svg" height = "20" width = "20">

    </Image>
        <div className="px-3">Diggi Palace
</div>
    </button>
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" onClick={()=> setLocation("https://maps.google.com/maps?q=Dera Mandawa&t=k&z=16&ie=UTF8&iwloc=&output=embed")}>
    <Image src="/bullet.svg" height = "20" width = "20">

    </Image>
        <div className="px-3">Dera Mandawa
</div>
    </button>
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" onClick={()=> setLocation("https://maps.google.com/maps?q=Chomo Palace Hotel&t=k&z=15&ie=UTF8&iwloc=&output=embed")}>
    <Image src="/bullet.svg" height = "20" width = "20">

    </Image>
        <div className="px-3">Chomo Palace Hotel
</div>
    </button>
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" onClick={()=> setLocation("https://maps.google.com/maps?q=Chirmi Palace Hotel&t=k&z=15&ie=UTF8&iwloc=&output=embed")}>
    <Image src="/bullet.svg" height = "20" width = "20">

    </Image>
        <div className="px-3">Chirmi Palace Hotel
</div>
    </button>
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" onClick={()=> setLocation("https://maps.google.com/maps?q=Castle Kanota&t=k&z=15&ie=UTF8&iwloc=&output=embed")}>
    <Image src="/bullet.svg" height = "20" width = "20">

    </Image>
        <div className="px-3">Castle Kanota
</div>
    </button>
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" onClick={()=> setLocation("https://maps.google.com/maps?q=Castle Kalwar&t=k&z=15&ie=UTF8&iwloc=&output=embed")}>
    <Image src="/bullet.svg" height = "20" width = "20">

    </Image>
        <div className="px-3">Castle Kalwar
</div>
    </button>
    <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-xl font-bold font-serif border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" onClick={()=> setLocation("https://maps.google.com/maps?q=Bissau Palace&t=k&z=15&ie=UTF8&iwloc=&output=embed")}>
    <Image src="/bullet.svg" height = "20" width = "20">

    </Image>
        <div className="px-3">Bissau Palace
</div>
    </button>


</div>
            
            </div>

            

    </div>
</section>

        </>
    )
}   