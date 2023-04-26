import Image from "next/image";
export default function Jaipurmap(){
    return(
        <section class="bg-body-color dark:bg-gray-900 border-t-8 border-orange-600 border-double">
    <div class="container px-8 py-8 mx-auto">
        <div>

            <h2 class="text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white font-serif">How To Reach Jaipur</h2>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div>
                <div className="flex  justify-between items-center gap-4">
                    <div class="inline-block p-3 rounded-full bg-orange-300 dark:bg-gray-800">
                        <Image src="carlogo.svg" height="60" width="60">

                        </Image>
                    </div>
                    <div className="w-max">

                    <h2 class="mt-2 text-base font-medium text-gray-800 dark:text-white">By Road</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">A convenient way to travel to Jaipur is by road. Regular service of AC and Deluxe buses is available from all major cities in Rajasthan.</p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-4 mt-16">
                    <div class="inline-block p-3 rounded-full bg-orange-300 dark:bg-gray-800">
                        <Image src="trainlogo.svg" height="60" width="60">

                        </Image>
                    </div>
                    <div className="w-max">

                    <h2 class="mt-2 text-base font-medium text-gray-800 dark:text-white">By Train</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Jaipur is connected via rail from all major cities including Delhi, Agra, Mumbai, Chennai, Kolkata, Bikaner, Jodhpur, Udaipur, Ahmedabad, Bangalore, etc.</p>
                    </div>
                </div>
                
                <div className="flex justify-between items-center gap-4 mt-16">
                    <div class="inline-block p-3 rounded-full bg-orange-300 dark:bg-gray-800">
                        <Image src="flightlogo.svg" height="100" width="100">

                        </Image>
                    </div>
                    <div className="w-max">

                    <h2 class="mt-2 text-base font-medium text-gray-800 dark:text-white">By Flight</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">The Jaipur International Airport is called Sanganer Airport. There are domestic flight connections to and from Delhi, Kolkata, Mumbai, Ahmedabad, Jodhpur, Udaipur and several other places. There are also international flights from Jaipur to Dubai, Muscat, Singapore & Bangkok as well.</p>
                    </div>
                </div>
            </div>

            <div class="overflow-hidden h-96 lg:h-auto flex justify-between">
                <iframe width="100%" height="90%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?q=jaipur&t=&z=10&ie=UTF8&iwloc=&output=embed" className="rounded-3xl "></iframe>
            </div>
        </div>
    </div>
</section>
    );
}