import Link from "next/link";
import Image from "next/image";

export default function Plan() {
    return (
        <><section>
            <div className="bg-custom-yellow pb-8">
                <h1 class="text-5xl  font-serif dark:text-white text-center pt-10">RAJASTHAN TRAVEL GUIDE</h1>
                <p class="text-1xl font-serif dark:text-white text-center pt-2">Get know about your journey plan</p>
            </div>
            {/* Weather */}
            <div className="flex  justify-between items-center gap-4  bg-custom-yellow">
                <div class="inline-block  p-3">
                    <Image src="/weather.jpg" width="1500" height="1500">

                    </Image>
                </div>
                <div className="w-max mb-20">

                    <h2 class="mt-2 text-4xl font-serif font-medium text-gray-800 dark:text-white">Weather of Jaipur</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Rajasthan’s prestigious pink city, shrouded in royalty and heritage, ranks high on a globetrotter’s travel bucket list. And, for good reason too! From its world-famous monuments to its ornate temples, grandiose palaces and aesthetic forts, the majesty is unparalleled.

                        This diversity and variability percolates into its seasons too. So, when the question of ‘what is the best time to visit Jaipur’ arises, one must consider every detail. </p>
                    <br />
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <Link class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/plan/weather">Click Here</Link> to Know more about the weather of jaipur.</p>
                </div>
            </div>

            {/* Transport */}
            <div className="flex  justify-between items-center gap-4 bg-custom-yellow">
                <div class="inline-block  p-3">
                    <Image src="/transport.jpg" width="1500" height="1400">

                    </Image>
                </div>
                <div className="w-max mb-20">

                    <h2 class="mt-2 text-4xl font-serif font-medium text-gray-800 dark:text-white">How to get there</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Jaipur, popular as the ‘Pink City’, is one of the most historic and colourful cities of India. Serving as the capital of Rajasthan, Jaipur is home to some architectural marvels like City Palace and Amer Fort and people from all over, visit the city to witness these beauties. Jaipur is well-served by a range of flights trains and buses; therefore getting here is not an issue.
                    The city has its own airport and railway station and bus transportation. </p>
                    <br/>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <Link class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/plan/transport">Click Here</Link> to Know more about  different ways to reach Jaipur.</p>
                </div>
            </div>

            {/* Foreign tourist*/}
            <div className="flex  justify-between items-center gap-4 bg-custom-yellow">
                <div class="inline-block  p-3">
                    <Image src="/tourist.jpg" width="1100" height="1400">

                    </Image>
                </div>
                <div className="w-max mb-20">

                    <h2 class="mt-2 text-4xl font-serif font-medium text-gray-800 dark:text-white">Foreign Tourist</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">The land that is capable of hypnotizing the senses of all its visitors is Rajasthan. With a warm Khamma Ghani (welcome) invitation, the rich desert city of Rajasthan will keep you engaged with its splendor.
                     If you are from outside India, Rajasthan is the best place to explore India’s rich history and ancient culture.  </p>
                    <br />
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <Link class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/plan/tourist">Click Here</Link> to Know more about the foreign tourist .</p>
                </div>
            </div>

            {/* Heritage properties */}
            <div className="flex  justify-between items-center gap-4 bg-custom-yellow">
                <div class="inline-block  p-3">
                    <Image src="/heritage.jpg" width="1300" height="1500">

                    </Image>
                </div>
                <div className="w-max mb-20">

                    <h2 class="mt-2 text-4xl font-serif font-medium text-gray-800 dark:text-white">Heritage properties of Jaipur</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">The first thing that comes to everyone's minds when thinking of Jaipur is the beautiful Havelis, palaces and the remnants of a magnificent lost era. Stay at one of the many magnificent heritage hotels in Jaipur to get a taste of the grand Rajasthani culture firsthand.
                     We have created a list of the best heritage hotels in Jaipur to assist you with your booking journey. </p>
                    <br />
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <Link class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/plan/heritage">Click Here</Link> to Know more about the heritage properties in Jaipur.</p>
                </div>
            </div>
            </section>
        </>
    )
}