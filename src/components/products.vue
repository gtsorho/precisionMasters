<template>
<section id="products" class="py-3">
    <div class="parallax">
        <div class="bg-white w-4/6 text-slate-800 p-5">
          <h2 class="text-4xl text-white  bg-black">
            <span class="text-white font-semibold bg-yellow-600 p-1 md:p-3">O</span>ur
            <span class="text-white font-semibold bg-black  p-1 md:p-3">P</span>roducts
          </h2>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-7">
              <div>
                <p class="text-justify text-sm md:text-base">Unearth a world of possibilities with <span class="bg-black p-1 text-white font-semibold"> Precision Masters</span>, your premier destination for high-quality aggregates and stone products. <span class="bg-yellow-500 p-1 font-semibold text-black"> Our quarry</span> boasts a rich reserve of meticulously extracted natural materials that stand as a <span class="bg-yellow-500 p-1 font-semibold text-black"> testament to durability and excellence</span> . Our diverse range of quarry products caters to a myriad of construction and landscaping needs. From <span class="bg-black p-1 text-white font-semibold">robust aggregates</span> for infrastructure projects to <span class="bg-yellow-500 p-1 mt-1 inline-block text-black font-semibold"> finely crafted stones</span> for architectural marvels, Precision Masters delivers unparalleled quality to <span class="bg-black p-1  text-white font-semibold">meet and exceed industry standards.</span></p>
              </div>
              <div>
                <vueper-slides class="hidden md:block" autoplay :bullets="false" :arrows="false">
                  <vueper-slide
                    v-for="(slide, i) in slides"
                    :key="i"
                    :image="slide.image"
                    class="h-96"
                    >
                  </vueper-slide>
                </vueper-slides>
              </div>
            </div>
        </div>
    </div>
    <div class=" flex items-center justify-center ">
      <div class="container mx-auto p-4 text-center">
        <h1 class="text-2xl underline text-center py-8">Products</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          <!-- Replace this with your grid items -->
          <div class="bg-black shadow-lg w-5/6 mx-auto">
            <img src="../assets/products/Crushed Stone.jpg" alt="Placeholder Image" class="w-full h-52  object-cover">
            <div class="px-1 py-4">
                <div class="font-medium text-xl mb-5 text-center">
                    <h1 class="text-xl text-center  bg-black text-yellow-500">
                    <span class="bg-gray-600 border border-yellow-500 p-2 font-semibold">Crushed Stone</span></h1>
                </div> 
                <p class="text-white text-base">
                    Crushed stone, in varied sizes, is widely employed in construction for road building, foundations, and drainage. This versatile material caters to diverse needs, ensuring robust structures and efficient drainage systems in construction projects.
                </p>
            </div>
          </div>
          <div class="bg-black shadow-lg w-5/6 mx-auto">
            <img src="../assets/products/Gravel.jpg" alt="Placeholder Image" class="w-full h-52  object-cover">
            <div class="px-1 py-4">
                <div class="font-medium text-xl mb-5 text-center">
                  <h1 class="text-xl text-center  bg-black text-yellow-500">
                  <span class="bg-gray-600 border border-yellow-500 p-2 font-semibold">Gravel</span></h1>
                </div> 
              <p class="text-white text-base">
                The stone material employed for driveways, walkways, and as a base for concrete and asphalt plays a crucial role in construction. It provides a durable foundation for surfaces, ensuring stability and longevity in these essential components of infrastructure.              </p>
            </div>
          </div>
          <div class="bg-black shadow-lg w-5/6 mx-auto">
            <img src="../assets/products/sand.jpg" alt="Placeholder Image" class="w-full h-52  object-cover">
            <div class="px-1 py-4">
                <div class="font-medium text-xl mb-5 text-center">
                  <h1 class="text-xl text-center  bg-black text-yellow-500">
                  <span class="bg-gray-600 border border-yellow-500 p-2 font-semibold">Coarse  Sand</span></h1>
                </div> 
              <p class="text-white text-base">
                Various sand types, including concrete sand and masonry sand, are vital in construction for crafting mortar and concrete. These materials play a fundamental role in ensuring the strength and cohesion of construction projects, contributing to the overall integrity of structures.
              </p>
            </div>
          </div>
          <div class="bg-black shadow-lg w-5/6 mx-auto">
            <img src="../assets/products/fill-dirt.jpg" alt="Placeholder Image" class="w-full h-52  object-cover">
            <div class="px-1 py-4">
                <div class="font-medium text-xl mb-5 text-center">
                  <h1 class="text-xl text-center  bg-black text-yellow-500">
                  <span class="bg-gray-600 border border-yellow-500 p-2 font-semibold">Fill Dirt</span></h1>
                </div> 
              <p class="text-white text-base">
                 Fill dirt, composed of soil and stones, serves as a versatile material for filling holes, leveling uneven terrain, and establishing a stable foundation for construction projects. Its use is crucial in creating a solid base, contributing to the structural integrity and stability of various construction endeavors.
              </p>
            </div>
          </div>
          <div class="bg-black shadow-lg w-5/6 mx-auto">
            <img src="../assets/products/Riprap.jpg" alt="Placeholder Image" class="w-full h-52  object-cover">
            <div class="px-1 py-4">
                <div class="font-medium text-xl mb-5 text-center">
                  <h1 class="text-xl text-center  bg-black text-yellow-500">
                  <span class="bg-gray-600 border border-yellow-500 p-2 font-semibold">Riprap</span></h1>
                </div> 
              <p class="text-white text-base">
                 Riprap, comprised of sizable and durable stones, serves a crucial role in erosion control. It is utilized to prevent soil erosion along shorelines and embankments, providing robust protection and stability to these vulnerable areas in various environmental and construction contexts.
              </p>
            </div>
          </div>
          <div class="bg-black shadow-lg w-5/6 mx-auto">
            <img src="../assets/products/Ballast.jpg" alt="Placeholder Image" class="w-full h-52  object-cover">
            <div class="px-1 py-4">
                <div class="font-medium text-xl mb-5 text-center">
                  <h1 class="text-xl text-center  bg-black text-yellow-500">
                  <span class="bg-gray-600 border border-yellow-500 p-2 font-semibold">Ballast</span></h1>
                </div> 
              <p class="text-white text-base">
                 Ballast materials play a critical role in stabilizing railroad tracks, ensuring safe and smooth train operations. These materials provide essential support and weight distribution, contributing to the integrity and reliability of the railway infrastructure.
              </p>
            </div>
          </div>
          <div class="bg-black shadow-lg w-5/6 mx-auto">
            <img src="../assets/products/quary dust.jpg" alt="Placeholder Image" class="w-full h-52  object-cover">
            <div class="px-1 py-4">
                <div class="font-medium text-xl mb-5 text-center">
                  <h1 class="text-xl text-center  bg-black text-yellow-500">
                  <span class="bg-gray-600 border border-yellow-500 p-2 font-semibold">Quarry Dust</span></h1>
                </div> 
              <p class="text-white text-base">
                Quarry dust, also known as stone dust or crusher dust, is a by-product of quarrying operations. This material is composed of fine, silty particles and is commonly utilized in construction for various applications. Here are some key points about quarry dust              </p>
            </div>
          </div> 
          <div class="bg-black shadow-lg w-5/6 mx-auto">
            <img src="../assets/products/sand-image.jpg" alt="Placeholder Image" class="w-full h-52  object-cover">
            <div class="px-1 py-4">
                <div class="font-medium text-xl mb-5 text-center">
                  <h1 class="text-xl text-center  bg-black text-yellow-500">
                  <span class="bg-gray-600 border border-yellow-500 p-2 font-semibold">Fine Sand</span></h1>
                </div> 
              <p class="text-white text-base">
                Precision Masters' Fine Sand – the cornerstone of quality construction and landscaping projects. Meticulously crafted as a by-product of our quarrying operations, our fine sand is a superior choice for those seeking excellence in their building endeavors                </p>
            </div>
          </div>  
        </div>
      </div>
    </div>
</section>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: { VueperSlides, VueperSlide },
    data() {
      return {
          slides : [
            {
              image: new URL(`../assets/products/WACM.jpg`,  import.meta.url).href
            },
            {
              image: new URL(`../assets/products/rocky.jpg`,  import.meta.url).href
            },
            {
              image: new URL(`../assets/products/fine-sand.jpg`,  import.meta.url).href
            },
            {
              image: new URL(`../assets/products/quary dust.jpg`,  import.meta.url).href
            }
          ]
      }
    },  
}
</script>
<style scoped>
     body {
      height: 200vh;
    }

    .parallax {
      background-image: url('../assets/rockysite1.jpg'); /* Replace with your image URL */
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
    }

    /* Adjust this margin based on your card size */
    .card {
      margin-top: 20vh;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
</style>