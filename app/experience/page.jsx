'use client'
import { useState } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import Temp from '@/components/temp'

export default function Festival() {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState({title:"",des:""});
    return(
       <>
       {/* passing Props */}
       <section className=''>
       <Temp modal={showModal} setShowModal={setShowModal} showMessage={message} setDescription={setMessage}/>
       <a href='#adv'>
       <button class="bg-custom-yellow rounded-full hover:bg-body-color shadow-lg text-black font-serif py-2 px-4 mt-8 text-3xl  w-1/2 " type='button'>
      

  ADVENTURE

</button>
</a>
<a href='#food'>
       <button class="bg-custom-yellow hover:bg-body-color shadow-xl text-black font-serif py-2 px-4 mt-8 text-3xl w-1/2 rounded-full">
 FOOD AND CUISINE
 
</button>
      </a>
        <h1 class="text-5xl  font-serif dark:text-white text-center pt-10">FAIR AND FESTIVALS</h1>
        <p class="text-2xl  font-serif dark:text-white text-center pt-4">WHAT MAKES RAJASTHAN TICK </p>
       <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    {/* <!--Card 1--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/holi.jpg" alt=" " />
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 ">BRAJ HOLI</div>
       <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "BRAJ HOLI",des: "The Braj festival in Rajasthan is held every year for two days in the Shukla Paksha of the Phalgun month, a few days prior to Holi.  This festival is dedicated to Lord Krishna who is believed to have spent a considerable amount of time in a region called Braj in Rajasthan. This festival not only replicates the spirit of Holi but also impersonates the timeless love of Radha and Krishna. The highlight of this festival is the Raslila dance performed with great zest and unity. The entire town is painted and no one is spared from being splashed with colours. The festival is celebrated with great pomp and ceremony in Deeg, Kaman and Bharatpur in the Bharatpur District."})}}>
Explore
</button> 
      
      </div>
      </div>
    {/* <!--Card 2--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/gangaur.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">GANGAUR FESTIVAL</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "GANGAUR FESTIVAL",des: "Gangaur is one of the most important festivals in Rajasthan. In some form or the other, it is celebrated all over Rajasthan. “Gan” is a synonym for Lord Shiva & “Gauri” or “Gaur” stands for Goddess Parvati, the heavenly consort of Lord Shiva. Gangaur celebrates the union of the two and is a symbol of conjugal & marital happiness. Gangaur is celebrated in the month of Chaitra (March-April), the first month of the Hindu calendar. This month marks the end of winter & the onset of spring. This festival is celebrated especially by women, who worship clay idols of “Gan” & “Gauri” in their houses. These idols are worshipped by unmarried girls who seek the blessings of Gan & Gauri for a good husband, while the married women pray for the good health and long life of their husbands. This worship which starts from the first day of the chaitra month culminates on the 18th day into Gangaur festival with a great religious fervor. On the eve of Gangaur festival, women decorate their palms and fingers with henna. The idols of Gan and Gauri are immersed in a pond or in a nearby lake on the last day of the festival. A traditional procession of Gangaur commences form the Zanani-Deodhi of the City Palace, passing through Tripolia Bazaar, Chhoti Chaupar, Gangauri Bazaar, Chaugan stadium and finally converges near the Talkatora. The procession is headed by a colorful pageantry of old palanquins, chariots, bullock carts and performing folk artists."})}}>
Explore
</button> 
      </div>
    </div>

    {/* <!--Card 3--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/bundi.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">BUNDI FESTIVAL</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "BUNDI FESTIVAL",des: "The Bundi Festival is celebrated in the month of Kartik (October-November) and includes several spiritual and traditional activities. It is a remarkable cluster of traditional art, culture and craftsmanship and visitors are left charmed by its magnificence. The program includes a colourful Shobha Yatra, arts & crafts fair, ethnic sports, cultural exhibition, classical music & dance program, turban competitions, bridal clothing, musical band competitions, and a sparkling fireworks display. Early in the morning, after the full moon night of Kartik Purnima, women and men clad in attractive colourful costumes light diyas or lamps on the banks of River Chambal and seek blessings."})}}>
Explore
</button> 
      </div>
    </div>
        {/* <!--Card 4--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/teej.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">TEEJ FESTIVAL</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "TEEJ FESTIVAL",des: "Teej refers to all the monsoon festivals observed particularly in the western and northern states of India. The festivals celebrate the bounty of nature, arrival of the monsoon, greenery and birds with social activities, rituals & customs. The festival is mainly for women, and includes dancing, singing, getting together with friends and narrating stories, applying henna on hands and feet, wearing brightly coloured lehariya saris, sharing festive foods and playing under trees on swings on Haryali Teej. The festivals are dedicated, in many parts of India, to Goddess Parvati, also known as Teej Mata. Women pray to the goddess seeking the wellness of their husband. On this occassion, a royal procession of Goddess Teej comprising of camels, dancing folk artists, royal palanquins, chariots and bullock carts, starts from the City Palace, winding its way through Tripolia Bazaar and Chhoti Chaupar on both days. The traditional sweet Ghewar is closely associated with the festival and enjoyed heartily over its duration."})}}>
Explore
</button> 
      </div>
    </div>
    {/* <!--Card 5--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/marwar.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">MARWAR FESTIVAL</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "MARWAR FESTIVAL",des: "The most popular festival in Jodhpur is the Marwar Festival. The two-day festival is held every year in the month of Ashwin (between September and October) in memory of the heroes of Rajasthan. It was originally known as the Maand Festival. The main attraction of this festival is the folk music centering around the romantic lifestyle of Rajasthan's rulers. The music and dance of the Marwar region is the main theme of this festival. The folk dancers and singers assemble at the festival and provide lively entertainment. These folk artists give you a peek into the days of yore, of battles and of heroes who live on through their songs. Among other attractions at the festival is the Camel Tattoo Show and various competitions like Moustache, Turban Tying, Tug of War, Matka Race, Traditional Dress Competition and many more. The venues of this festival include the famous Clock Tower & Osian’s sand dunes."})}}>
Explore
</button> 
      </div>
    </div>

    {/* <!--Card 6--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/jazz.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">JAIPUR JAZZ AND BLUES FESTIVAL</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "JAIPUR JAZZ AND BLUES FESTIVAL",des: " Raising the pedestal to the existing stature of Jazz in India, Seher conceptualized and produced the Jaipur Jazz and Blues Festival in association with UNESCO and Rajasthan Tourism – a dynamic festival that aims to open the world of Jazz and Blues to a wider audience. After a series of successful initiatives of showcasing International world music artists in Udaipur, Seher brings its first true Jazz and Blues festival at the iconic Central Park of Jaipur – a nominated World Heritage city by UNESCO"})}}>
Explore
</button> 
      </div>
    </div>
    {/* <!--Card 7--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/elephant.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">ELEPHANT FESTIVAL</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "ELEPHANT FESTIVAL",des: " The Elephant festival in the month of February and March, also marks an important occasion in Jaipur every year. This truly amazing festival is held on the full moon day of ‘Phalgun Purnima.’ Elephant polo and elephant dances are the highlight of this festival.Beautiful bedecked elephants are taken out in processions in all their glory, dressed in vibrant colours, anklets and decorated saddle cloth, and colourful ‘gulaal’ or coloured powder is sprinkled from atop the elephants. Amongst the festivals of Jaipur, this festival is truly a sight for you to behold as the processions follow the elephants. There is also a tug-o-war between the elephants and the men and women and there is no telling who can win this competition between man and beast!"})}}>
Explore
</button> 
      </div>
    </div>
        {/* <!--Card 8--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/kite.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">KITE FESTIVAL</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "KITE FESTIVAL",des: "The kite festival is held in Jaipur on January 14 every year. This festivals of Jaipur is marked by the presence of a myriad kites in the skies. Toward dusk, the skies are alive with million kites. Lamps and Fireworks light up the entire city. A number of kite flying competitions take place on this day. This place is a must visit especially during the kite festival. This lovely festival marks the transition of the sun from Sagittarius to Capricon.While kites fly high in the sky in different shapes and sizes, lights and fireworks in the night sky also add to the beauty and splendour of the celebrations. This is truly an alluring sight for all kite lovers. During this time, many people also take a dip in the holy water of the Ganga river. The international kite festival has participants from all over the world who are passionate about kites, and this day is also declared as a holiday in Jaipur. "})}}>
Explore
</button> 
      </div>
    </div>
    {/* <!--Card 9--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/literature.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">JAIPUR LITERATURE FESTIVAL</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "JAIPUR LITERATURE FESTIVAL",des: "The Jaipur Literature Festival which began in 2006 has now become the largest literary festival conducted in the Asia Pacific. This five-day festival is attended by lakhs of people from both national as well as international boundaries. This festival usually takes place in the month of January each year. Both national, as well as foreign authors, indulge in reading and discussion sessions.The audience gets a chance to get autographed books from various authors. Apart from this, a wide range of stalls of handicraft and food can also be seen during the festival. In the evening, various music performances take place here.  A number of renowned socialites can be spotted in Jaipur during this festivals of Jaipur."})}}>
Explore
</button> 
      </div>
    </div>

    {/* <!--Card 10--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="kajli.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">KAJLI TEEJ FESTIVAL</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "KAJLI TEEJ FESTIVAL",des: "One of the most popular festivals of Jaipur is Kajli Teej which is celebrated all over Rajasthan with great fervour. The festival begins with the procession of goddess Teej in an ornamented palanquin and included decorated elephants, camels, performers, musicians and people in colourful attires. There are impressive performances by various artists and many cultural programmes are organised for entertainment of the people. People decked up in their colourful attires come from different places to take part in the spectacular festivities. For married couples, the festival holds special significance and reflect the rich culture of the place. The festival showcases the vibrant rural culture of Rajasthan that celebrates it with gaiety to revive marital ties. There are local fairs, bazaars etc held across the city where different artisans come to sell their brilliant handicrafts. Kajli Teej resembles a huge carnival of sorts with the merriment lasting till a week. Rajasthanis are known for their bright colours and resplendent costumes."})}}>
Explore
</button> 
      </div>
    </div>
    {/* <!--Card 11--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/sitlamata.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">SITLA MATA FAIR</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "SITLA MATA FAIR",des: "This spectacular fair is held in the Seel-ki-Doongri village that is almost 5 km away from Chaksu while 35 km from Jaipur. The village has a temple dedicated to the deity Sheetla Mata perched on the top of a small hill that plays host to this fair. Legend has it that that it is the rage of Sheetla Mata that leads to epidemics and the fair is held with the purpose of pleasing the goddess. The annual fair is an event for worshipping and offerings to please the deity of epidemics, Sheetla Mata so that she does not get angry and bring epidemics to people.During the celebrations of the fair, local villagers set up a large temporary bazaar where people revel in festivities. The local villagers are seen doing some trade for a variety of items like clothes, shoes, foodstuff, agricultural implements, utensils, and many more. Another cultural attraction of this festival is a Cattle Fair that is arranged during the fair. "})}}>
Explore
</button> 
      </div>
    </div>

    {/* <!--Card 12--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/donkey.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">DONKEY FESTIVAL</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "DONKEY FESTIVAL",des: " One of the exciting festivals of Jaipur is the Jaipur Donkey Festival held every year when people get to exclusively buy and sell donkeys. Many traders come from as far as North India to sell their donkeys in the festival. The festival allows you to witness a large number of these animals adorned with myriad of colours and accessories that make it visual treat to the eyes. The interesting festival is an exciting opportunity for potters, washer men and those engaged in construction activities find good deal to buy this useful loader for their work.This is 500-year-old tradition that is similar to camel fair of Pushkar. The fair takes place in a small village, Looniyabaas that is just 20 km away from Jaipur.Another exciting feature of this festivals are the various sports activities and donkey races held here. The rare vista of donkeys racing is an enjoying activity of this festival."})}}>
Explore
</button> 
      </div>

    </div>
    </div>

{/* Adventure page */}
<div className='px-16'>
<hr class="h-px my-8 bg-black border-0 dark:bg-yellow-300"></hr></div>
    <h1 class="text-5xl  font-serif dark:text-white text-center pt-6 " id='adv'>ADVENTURES</h1>
        <p class="text-2xl  font-serif dark:text-white text-center pt-4">A SHOT OF ADRENALINE</p>
       <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5" id="adv">
    {/* <!--Card 1--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/hotair.jpg" alt=" " />
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 ">HOT AIR BALLOON RIDES</div>
       <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "HOT AIR BALLOON RIDES",des: "Fly above Hawa Mahal,  Amber Fort and Samode Palace to get a 360 degree view of the Pink City, or stare out at the far-reaching sand dunes dotted with camels and tents in Pushkar during its 10-day eponymous festival. From above, the golden sands shine with splendour and appear majestic. Feel like a mediaeval monarch while discovering the historical and breathtaking monuments of the Aravalli Range. The colours, vibrance and culture all make balloon adventures in Jaipur memorable. You’ll experience the enormity of the beautiful city that speaks to you with its life & people. The earthy tones with a pop of pink, creates a beautiful palette of colours pleasing your eyes and soul. The skyviews will definitely add a lot of wonder and aesthetics to your Instagram feed, and breathtaking content for your Snap stories!"})}}>
Explore
</button> 
      
      </div>
      </div>
    {/* <!--Card 2--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/Zorbing.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2"> ZORBING</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "ZORBING",des: "Zorbing is a little known but very enjoyable adventure activity that one can enjoy in Jaipur. The basic idea behind Zorbing is to be fitted inside a giant see-through inflatable along with other friends or family who are in a similar situation and then revel in the chaos that follows. Zorbing results in plenty of bumping into others and rolling over without the risk of injury. Where to Do It: The Timber Adventure at Ajmer RoadCost: INR 270 – 315"})}}>
Explore
</button> 
      </div>
    </div>

    {/* <!--Card 3--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/jungle.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">JUNGLE SAFARI</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "JUNGLE SAFARI",des: "Amer is an independent town; now a part of Jaipur Municipal Corporation and the jungles surrounding Amer are just right for jungle safari adventures. This is your chance to spot local wildlife such as peacocks, deer, snakes, and leopards. Amer is a short distance away from Jaipur city however jungle safaris in Amer are still an extension of adventure activities in Jaipur district.Where to Do It: Elefanjoy Jaipur, India Cost: INR 2,399"})}}>
Explore
</button> 
      </div>
    </div>
    
    {/* <!--Card 4--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/eride.jpg" alt=" " />
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 ">ELEPHANT RIDE</div>
       <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "ELEPHANT RIDE",des: "Elephant safaris and rides are very popular among tourists to Rajasthan but it hardly ever gets better than this 4-hour elephant ride to most of the tourist hotspots in Jaipur. These hotspots include Jal Mahal, Hawa Mahal and City Palace and it is easy to see how one can combine sightseeing with the adventure and thrill of getting up-close and personal with a magnificent elephant. Where to Do It: Holiday Season, Tourism Agency Cost: INR 2,700"})}}>
Explore
</button> 
      
      </div>
      </div>
    {/* <!--Card 5--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/camel.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">CAMEL RIDES</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "CAMEL RIDE",des: "When on a quest for adventure activities in Jaipur; camel rides are the most obvious but also one of the most thrilling options. The camel is a unique animal; both magnificent and subservient to man and there is little that compares to enjoying Jaipur’s hotspots from atop the back of a camel. Where to Do It: Fort Madhogarh, Tehsil Bassi – District Jaipur Cost: INR 1,500"})}}>
Explore
</button> 
      </div>
    </div>

    {/* <!--Card 6--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/bike.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">ATV BIKE RIDE</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "ATV BIKE RIDE",des: "Don’t for once think that the Jaipur tourist experience is all about tours of old palaces and temples; there are a fair share chill and thrills to enjoy here. ATV bike riding is one such adventure sport that one can enjoy in Jaipur. Riding on an ATV Bike presents unique thrills; this all-terrain vehicle allows you to traverse the roughest paths and enjoy the roughest rides. Where to Do It: Naila Bagh Cost: INR 4000"})}}>
Explore
</button>
      </div>
    </div>
  
   
      </div>
      <div className='px-16'>
<hr class="h-px my-8 bg-black border-0 dark:bg-yellow-300"></hr></div>

    <h1 class="text-5xl  font-serif dark:text-white text-center pt-6" id='food'>FOOD AND CUISINE</h1>
        <p class="text-2xl  font-serif dark:text-white text-center pt-4">FOOD YOU MUST TRY</p>
       <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    {/* <!--Card 1--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/daal.jpg" alt=" " />
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 ">DAAL BATI CHURMA</div>
       <button class="bg- bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "DAL BATI CHURMA",des: "This is by far one of the most famous dishes of Rajasthan, so much so that there are folklore and songs about the dish! No quintessential Rajasthani meal can ever be complete without Dal Baati Churma. The round Baatis are served with Panchkuti Dal along with a hearty dose of Churma.The bastis are these round balls of dough that are stuffed and baked over charcoal fire, as a distant plump cousin of usual Indian rotis! Churma is the sweet accompaniment with the dish, made of jiggery or sugar and a hearty dose of ghee. The Panchkuti dal is lentil curry that adds the most flavor to the dish. Churmas come in various varieties based on the ingredients, so go try a few out and find your fave!"})}}>
Explore
</button>
      
      </div>
      </div>
    {/* <!--Card 2--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/mawa.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2"> MAWA KACHORI</div>
        <button class="bg- bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "MAWA KACHORI",des: "Unlike other variants of kachoris, Rajasthani Mawa Kachori is a wholly different story! Why? Because it is stuffed with sugary goodness, of mawa and is available in every local sweet shop, try it with a hefty serving of sugar syrup and you’ll be done for your afternoon slump!"})}}>
Explore
</button> 
      </div>
    </div>

    {/* <!--Card 3--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/mirchi.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">MIRCHI BADA</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "MIRCHI BADA",des: "Yet another spicy snack that must be sourced hot and ate with a sense of adventure! These are large green chilies dunked in mildly spiced dough of besan and deep fried to crunchy goodness. This nack is a tough competitor to samosas and Kachoris in Jaipur."})}}>
Explore
</button>
      </div>
    </div>
    
    {/* <!--Card 4--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/ker.jpg" alt=" " />
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 ">KER SANGRIA</div>
       <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "KER SANGRIA",des: "Ker Sangria is a typical desert vegetable grown in abundance in Rajasthan’s dry arid areas, ker Sangria is a tangy pickle that is a typical accompaniment with Bajra rotis."})}}>
Explore
</button> 
      
      </div>
      </div>
    {/* <!--Card 5--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/khichadi.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">GATTE KI KHICHDI</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "GATTE KI KHICHDI",des: "This is one of the most lip-smacking rice preparations of Rajasthan! Rice is accompanied with soft besan dumplings making it a sumptuous dinnertime meal with plenty of ghee over it of course."})}}>
Explore
</button> 
      </div>
    </div>

    {/* <!--Card 6--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/dilkhush.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">DIL KHUSHAL</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "DIL KHUSHAL",des: "Rajasthani dishes mostly have amazing sweet delicacies and dil khushal is a notable one among them. Also popularly called as Mohanthaal or besan ki barfi. The sweet leaves a grainy texture in your mouth with hearty flavors and chewy sweetness."})}}>
Explore
</button> 
      </div>
    </div>
  
   
    {/* <!--Card 7--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/raita.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">BOONDI RAITA</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "BOONDI RAITA",des: "This dish is famous all over north India and helps to balance out the spicy foods and enhances the flavors. Boondo is mildly salted and then mixed with sweet and sour yogurt to make a marvelous combination."})}}>
Explore
</button> 
      </div>
    </div>
  
   
    {/* <!--Card 8--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/laddu.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">CHURMA LADDU</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "CHURMA LADDU",des: "A Rajasthani feast will only be complete after one samples these sugary pleasures of churma ladoos! They are rolled in desi ghee and usually served soft after dal baati churma. The real taste of Rajasthan lies in these laddoos."})}}>
Explore
</button> 
      </div>
    </div>
  
   
    {/* <!--Card 9--> */}
    <div class="rounded overflow-hidden shadow-lg transition duration-500 hover:scale-105 bg-white">
      <img class="w-full" src="/Aam.jpg" alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">AAM KI LAUNGI</div>
        <button class="bg-yellow-100 hover:bg-body-color text-black font-bold  text-xl mb-2 py-2 px-4 rounded-2xl transition duration-200 hover:scale-110 border-solid" onClick={() => {setShowModal(true); setMessage({...message, title: "AAM KI LAUNGI",des: "This is an instant pickle made with tangy raw mangoes! The best dish you could eat to beat the heat. It is prepared with nigella seeds, fennel, and sour gravy from the mango chunks added to the dish."})}}>
Explore
</button> 
      </div>
    </div>
  
   
      </div>
      </section>  
       </>
     
        
    )
}