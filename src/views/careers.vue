<template>
            <div class="text-justify text-sm py-3 shadow-lg bg-black text-slate-200 px-5">
                <h4 class="bg-yellow-500 p-1 font-bold w-fit px-6 text-white">Fraud Alert <i class="bi bi-exclamation-triangle-fill"></i></h4>
                <p class="">
                    We at Precision Masters are committed to upholding the highest standards of integrity,
                    transparency, and fairness in our recruitment and employment practices. It has come to our
                    attention that individuals and organisations may falsely claim to represent PRECISION
                    MASTERS and offer employment opportunities in exchange for financial gain. For more details read our <button @click="downloadFile" class="text-yellow-500 hover:text-yellow-300">Employment Fraud Statement<i class="bi bi-file-earmark-arrow-down-fill"></i></button>
                </p>
                
            </div>
        <section  class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 text-justify">
            <div>
                <img src="../assets/Job offers-bro.png" alt="">    
            </div>  
            <div class="flex items-center mx-auto">
               <p class="text-white bg-black px-14 py-5 font-medium text-md">(0) Jobs Found</p> 
            </div>
        </section>
</template>
<script>
import About from '../components/about.vue'
export default {
    components:{
        About
    },
    methods: {
    downloadFile() {
      const fileUrl = '../assets/files/PRECISION MASTERS LTD EMPLOYMENT FRAUD STATEMENT-2.pdf';
      
      const anchor = document.createElement('a');
      anchor.href = fileUrl;
      anchor.download = 'EMPLOYMENT FRAUD STATEMENT.pdf';
      
      anchor.click();
    }
  }
}
</script>
<style>
    
</style>