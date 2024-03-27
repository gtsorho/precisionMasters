<template>
  <div class="tonnage flex justify-center items-center">
    <div class="p-5 bg-white text-black">    
      <h1 class="font-extrabold px-3 bg-black text-white">
        <span class="bg-yellow-600 py-2 font-black px-1">Block</span> Calculator
      </h1>
      <div class="rounded px-8 pt-6 pb-8 mb-4">
        <div>
          <label for="length" class="block text-sm font-medium leading-6 text-gray-900">Length</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-500 sm:text-sm"><i class="bi bi-arrows"></i></span>
            </div>
            <input type="text" name="length" id="length" v-model="length" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" placeholder="0.00">
            <div class="absolute inset-y-0 right-0 flex  items-center">
              <label for="unit" class="sr-only">Unit</label>
              <select v-model="lengthUnit" id="unit" name="unit" class="h-full  rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm">
                <option value="m">meters</option>
                <option value="y">yards</option>
                <option value="f">feet</option>
              </select>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <label for="height" class="block text-sm font-medium leading-6 text-gray-900">Height</label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-500 sm:text-sm"><i class="bi bi-arrows-vertical"></i></span>
            </div>
            <input type="text" name="height" id="height" v-model="height" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" placeholder="0.00">
            <div class="absolute inset-y-0 right-0 flex items-center">
              <label for="unit" class="sr-only">Unit</label>
              <select v-model="heightUnit" id="unit" name="unit" class="h-full   rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm">
                <option value="m">meters</option>
                <option value="y">yards</option>
                <option value="f">feet</option>
              </select>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <label for="blockType" class="block text-sm font-medium leading-6 text-gray-900">Block Type</label>
          <select v-model="blockType" id="blockType" name="blockType" class="block  w-full bg-white rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-yellow-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" placeholder="0.00">
            <option v-for="(block, i) in blockTypes" :key="i"  :value="block.name">{{ block.name }}</option>
          </select>
        </div>
      </div>
      <div>
        <button @click="calculate" class="bg-yellow-600 text-white font-semibold shadow-md hover:bg-yellow-500 w-4/5">Calculate</button>
        <button @click="reset" class="bg-black w-1/5 text-white font-semibold shadow-md hover:bg-slate-800"><i class="bi bi-arrow-clockwise"></i></button>
      </div>
      <p class="text-center my-3 bg-black text-yellow-500" v-if="blocksNeeded !== null">Blocks Needed: <span class="bg-yellow-600 font-medium text-white px-3 pb-3">{{ blocksNeeded }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  emits:['result'],
  data() {
    return {
      length: null,
      lengthUnit: 'm',
      height: null,
      heightUnit: 'm',
      blockType: 'standard',
      blocksNeeded: null,
      blockTypes: [
        { name: '6in block', width: 150, length: 400, height: 200 },
        { name: '5in block', width: 125, length: 400, height: 200 }
      ]
    };
  },
  methods: {
    calculate() {
      const conversionFactors = {
        m: 1,
        y: 0.9144,
        f: 0.3048,
        mm: 0.001
      };
      const lengthInMeters = this.length * conversionFactors[this.lengthUnit];
      const heightInMeters = this.height * conversionFactors[this.heightUnit];
      
      const selectedBlock = this.blockTypes.find(block => block.name === this.blockType);

        const blockHeightInMeters = selectedBlock.height * conversionFactors['mm'];
        const blockLengthInMeters = selectedBlock.height * conversionFactors['mm'];

      this.blocksNeeded =( (lengthInMeters * heightInMeters) / (blockHeightInMeters * blockLengthInMeters)).toFixed(2);

      this.$emit('result', {
        blockType:selectedBlock.name,
        wallHeight: this.height + this.heightUnit,
        wallLength: this.length + this.lengthUnit,
        result: this.blocksNeeded + ' blocks'
      })
    },
    reset() {
      this.length = null;
      this.height = null;
      this.blocksNeeded = null;
    }
  }
  
};
</script>

<style scoped>
</style>
