<template>
<section class="p-6 py-24 md:px-32 text-slate-800" id="contact">
    <div class=" flex items-center justify-center ">
      <div class="container mx-auto p-4 text-center">
        <h1 class="text-4xl text-center mb-6 text-white bg-black "><span class="text-white bg-yellow-500 p-3 font-semibold ">C</span>ontact <span class="text-white p-3 bg-yellow-500 font-semibold">U</span>s</h1>
        <p>Unearth Possibilities with the Precision Masters - Your Gateway to Quality Aggregates! Have questions about our top-notch materials or need assistance in sourcing the perfect stone for your project? Connect with us today!</p>
        <div class="grid mt-3 grid-cols-1 sm:grid-cols-2 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <!-- Replace this with your grid items -->
          <div class="bg-black text-white shadow-lg w-full mx-auto">
            <div class="px-1 py-4">
                <span class="border-2 border-yellow-500 py-3 px-4  rounded-full"><i class="text-yellow-500 fa-solid fa-location-dot"></i></span>
              <div class="font-medium mt-5 text-xl mb-2">Our Address</div>
              <p class="text-gray-200 text-base">
                House No. 71, Otinshie, East Legon, Accra
              </p>
            </div>
          </div>
            <div class="bg-black text-white shadow-lg w-full md:w-4/6 mx-auto">
            <div class="px-1 py-4">
                <span class="border-2 border-yellow-500 py-3 px-4  rounded-full"><i class="text-yellow-500 fa-regular fa-envelope"></i></span>
              <div class="font-medium mt-5 text-xl mb-2">Email Us</div>
              <p class="text-gray-200 text-base">
                 info@precisionmasters.org
              </p>
            </div>
          </div>
            <div class="bg-black text-white shadow-lg w-full md:w-4/6 mx-auto">
            <div class="px-1 py-4">
                <span class="border-2 border-yellow-500 py-3 px-4  rounded-full"><i class="text-yellow-500 fa-solid fa-phone"></i></span>
              <div class="font-medium mt-5 text-xl mb-2">Call Us</div>
              <p class="text-gray-200 text-sm">
                 +233 30 395 6336
              </p>
              <p class="text-gray-200  text-sm">
                 +233 50 623 9693
              </p>
            </div>
          </div>  
        </div>

        <Faq/>        

        <div class="grid grid-cols-1 sm:grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 my-28 ">
            <div class="mx-auto w-full ">
                <iframe class="w-full h-80" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15881.614389939592!2d-0.18478642118411928!3d5.6546136084733805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1710024043980!5m2!1sen!2sgh" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="mx-auto">
                <form class="w-full max-w-lg shadow-lg p-5" ref="form" @submit.prevent="sendEmail()">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  name="email" placeholder="Jane Doe">
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                        <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"  name="email" type="text" placeholder="abc@xyz.com">
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" name="subject"  type="text" placeholder="subject">
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full  px-3 mb-6 md:mb-0">
                        <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name="message" placeholder="Albuquerque"></textarea>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full  px-3 mb-6 md:mb-0">
                            <button type="submit" class="bg-yellow-500 text-white  hover:bg-black px-6 mt-3 py-1 "> Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
</section>
</template>
<script>
import emailjs from '@emailjs/browser';
import Faq from '../components/faq.vue'
export default {
  components:{
    Faq
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm('precision_masters', 'ps_email', this.$refs.form, {
          publicKey: 'CWJayqqHh4HTBzA14', 
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );
    },
  },
};
</script>
<style>
    
</style>