<template>
<div class="flex justify-evenly">
<section>
    <!-- component -->
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-white  text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[15rem]  shadow-xl shadow-blue-gray-900/5">
        <h2 class="text-4xl text-white  bg-black">
            <span class="text-white font-semibold bg-yellow-500 p-1  md:p-3">T</span>imeline
        </h2>
        <nav class="flex flex-col gap-1 min-w-[240px] p-2 py-11  font-sans text-base font-normal text-black">
            <div role="button" tabindex="0" class="flex items-center bg-yellow-500  w-40 font-semibold p-3 rounded-e-full text-start leading-tight transition-all hover:bg-yellow-500 hover:bg-opacity-80 focus:bg-yellow-500 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-black focus:text-black active:text-black outline-none">
                <div class="grid place-items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                    <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            Jan 2024
            </div>        
        </nav>
    </div>
</section>
<section >
    <div>
        <h2 class="text-center text-2xl font-bold"><span class="bg-black text-white px-3">Financial Statement</span><span class="bg-yellow-500 px-2">2024</span> </h2>
    </div>
    <div class="flex items-center justify-center">
        <img src="../assets/Documents-amico.png" class="w-1/2" alt="" srcset="">
    </div>
</section>
</div>

</template>
<script>
export default {
    
}
</script>
<style>
    
</style>