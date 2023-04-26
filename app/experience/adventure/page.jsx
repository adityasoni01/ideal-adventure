import { imageOptimizer } from "next/dist/server/image-optimizer";
import Script from "next/script";
import Head from "next/head";
export default  function Adventure(){
    return(
    <div>
        <Head>
            
        <script src="D:\majorproject\ideal-adventure\public\sc.js"></script>
        </Head>
        <div class="p-5 bg-amber-200">
        <h1 class="mb-3 text-4xl font-light">Welcome to KindaCode.com</h1>

       
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
            lorem egestas vitae scel

         
            <span id="dots">...</span>

         
            <span id="more" class="hidden">erisque enim ligula
                venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
                vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In libero
                sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
                fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
                </span>
        </p>

     
        {/* <button onClick={toggleText} id="button"
            class="mt-3 px-5 py-2 bg-rose-500 text-white duration-300 hover:bg-rose-700">Read
            more</button> */}
</div>

    
    </div>
    )
}