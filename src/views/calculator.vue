<template>
<p class="bg-black text-white py-5 px-5 md:px-20">
    <span class="bg-yellow-600 px-3 font-semibold">Tonnage/Block calculator</span>
    Utilize our calculator to estimate the required quantity. Enter the dimensions of the area you intend to fill and click "calculate". Following that, you can input your information to receive a quotation via email. Alternatively, if time is of the essence, feel free to contact us directly to place your order over the phone.
</p>
  <div class="bg-gray-100 font-sans flex h-screen items-center justify-center">
    <div class="p-8">
      <div class="max-w-md mx-auto">
        <div class="mb-4 flex space-x-4 p-2 bg-white  shadow-md">
          <button @click="currentComponent = 'tonnageCalcVue'; isResult = false" :class="{ 'bg-yellow-600 text-white': currentComponent === 'tonnageCalcVue'}" class="flex-1 py-2 px-4  focus:outline-none focus:shadow-outline-yellow transition-all duration-300">Tonnage</button>
          <button @click="currentComponent = 'blockCalcVue'; isResult = false" :class="{ 'bg-yellow-600 text-white': currentComponent === 'blockCalcVue'}" class="flex-1 py-2 px-4  focus:outline-none focus:shadow-outline-yellow transition-all duration-300">Block</button>
        </div>
        <div class="transition-all duration-300 bg-white p-4  shadow-md border-l-4 border-yellow-600">
          <component :is="currentComponent" @result="acceptResults" v-if="currentPosition == 'calculate'"></component>
          <div v-if="currentPosition == 'result'" class=" min-w-72  text-slate-600">
            <h4 class="font-bold ">Results</h4>
            <div class="flex justify-between hover:bg-slate-200 px-4" v-for="(value, key) in result" :key="key">
              <p class="font-semibold ">{{key}}</p>
              <p>{{value}}</p>
            </div>
            <button class="bg-yellow-600 text-white hover:bg-yellow-500 w-full shadow my-5 py-1 font-medium" @click="currentPosition = 'quote'">Request for Quote</button>
          </div>
          <div class="mx-auto" v-if="currentPosition == 'quote'">
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
                    <textarea v-model="calcResults" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="8" id="grid-city" type="text" name="message" placeholder="Albuquerque"></textarea>
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
  </div>




  
</template>

<script>
import blockCalcVue from '@/components/blockCalc.vue';
import tonnageCalcVue from '@/components/tonnageCalc.vue';

export default {
  components: {
    blockCalcVue,
    tonnageCalcVue
  },
  data() {
    return {
      currentComponent: 'tonnageCalcVue',
      currentPosition: 'calculate',
      result:{},
      calcResults: 'Hello Precision Masters,\n\nI will like to request a quote for the Item and quantity below:\n\n'
    };
  },
  methods:{
    acceptResults(data){
      this.result = data
      this.currentPosition = 'result'

      for (const key in data) { 
        if (Object.hasOwnProperty.call(data, key)) {
          this.calcResults += `${key}: ${data[key]}\n`;
        }
      }
      this.calcResults += `\nI'm on stand by for your response\n\nRegards.`;
    },
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
  }
};
</script>

<style scoped>
</style>
