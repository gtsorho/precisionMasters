<template>
<div id="faqApp" class='flex mt-10 items-center justify-center '>
    <div class='md:w-5/6 w-full   mx-auto bg-yellow-500 rounded-lg shadow-xl'>
        <div class=' space-y-1'>

            <h1 class='text-2xl font-bold bg-black text-white'>Frequently Asked Questions</h1>

            <div v-for="(faq, index) in faqs" :key="index" class='border-b transition duration-300 bg-black ease-in-out transform hover:scale-100'>
                <div @click="toggleAnswer(index)"  class='flex items-center text-white'>
                    <button class='w-10 h-10 mr-2 p-1 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" :d="faq.isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'"/>
                        </svg>
                    </button>
                    <p class='text-lg font-base'>{{ faq.question }}</p>
                </div>
                <p v-show="faq.isOpen" class="pl-12 pr-8 py-2 text-justify text-white">{{ faq.answer }}</p>
            </div>

        </div>
    </div>
</div>


</template>
<script>
export default {
data() {
        return {
            faqs: [ 
                {
                    question: 'What are the prices of your products?',
                    answer: 'PRECISION MASTERS Representative will be happy to assist you with the pricing of our products and services.',
                    isOpen: false
                },
                {
                    question: 'How can I calculate the amount of material needed for my project?',
                    answer: 'To get an accurate estimate of the materials required for your project, consider using our online calculator or reaching out to the knowledgeable representatives at PRECISION MASTERS on 0506239693. Our dedicated sales team specialises in the aggregate industry and can assist you in selecting the appropriate materials while calculating the necessary quantity for your project. We prioritize personalised service to ensure your project is completed promptly, regardless of its size. Contact us today or visit our quarry to have all your inquiries addressed promptly.',
                    isOpen: false
                },
                {
                    question: 'What is the minimum and maximum quantity in cubic metres that a truck can deliver?',
                    answer: 'We handle projects of all sizes – there\'s no job too small for us. While there\'s no minimum quantity required for delivery, there is a minimum hauling charge. Typically, our haul trucks can transport around 18 cubic units of material on average.',
                    isOpen: false
                },
                {
                    question: 'Where is your quarry located?',
                    answer: 'PRECISION MASTERS is in Oworakesim in Asamankesi – Eastern Region of Ghana.',
                    isOpen: false
                },
                {
                    question: 'How do I submit my order to Precision Masters?',
                    answer: 'To get an accurate estimate of the materials required for your project, consider using our online calculator or reaching out to the knowledgeable representatives at PRECISION MASTERS on 0506239693.',
                    isOpen: false
                },
                {
                    question: 'Does PRECISION MASTERS sell to the Public?',
                    answer: 'Absolutely! We cater to a diverse clientele, serving both large contractors and small businesses, as well as local retail operations and individuals embarking on new builds or home improvement projects. No matter the scale, we\'re here to provide quality materials and service.',
                    isOpen: false
                },
                {
                    question: 'What size gravel would I use for my project?',
                    answer: 'Our inventory typically includes common sizes like 3/8-inch, 5/8 inch, and 3/4-inch chippings, with the latter often preferred for foundation work. Additionally, we offer road base (0-40mm), boulders, and a variety of other stone sizes to meet diverse project needs. Our team is dedicated to understanding your requirements and providing tailored recommendations to ensure the best product selection for your projects.',
                    isOpen: false
                }
            ]
        };
    },
    methods: {
        toggleAnswer(index) {
            this.faqs.forEach((faq, i) => {
                if (i !== index) {
                    faq.isOpen = false;
                }
            });

            this.faqs[index].isOpen = !this.faqs[index].isOpen;
        }
    }
}
</script>
<style>
    
</style>