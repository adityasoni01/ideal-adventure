export default function Near(){
    return(
        <div class="flex min-h-screen items-center justify-center bg-neutral-800 relative">
        <h2 className="absolute text-body-color text-3xl top-12 left-50">Places to Visit Near Jaipur</h2>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-96 w-72">
            <img
              class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="pushkar.jpg"
              alt=""
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            
            <h1 class="font-dmserif text-3xl font-bold text-white">Pushkar</h1>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Pushkar, a city in Rajasthan, 150 km from Jaipur, is known for its sacred lake, which is surrounded by more than 50 ghats where pilgrims come to take a dip, also famous for its annual camel fair, which attracts visitors from all over the world.
            </p>
            
          </div>
          
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-96 w-72">
            <img
              class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="kota.jpg"
              alt=""
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[70%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class=" text-3xl font-bold text-white">
              Suicide Point
            </h1>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Kota, a city in Rajasthan, 200 km from Jaipur, is known for its beautiful and intricate stone carvings on its historic buildings, such as palaces and temples, showcasing the region's rich cultural heritage.
            </p>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-96 w-72">
            <img
              class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="udaipur.jpg"
              alt=""
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[73%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class=" text-3xl font-bold text-white">
              Udaipur
            </h1>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Udaipur is a city located in the Indian state of Rajasthan,350 km from Jaipur, known for its stunning lakes, palaces, and forts. It is often referred to as the "Venice of the East" due to its picturesque beauty.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
}