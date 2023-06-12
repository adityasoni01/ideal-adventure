import Link from "next/link";
import Image from "next/image";
import Explorecomp from "@/components/explore";

export default function Plan() {
  return (
    <>
      <section>
        <div className="bg-custom-yellow pb-8 shadow-md">
          <h1 class="text-5xl  font-serif dark:text-white text-center pt-10">
            Explore Jaipur With Us
          </h1>
          <p class="text-1xl font-serif dark:text-white text-center pt-2">
            Get to know more about the Hotels, Restaurents, Places and Arts of
            Jaipur
          </p>
        </div>
        <Explorecomp/>

      </section>
    </>
  );
}
