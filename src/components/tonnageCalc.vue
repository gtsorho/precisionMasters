<template>
    <div class="tonnage flex justify-center items-center">
    <div class=" p-5  bg-white text-black">    
        <h1 class="font-extrabold px-3 bg-black text-white"><span class="bg-yellow-600 py-2 font-black px-1">Tonnage</span>  Calculator</h1>
        <div class=" rounded px-8 pt-6 pb-8 mb-4">
            <div class="mt-2">
              <label for="blockType" class="block text-sm font-medium leading-6 text-gray-900">Material</label>
              <select v-model="selsectedMaterial" id="blockType" name="blockType" class="block  w-full bg-white rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" placeholder="0.00">
                <option v-for="(material, i) in products" :key="i"  :value="material">{{ material }}</option>
              </select>
            </div>
            <div>
                <label for="width" class="block text-sm font-medium leading-6 text-gray-900">Width</label>
                <div class="relative mt-2 focus:ring-0 focus-visible:ring-1 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm"><i class="bi bi-arrows"></i></span>
                    </div>
                    <input type="text" name="width" id="width" v-model="width" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" placeholder="0.00">
                    <div class="absolute inset-y-0 right-0 flex items-center">
                    <label for="unit" class="sr-only">Unit</label>
                    <select v-model="widthUnit" id="unit" name="unit" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm">
                        <option value="m">meters</option>
                        <option value="y">yards</option>
                        <option value="f">feet</option>
                    </select>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <label for="length" class="block text-sm font-medium leading-6 text-gray-900">Length</label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm"><i class="bi bi-arrows-vertical"></i></span>
                    </div>
                    <input type="text" name="length" id="length" v-model="length" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" placeholder="0.00">
                    <div class="absolute inset-y-0 right-0 flex items-center">
                    <label for="unit" class="sr-only">Unit</label>
                    <select v-model="lengthUnit" id="unit" name="unit" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm">
                        <option value="m">meters</option>
                        <option value="y">yards</option>
                        <option value="f">feet</option>
                    </select>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <label for="depth" class="block text-sm font-medium leading-6 text-gray-900">Depth</label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm"><i class="bi bi-arrows-collapse"></i></span>
                    </div>
                    <input type="text" name="depth" id="depth" v-model="depth" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" placeholder="0.00">
                    <div class="absolute inset-y-0 right-0 flex items-center">
                    <label for="unit" class="sr-only">Unit</label>
                    <select v-model="depthUnit" id="unit" name="unit" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm">
                        <option value="m">meters</option>
                        <option value="y">yards</option>
                        <option value="f">feet</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button @click="calculate" class="bg-yellow-600  text-white font-semibold shadow-md hover:bg-yellow-500 w-4/5 ">Calculate</button>
            <button @click="reset" class="bg-black w-1/5 text-white font-semibold shadow-md hover:bg-slate-800 "><i class="bi bi-arrow-clockwise"></i></button>
        </div>
        <p class="text-center my-3 bg-black text-yellow-500" v-if="tonnage !== null">Required Tonnage: <span class="bg-yellow-600 font-medium text-white px-3 pb-3">{{ tonnage }} tons</span> </p>
    </div>
  </div>
</template>
<script>
export default {
    emits:['result'],
    data() {
        return {
        selsectedMaterial:'Fine Sand',
        width: null,
        widthUnit: 'm',
        length: null,
        lengthUnit: 'm',
        depth: null,
        depthUnit: 'm',
        tonnage: null,
        products:[
          'Crushed Stone','Gravel','Coarse  Sand', 'Fill Dirt', 'Riprap','Ballast','Quarry Dust', 'Fine Sand'
        ]
        }
    },
      methods: {
        calculate: function() {
          let width = this.convertToMeters(this.width, this.widthUnit);
          let length = this.convertToMeters(this.length, this.lengthUnit);
          let depth = this.convertToMeters(this.depth, this.depthUnit);

          const conversionFactor = 1.6;
          let volume = width * length * depth;
          this.tonnage = (volume * conversionFactor).toFixed(2);

          this.$emit('result', {
            material:this.selsectedMaterial,
            depth: this.depth + this.depthUnit,
            length: this.length + this.lengthUnit,
            width: this.width + this.widthUnit,
            result: this.tonnage + ' tons'
          })
        },
        reset(){
                this.width = null
                this.widthUnit = 'm'
                this.length = null
                this.lengthUnit = 'm'
                this.depth = null
                this.depthUnit = 'm'
                this.tonnage = null
        },
        convertToMeters: function(value, unit) {
          switch (unit) {
            case 'm':
              return value;
            case 'y':
              return value * 0.9144; // 1 yard = 0.9144 meters
            case 'f':
              return value * 0.3048; // 1 foot = 0.3048 meters
            default:
              return 0;
          }
        }
      }
}
</script>
<style scoped>
</style>