<template >
<header class="bg-black opacity-95 navbar fixed w-full top-0 z-10"  :class="{ 'navbar-hidden': !showNavbar }">
  <nav class="container mx-auto px-6 py-0 mt-0">
    <div class="flex items-center justify-between">
      <h1 class="text-white font-bold text-xl">
        <a href="#"><img src="../assets/logo.jpg" width="150" alt=""></a>
      </h1>
      <div class="hidden md:block">
        <ul class="flex items-center text-sm space-x-8">        
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#home'}">Home</router-link></li>
          <li>
            <div class="relative inline-block text-left" @click="toggleDropdown">
              <button class="w-full  px-4 py-1 text-white hover:bg-gray-700 rounded  inline-flex justify-between items-center">
                <span>About</span>
                <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div v-show="isOpen" class="absolute z-50 mt-2 w-fit rounded-md shadow-lg bg-black border border-gray-700">
                <div class="py-1 text-gray-700 text-sm w-fit" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <router-link class="block px-5 py-1 text-white  hover:bg-gray-700  rounded" :to="{name:'about'}">About Us</router-link>
                  <router-link class="block px-5 py-1 text-white  w-max hover:bg-gray-700  rounded" :to="{name:'health'}">Health | Safety</router-link>
                  <router-link class="block px-5 py-1 text-white   hover:bg-gray-700  rounded" :to="{name:'sustainability'}">Sustainability</router-link>
                  <router-link class="block px-5 py-1 text-white  hover:bg-gray-700  rounded" :to="{name:'financial'}">Reports</router-link>
                </div>
              </div>
            </div>
          </li>
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#services'}">Services</router-link></li>
          <!-- <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'about'}">About Us</router-link></li> -->
          <!-- <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'health'}">Health | Safety</router-link></li> -->
          <!-- <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'sustainability'}">Sustainability</router-link></li> -->
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'tonnage'}">Calculator</router-link></li>
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#contact'}">Contact</router-link></li>
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'info'}">Gallery</router-link></li>
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'careers'}">Careers</router-link></li>     
        </ul>
      </div>
      <div class="md:hidden">
        <button class="outline-none mobile-menu-button " @click="showMobileNav = !showMobileNav">
          <svg class="w-6 h-6 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="mobile-menu  md:hidden" :class="showMobileNav ? 'block': 'hidden'">
              <ul class="flex items-center text-sm space-x-8">        
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#home'}">Home</router-link></li>
          <li>
            <div class="relative inline-block text-left" @click="toggleDropdown">
              <button class="w-full  px-4 py-1 text-white hover:bg-gray-700 rounded  inline-flex justify-between items-center">
                <span>About</span>
                <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div v-show="isOpen" class="absolute z-50 mt-2 w-fit rounded-md shadow-lg bg-black border border-gray-700">
                <div class="py-1 text-gray-700 text-sm w-fit" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <router-link class="block px-5 py-1 text-white  hover:bg-gray-700  rounded" :to="{name:'about'}">About Us</router-link>
                  <router-link class="block px-5 py-1 text-white  w-max hover:bg-gray-700  rounded" :to="{name:'health'}">Health | Safety</router-link>
                  <router-link class="block px-5 py-1 text-white   hover:bg-gray-700  rounded" :to="{name:'sustainability'}">Sustainability</router-link>
                  <router-link class="block px-5 py-1 text-white  hover:bg-gray-700  rounded" :to="{name:'financial'}">Reports</router-link>
                </div>
              </div>
            </div>
          </li>
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#services'}">Services</router-link></li>
          <!-- <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'about'}">About Us</router-link></li> -->
          <!-- <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'health'}">Health | Safety</router-link></li> -->
          <!-- <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'sustainability'}">Sustainability</router-link></li> -->
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'tonnage'}">Calculator</router-link></li>
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#contact'}">Contact</router-link></li>
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'info'}">Gallery</router-link></li>
          <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'careers'}">Careers</router-link></li>     
        </ul>
    </div>
  </nav>
</header>

</template>
<script>

export default {
 data() {
    return {
      showNavbar: false,
      showMobileNav: false,
      navbarHeight: 0,
      navbarThreshold: 0,
       isOpen: false
    };
  },
  mounted() {
    this.navbarHeight = 300;
    this.navbarThreshold = this.navbarHeight - 100; // change 100 to your desired threshold
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
     toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    handleScroll() {
      this.showNavbar = window.scrollY > this.navbarThreshold;
    }
  }
};
</script>
<style scoped>
     .navbar-hidden {
    transform: translateY(-100%);
  }
  .navbar{
    transition: transform 0.5s ease-out;
  }

</style>