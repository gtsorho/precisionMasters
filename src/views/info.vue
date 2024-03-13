<template>
  <section>
    <h2 class="font-black text-3xl bg-black  text-white text-center uppercase mb-8 py-8 hover:bg-yellow-600 hover:text-white hover:px-6">Latest Events</h2>
    <div class="animated fadeIn faster px-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-justify">
      <div v-for="(item, index) in news" :key="index" class="block rounded-lg shadow-xl bg-white w-72">
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <img class="rounded-lg sm:max-h-52 md:h-64 w-full object-cover " :src="item.image" :alt="item.topic" />
          <a href="#!">
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>

        <div class="p-2">
          <div class="flex justify-between">
            <h5 class="mb-2 text-sm font-bold leading-tight text-gray-600">
              {{ item.topic }}
            </h5>
            <h5 class="mb-2 text-xs font-light leading-tight text-gray-600 flex">
              {{ item.date }} 
            </h5>
          </div>
          <p class="mb-1 text-sm text-black">
            {{item.content}}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="my-16">
    <h2 class="font-black text-3xl bg-black  text-white text-center uppercase my-8 hover:bg-yellow-600 hover:text-white hover:px-6">Gallery</h2>
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://rr3---sn-vgqsknzl.googlevideo.com/videoplayback?expire=1710299362&ei=gsTwZY2EI6-P2_gP5o2wmAg&ip=181.214.165.66&id=o-ABFBlTYiufQXVlR_gzK0ReWKKwHCEYcoHAZUeR_uq097&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=pP&mm=31%2C29&mn=sn-vgqsknzl%2Csn-vgqsrnsr&ms=au%2Crdu&mv=m&mvi=3&pl=24&initcwndbps=812500&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=505.916&lmt=1642064464602376&mt=1710277508&fvip=1&fexp=24007246&c=ANDROID&txp=5311224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAKi4NmVMdD4esfw9Ox_Cz7U0QKf6TKXj2XJxeOWswWdYAiAhWTcvIZgYPbnjy1kL0ePEZwFH3YSrl7Z0HZwcZe3Deg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=APTiJQcwRQIhALfUINKW2UtrOd1LE8TzLZbjq-mXlR2oWnAcoW5KCxIOAiBN3CY84Ux-g1v8-Tba5XNwxP0053U_2-xs5Xyj4uCVaA%3D%3D&title=Amazing%20Process%20of%20Making%20Construction%20Aggregate%20%2F%20High%20Technology%20Crushing%20and%20Screening%20Equipment"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1629807473015-41699c4471b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHF1YXJyeXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1624084340915-8ef036692deb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHF1YXJyeXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1682144351190-9034a7c3b3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1629807472592-2649bfa09f9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHF1YXJyeXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1630288214173-a119cf823388?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1663045584825-90a22961a4de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHF1YXJyeSUyMHN0b25lfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1517089472343-85fc51aeb327?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhcnJ5fGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1682144338642-76e1cb277c90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1505833464198-4993b36cdfab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cXVhcnJ5fGVufDB8fDB8fHww0"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1573156667488-5c0cec674762?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cXVhcnJ5fGVufDB8fDB8fHww"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1517089472343-85fc51aeb327?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhcnJ5fGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="relative flex  flex-col ">
    <div class="min-h-28">
      <div class="mx-auto py-4">
    <h2 class="font-black text-3xl bg-black  text-white text-center uppercase my-8 hover:bg-yellow-600 hover:text-white hover:px-6">Featured</h2>

        <div class="gap-6 mt-8 mx-4 md:flex">
          <div class="md:w-1/2 border border-black bg-black" v-for="(video, index) in videos" :key="index">
            <div
              class="wrap-video"
              @mouseover="playVideo(index)"
              @mouseout="pauseVideo(index)"
            >
              <video ref="videos" class="object-cover h-96 w-full bg-black" loop>
                <source :src="video.src" type="video/mp4">
              </video>
            </div>
            <span class="pt-4 grid grid-cols-1 gap-4 p-3">
              <span class="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                {{ video.title }}
              </span>
              <!-- <span class="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                <span class="">{{ video.category }}</span>
              </span> -->
            </span>
            <!-- <span class="block text-slate-400 text-xs uppercase font-mono">
              {{ video.description }}
            </span> -->
          </div>
        </div>

      </div>
    </div>
  </div>
  </section>
</template>
<script>
export default {
    data() {
        return {
            news : [
                {
                    image: 'https://images.unsplash.com/photo-1505833464198-4993b36cdfab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
                    topic: 'Topic ipsum init',
                    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    date: '2024-03-13'
                },
                {
                    image: 'https://images.unsplash.com/photo-1603816885871-c122a9ff8d40?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    topic: 'voluptate velit esse',
                    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    date: '2024-03-14'
                },
                {
                    image: 'https://plus.unsplash.com/premium_photo-1661964199430-3e49c575b0b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    topic: 'Excepteur sint occaecat',
                    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    date: '2024-03-15'
                },
                {
                    image: 'https://plus.unsplash.com/premium_photo-1682144338642-76e1cb277c90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    topic: 'ipsam voluptatem quia',
                    content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
                    date: '2024-03-16'
                }
            ],
            videos: [
        {
          src:  new URL('../assets/videos/A visit to the quarrying site in Ghana1.mp4', import.meta.url).href,
          title: "A visit to the quarrying site in Ghana",
          category: "fashion/retail",
          description: "the trail less taken",
        },
        {
          src: new URL('../assets/videos/Sand Washer Working Site. Used on Mining, Quarry.mp4', import.meta.url).href,
          title: "How to Make Manufactured Sand by Crushing Rocks",
          category: "music video",
          description: "the world at large",
        },

        {
          src: new URL('../assets/videos/A quarry site in Ghana1.mp4', import.meta.url).href,
          title: "A quarry site in Ghana",
          category: "music video",
          description: "grandma cabbage",
        },
        {
          src: new URL('../assets/videos/videoplayback.mp4', import.meta.url).href,
          title: "Sand and gravel river quarry",
          category: "music video",
          description: "transportation the perfect pants",
        },
      ],
    };
  },
  methods: {
    playVideo(index) {
      this.$refs.videos[index].play();
    },
    pauseVideo(index) {
        this.$refs.videos[index].pause();
    },
  },
    
}
</script>
<style scoped>
    .showreels-btn {
  width: 25%;
  height: 25%;
  display: block;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-55%, -50%);
}

.showreels-div {
  height: 150px;
  width: 300px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px; /* Adjust spacing between videos */
}

.showreels-div:hover .showreels-video {
  display: block;
}

.showreels-div:hover .showreels-btn {
  display: none;
}

.showreels-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
}
</style>