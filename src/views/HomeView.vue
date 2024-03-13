<template>
 
  <BannerVue/>
  <AboutVue/>
  <ServicesVue/>
  <ProductsVue/>
  <ContactVue/>
          

  <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
      <router-link class="block w-12 h-12 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12" :to="{name:'home', hash:'#home'}">
        <img
          class="object-center object-cover w-full h-full "
          src="../assets/excavator(1).png"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
import BannerVue from '../components/banner.vue'
import AboutVue from '../components/about.vue'
import ServicesVue from '../components/services.vue'
import ProductsVue from '../components/products.vue'
import ContactVue from '../components/contact.vue'
export default {
  components:{
    BannerVue,
    AboutVue,
    ServicesVue,
    ProductsVue,
    ContactVue
  },
  data() {
    return {

  }
  }
};
</script>
<style>
.backdrop{
   background-position: 50% 80%;
   background-size: cover;
  background-image: linear-gradient(to top, rgb(223 237 202 / 45%), rgb(0, 157, 201)), url('https://roshankashmir.net/wp-content/uploads/2023/02/Hero.jpg')}
</style>
