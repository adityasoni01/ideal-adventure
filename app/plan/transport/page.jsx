import Image from "next/image"
export default function Transport() {
    return (
        <>
        <div className="bg-custom-yellow pb-8 px-20 border-b-4 border-l-4 border-orange-600">
                <h1 class="text-5xl  font-serif dark:text-white text-center pt-6">HOW TO GET THERE</h1>
            <div className="flex  justify-between items-center gap-4  bg-custom-yellow">
                <div class="inline-block  p-3">
                    <Image src="/rail.jpg" width="900" height="60">

                    </Image>
                </div>
                <div className="w-max mb-20 mt-6">

                    <h2 class="mt-2 text-2xl font-serif font-medium text-black dark:text-white">RAIL</h2>
                    <p class="mt-2 text-sm text-black dark:text-gray-400">Rail is one of the best ways to travel to Rajasthan from anywhere within India as it is both,
                     comfortable and economical. The state is well-connected to all the major cities across the
                      nation and there are several routes to opt from. The major railway stations of Rajasthan are Jaipur, Kota, Bharatpur, Bikaner, Ajmer, Alwar, Udaipur, Abu Road and Jodhpur. But out of this lot, 
                      Jaipur and Kota are major hubs connecting the major cities of India to Rajasthan.</p>
                </div>
            </div>
            <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700"></hr>
               {/* air */}
            <div className="flex  justify-between items-center gap-4  bg-custom-yellow">
                <div class="inline-block  p-3">
                    <Image src="/air.jpg" width="1900" height="800">

                    </Image>
                </div>
                <div className="w-max mb-20">

                    <h2 class="mt-2 text-2xl font-serif font-medium text-black dark:text-white">AIR</h2>
                    <p class="mt-2 text-sm text-black dark:text-gray-400">Rajasthan is a tourist hub and therefore well-connected by air.
                     Whether you're flying in from within the country or from another one, you'll find that there are a host of options 
                     you can choose from based on your itinerary. The three major airports of Rajasthan are Sanganer International
                      Airport in Jaipur, Jodhpur Airport and Dabok Airport in Udaipur. While Sanganer is open to domestic and 
                      international air traffic, Jodhpur and Udaipur only serve domestic routes and Jodhpur also doubles up as a base for 
                      the Indian Air Force. These three airports collectively connect Rajasthan to most major cities in India, with Jaipur Airport also offering connections to some international destinations such as Muscat, Singapore, Abu Dhabi etc. 
                      Jaisalmer has the civil airport facility and has direct air connectivity from Jaipur, Delhi, Mumbai, Banglore and Surat. Airport at Kishangarh (Ajamer) and airport at Bikaner are also operational for domestic flights.</p>
                </div>
            </div>
            <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700"></hr>
 {/* road */}
            <div className="flex  justify-between items-center gap-4  bg-custom-yellow">
                <div class="inline-block  p-3">
                    <Image src="/road.jpg" width="1100" height="200">

                    </Image>
                </div>
                <div className="w-max mb-20">

                    <h2 class="mt-2 text-2xl font-serif font-medium text-black dark:text-white">ROAD</h2>
                    <p class="mt-2 text-sm text-black dark:text-gray-400">Rajasthan has 20 national highways passing through the state, spanning a distance of about 6373 kms. The NH-8 which connects Mumbai to Delhi is the busiest national highway in Rajasthan and 
                    runs through Ajmer, Jaipur, Udaipur and Chittorgarh. Besides the NH-8, Rajasthan is also connected to other major 
                    cities in India such as Delhi, Ahmedabad and Indore by state highways. You can very well choose to 
                    drive to Rajasthan or hop onto a bus operated by the Rajasthan State Road Transport Corporation,
                     if you prefer travelling by road.</p>
                </div>
            </div>
            </div>
        </>
    )
}