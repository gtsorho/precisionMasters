<template>
<div class="bg-black  text-white py-7">
    <div class="container mx-auto">
        <div class="flex flex-wrap">
            <div class="p-4 md:w-1/4">
                <a href="#"><img src="../assets/logo.jpg" width="150" alt=""></a>
                <p class="text-left">Uniting Nature and Construction with Stones</p>
            </div>
            <div class="p-4 md:w-1/4">
                <h2 class="mb-4 text-lg">Site Map</h2>
                <ul class="list-none">
                    <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#home'}">Home</router-link></li>
                    <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#about'}">About</router-link></li>
                    <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#products'}">Products</router-link></li>
                    <li><router-link class="block px-4 py-1 text-white hover:bg-gray-700 rounded" :to="{name:'home', hash:'#contact'}">Contact</router-link></li>
                </ul>
            </div>
            <div class="p-4 md:w-1/3">
                <h2 class="mb-4 text-lg">Contact</h2>
                <p class="text-left"><a href="#" class="text-dark"><i class="fa d-inline mr-3 text-muted fa-phone"></i>+233 50 623 9693 | +233 30 395 6336</a></p>
                <p><a href="#" class="text-dark"><i class="fa d-inline mr-3 text-muted fa-envelope-o"></i> info@precisionmasters.org</a></p>
                <p class=""><a href="#" class="text-dark"><i class="fa d-inline mr-3 fa-map-marker text-muted"></i> House No. 71, Otinshie, East Legon, Accra</a></p>
            </div>
            <div class=" px-9 py-4 md:w-1/8">
                <h2 class="mb-4 text-lg">Follow us</h2>
                <div class="flex items-center justify-between my-2 pt-3">
                    <a href="#"><i class="d-block fa fa-facebook-official text-muted fa-lg mr-2"></i></a>
                    <a href="#"><i class="d-block fa fa-instagram text-muted fa-lg mx-2"></i></a>
                    <a href="#"><i class="d-block fa fa-twitter text-muted fa-lg ml-2"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
    
}
</script>
<style>
    
</style>