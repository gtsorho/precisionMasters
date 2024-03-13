<template >
<section id="home">
 <div
    class="min-w-screen min-h-screen backdrop flex items-center justify-center py-5"
    x-data="beer()"
    x-init="start()"
  >
    <div class="text-white w-9/12 p-5  ">
      <!-- <h1 class="lg:text-8xl text-4xl text-center mb-3 font-light">
        We are the
      </h1> -->
      <h1 class="lg:text-8xl text-4xl  text-center mb-5 font-medium">
        <span class="bg-black  my-2 px-3 py-3 inline-block"> 
          <span class="bg-yellow-500 uppercase text-slate-500">P</span>RECISI<span><img src="../assets/favicon.png" class="inline w-24 "></span>N 
        </span> 
        <span class="bg-black  px-3 mx-2 pt-3 pb-5  inline-block">
          <span class="bg-yellow-500 text-slate-500">M</span>ASTERS 
        </span>  
        <span class="bg-black px-3 pt-3 pb-5  inline-block">
          <span class="bg-yellow-500 text-slate-500 px-1" >L</span>TD 
        </span>
      </h1>
      <div class="flex justify-around">
          <!-- <button class="border border-white text-white rounded-md hover:bg-slate-50 hover:border-blue-600 hover:text-slate-700 py-2 px-6 mx-auto block">See Products</button> -->
          <!-- <button class="border border-white text-white rounded-md hover:bg-blue-400 py-2 px-6 mx-auto block">Get Quote</button> -->
          <router-link class="border border-white text-white rounded-md hover:bg-yellow-500 hover:border-white hover:text-slate-700 py-2 px-6 mx-auto block" :to="{name:'home', hash:'#products'}">Products</router-link>
          <router-link class="border border-white text-white rounded-md hover:bg-yellow-500 py-2 px-6 mx-auto block" :to="{name:'home', hash:'#contact'}">Get Quote</router-link>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.backdrop{
   background-position: 50% 80%;
   background-size: cover;
  background-image: linear-gradient(to top, rgb(223 237 202 / 45%), rgb(20, 20, 20)), url('https://roshankashmir.net/wp-content/uploads/2023/02/Hero.jpg')}
</style>