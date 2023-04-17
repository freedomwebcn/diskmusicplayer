<template>
  <div class="h-[calc(100%-91px)]">
    <div class="grid h-full w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <header class="relative z-10 col-span-2 col-start-2 h-16 bg-red-400 text-white">header</header>
      <div class="row-span-2 row-start-1 w-[281px] bg-black text-white">Nav</div>
      <!-- main -->
      <div class="text-white">
        <section class="mt-[-64px] border-l-orange-400">
          <div class="relative flex h-[30vh] max-h-[400px] min-h-[340px] bg-orange-500 px-8 pb-6">
            <div class="absolute left-0 top-0 h-full w-full bg-[rgb(152_184_160)]"></div>
            <div class="absolute left-0 top-0 h-full w-full bg-[linear-gradient(transparent_0,_rgba(0,_0,_0,_0.5)_100%),var(--background-noise)]"></div>
            <div class="mr-6 flex h-[192px] w-[192px] min-w-[192px] self-end xl:h-[232px] xl:w-[232px] xl:min-w-[232px]">
              <div class="relative flex h-[inherit]">
                <div class="h-full w-full" draggable="false">
                  <img
                    class="h-full w-full object-cover object-center"
                    draggable="false"
                    loading="eager"
                    src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe926dd683e1700a6d65bd835/3/zh-Hans/default"
                  />
                </div>
              </div>
            </div>

            <div class="z-0 flex flex-1 flex-col justify-end">
              <span class="mt-2 w-full">
                <h1 class="font-black text-white" style="margin: 0.08em 0px 0.12em; visibility: visible; width: 100%; font-size: 6rem">每日推荐 3</h1>
              </span>
              <span class="text-[hsla(0,0%,100%,.7)] md:text-sm">
                <div class="">John Mayer、Akon、Shawn Mendes 等更多曲风</div>
              </span>
              <div class="mt-2 flex items-center whitespace-nowrap">
                <span class="text-white md:text-sm">50 首歌曲, <span class="text-[hsla(0,0%,100%,.7)]">大约 2 小时 30 分钟</span></span>
              </div>
            </div>
          </div>

          <div class="relative w-full">
            <div class="absolute z-[-1] h-[232px] w-full bg-[rgb(152_184_160)] bg-[linear-gradient(rgba(0,_0,_0,_0.6)_0,_#121212_100%),_var(--background-noise)]"></div>
            <div class="px-8 py-6">
              <div class="flex w-full items-center">
                <div class="mr-8 shrink-0">
                  <button class="play-button | border-0 bg-transparent" aria-label="播放“每日推荐 3”">
                    <span class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-green-500">
                      <span aria-hidden="true" class="">
                        <svg role="img" height="28" width="28" aria-hidden="true" viewBox="0 0 24 24">
                          <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <!-- tracklist -->
            <div class="px-8">
              <div class="">
                <div class="sticky z-[2] mb-4 ml-[-32px] mr-[-32px] h-9 px-8">
                  <div class="grid h-9 grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 border-0 border-b border-solid border-[hsla(0,0%,100%,.1)] px-4 text-[#b3b3b3]">
                    <div class="flex items-center justify-end">#</div>
                    <div class="flex items-center justify-start">
                      <div class="flex items-center justify-center">
                        <span class="">标题</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-start">
                      <div class="">
                        <span class="">专辑</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-end">
                      <div class="mr-8 flex items-center justify-center">
                        <svg class="fill-current" height="16" width="16" viewBox="0 0 16 16">
                          <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                          s
                          <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tracklist">
                  <div class="row group rounded hover:bg-[hsla(0,0%,100%,.1)]">
                    <div class="grid h-14 grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 px-4">
                      <div class="flex items-center justify-center">
                        <div class="relative h-4 min-h-[16px] w-4 min-w-[16px] text-[#b3b3b3]">
                          <span class="absolute right-[0.25em] top-[-4px] group-hover:hidden">1</span>
                          <button
                            class="flex h-full w-full items-center justify-center border-0 bg-transparent text-white opacity-0 group-hover:opacity-100"
                            aria-label="播放 張學友 的 我真的受傷了"
                            tabindex="-1"
                          >
                            <svg class="fill-current" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24">
                              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="flex items-center justify-self-start">
                        <img
                          class="mr-4 shrink-0 bg-[#282828] object-cover object-center"
                          aria-hidden="false"
                          draggable="false"
                          loading="eager"
                          src="https://i.scdn.co/image/ab67616d00004851876c89d772557a8705a93be9"
                          alt=""
                          width="40"
                          height="40"
                        />
                        <div class="grid">
                          <div>相愛很難 - 電影"男人四十"歌曲</div>
                          <span class="text-sm text-[#b3b3b3] group-hover:text-white">張學友</span>
                        </div>
                      </div>
                      <div class="flex items-center justify-self-start text-[#b3b3b3]">
                        <span class="group-hover:text-white"> 学友热 </span>
                      </div>

                      <div class="flex items-center justify-self-end text-[#b3b3b3]">
                        <div class="mr-8">3:28</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- <div class="grid grid-cols-6 gap-4">
      <div class="col-span-5 col-start-3 bg-purple-400 text-white">01</div>
      <div class="col-start-1 col-end-4 bg-neutral-300 text-white">02</div>
      <div class="bg-red-400col-span-2 col-end-7 text-white">03</div>
      <div class="col-start-1 col-end-7 bg-fuchsia-700 text-white">04</div>
    </div> -->
    </div>
  </div>

  <ul class="">
    <li class="flex items-center text-white"></li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

//  const router = useRouter()
const route = useRoute();

let truckList = ref();
const playlistName = route.params.playlist;
const page = 0;
// fetch(`http://127.0.0.1:5000/get_playlist_track/${playlistName}/${page}`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     if (data.code == 200) {
//       truckList.value = data.data;
//       console.log(data);
//     }
//     return Promise.reject(data);
//   })
//   .catch((errdata) => {
//     console.log(errdata);
//   });

console.log(route.params.playlist);
</script>

<style>
ul {
  height: 2000px;
}

/* .liner_gradient {
  background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%), var(--background-noise);
}

.tracklist_liner_gradient {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%), var(--background-noise);
} */
</style>
