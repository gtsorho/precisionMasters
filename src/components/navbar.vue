<template >
<header class="bg-black opacity-95 navbar fixed w-full top-0 z-10"  :class="{ 'navbar-hidden': !showNavbar }">
  <nav class="container mx-auto px-6 py-0 mt-0">
    <div class="flex items-center justify-between">
      <h1 class="text-white font-bold text-xl">
        <a href="#"><img src="../assets/logo.jpg" width="150" alt=""></a>
      </h1>
      <div class="hidden md:block">
        <ul class="flex items-center space-x-8">
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#home'}">Home</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'about'}">About</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#services'}">Services</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#contact'}">Contact</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'info'}">Gallery</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'health'}">Health | Safety</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'financial'}">Statements</router-link></li>
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
      <ul class="mt-4 space-y-4">        
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#home'}">Home</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'about'}">About</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#services'}">Services</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#contact'}">Contact</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'info'}">Gallery</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'health'}">Health | Safety</router-link></li>
            <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'financial'}">Statements</router-link></li>
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
      navbarThreshold: 0
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