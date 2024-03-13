<template>
<section id="about" class=" text-slate-700">
    <div class="parallax">
        <div class="bg-white w-5/6 md:w-4/6 text-slate-700 p-5">
            <h1 class="text-4xl   py-5">Who We Are <span class="text-yellow-500 font-semibold bg-black px-5">?</span></h1>
            <p class=" md:px-9">PRECISION MASTERS, the foremost provider of premium quarry products dedicated to serving the construction market in Ghana, West Africa, and beyond. With a rich legacy of experienced professionals in the quarry industry, we have firmly established ourselves as a cornerstone in the construction landscape of Africa</p>
            <div class="md:grid grid-cols-1 sm:grid-cols-1 hidden items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
                <div class="text-justify px-9">
                    <h2 class="text-xl px-2 my-4 font-medium bg-black text-white py-4">Sustainability at the <span class="bg-yellow-600 p-5">Core</span> </h2>
                    <p >
                        Understanding the significance of responsible quarrying, environmental stewardship is at the heart of our operations. PRECISION MASTERS actively embraces sustainable quarrying methods, engages in land reclamation, and conserves resources. Our aim is to ensure a positive impact on the environment and the communities we proudly serve.
                    </p>
                </div>
                <div class="text-justify px-9">
                    <h2 class="text-xl px-2 my-4 font-medium bg-black text-white py-4">Our Customers <span class="bg-yellow-600 p-5">First</span> </h2>
                    <p>
                        Our values and success at PRECISION MASTERS are rooted in robust relationships with our diverse clientele, ranging from construction companies and contractors to landscapers and homeowners. We prioritize customer satisfaction, offering exceptional service, timely deliveries, and bespoke solutions tailored to meet the unique needs of each client.
                    </p>
                </div>
            </div>
            <p class="px-9 text-justify py-4 hidden md:block">
                As a forward-thinking company, PRECISION MASTERS continues to invest in cutting-edge technology and equipment to enhance efficiency and broaden our product offerings. Our commitment to innovation propels us to explore new avenues for growth and product diversification, ensuring we stay at the forefront of industry advancements to better serve our valued customers.
            </p>
        </div>
    </div>

    <div class="block md:flex justify-between mx-5 md:mx-36 xl:mx-28 ">
        <div class="text-justify my-9 mr-5 w-full md:w-1/2">
            <div class="my-5 py-5">
                <h2 class="text-lg font-bold bg-black w-28 px-4 text-yellow-500">VISION</h2>
                <p>
                    At Precision Masters, our vision is to lead the industry as the premier provider of high-quality quarry mining solutions, establishing the standard for excellence and innovation. We aspire to be the preferred choice for customers seeking quality and affordable stones. Our commitment lies in precision mining, promoting a sustainable environment, and prioritizing the welfare of our employees. Serving private individuals, businesses, and government entities, we aim to uphold the highest standards of excellence and responsibility in our quarry mining operations.
                </p>
            </div>
            <div>
                <h2 class="text-lg font-bold bg-black w-28 px-4 text-yellow-500">MISSION</h2>
                <p>
                    At PRECISION MASTERS, our mission is to deliver cutting-edge quarry mining services and products that exceed customer expectations. We prioritize safety, sustainability, and environmental responsibility, aiming to be the preferred choice for all quarry mining needs. Through a commitment to continuous improvement and operational excellence, we foster enduring partnerships with clients, employees, and communities. Our dedicated team of professionals, equipped with state-of-the-art technology, ensures superior results while upholding a culture of innovation and collaboration. As responsible stewards of the environment, we minimize our ecological footprint and prioritize safety, contributing to a greener and more sustainable future. Join us in our mission to redefine excellence in quarry mining with precision, sustainability, and safety at the forefront.           
                </p>
            </div>
        </div>
        <video autoplay loop muted class=" w-full md:w-4/6">
            <source src="../assets/video.mp4" type="video/mp4">
        </video>
    </div>
    <router-link class="border my-9 block border-black text-black  hover:bg-yellow-500 hover:border-clack w-fit hover:text-white py-2 px-11 mx-auto block" :to="{name:'about'}">See More</router-link>


</section>
</template>
<script>
export default {
    
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