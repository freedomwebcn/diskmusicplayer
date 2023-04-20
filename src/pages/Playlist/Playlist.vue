<template>
  <div class="playlist | h-[calc(100%-91px)]" ref="playlistRef">
    <div class="relative grid h-full w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] overflow-hidden">
      <!-- nav bar Start-->
      <div class="relative row-span-2 row-start-1 flex min-h-0 w-[calc(var(--nav-w)+9px)] flex-col bg-[#000] text-white" ref="navBarRef">
        <div class="flex h-full w-full flex-1 flex-col" style="padding-top: var(--nav-pt)">
          <div class="flex flex-shrink-0 flex-row justify-between" role="banner">
            <a draggable="false" class="relative mb-[18px] flex-1 border-0 px-6 text-white">
              <svg viewBox="0 0 1134 340" class="h-10 w-full max-w-[131px]">
                <title>Spotify</title>
                <path
                  fill="currentColor"
                  d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
                ></path>
              </svg>
            </a>
          </div>
          <ul class="list-none">
            <li class="px-2">
              <a class="flex h-10 items-center gap-4 px-4 text-[#b3b3b3] no-underline transition-[color] duration-200 ease-linear hover:text-white">
                <span class="line-clamp-1 break-all">主页</span>
              </a>
            </li>
            <li class="px-2">
              <a class="flex h-10 items-center gap-4 px-4 text-[#b3b3b3] no-underline transition-[color] duration-200 ease-linear hover:text-white">
                <span class="line-clamp-1 break-all"> 统计 </span>
              </a>
            </li>

            <li class="px-2">
              <a class="flex h-10 items-center gap-4 px-4 text-[#b3b3b3] no-underline transition-[color] duration-200 ease-linear hover:text-white">
                <span class="line-clamp-1 break-all"> 已点赞的歌曲 </span>
              </a>
            </li>
          </ul>

          <!-- scroll start -->
          <div class="relative mt-[13px] flex h-full flex-col" ref="navScrollWrapperRef" :style="{ height: `${navScrollWrapperHeight}px` }">
            <div class="flex h-full flex-1 flex-col">
              <div class="relative z-10">
                <hr class="mx-6 mt-2 h-[1px] border-none bg-[#282828]" />
                <div class="absolute bottom-[-16px] left-0 right-0 h-4 bg-[linear-gradient(180deg,_rgba(0,0,0,.7),_transparent)]"></div>
              </div>
              <div class="nav-scroll-content">
                <ul class="mt-2">
                  <li class="flex h-8 items-center px-6 text-sm text-[#b3b3b3] hover:text-white" v-for="item in playlists" @click="fetchData(item.name)">
                    <span class="line-clamp-1 break-all">{{ item.name }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="linearGradient absolute right-[-4.5px] z-[11] h-full w-[9px] cursor-col-resize opacity-0 hover:opacity-100"
          @mousedown="onMousedown"
          :style="{ opacity: isShowOverlay ? 1 : '' }"
        ></div>

        <div class="absolute bottom-0 left-0 right-1 top-0 z-10 cursor-col-resize bg-transparent" v-if="isShowOverlay"></div>
        <!-- scroll end -->
      </div>
      <!-- nav bar end-->
      <div class="scrollwrapper relative row-span-2 row-start-1 h-full overflow-y-auto" id="scrollArea">
        <!-- header start -->
        <div class="sticky top-0 z-10 h-16 w-full text-white">
          <header class="relative flex h-full w-full items-center justify-between gap-4 lg:px-8 lg:py-4">
            <div
              class="absolute bottom-0 left-0 right-0 top-0 z-[-1] overflow-hidden bg-[#121212]"
              :style="{
                opacity: scrollPositionRatio,
                backgroundColor: 'rgb(152,184,160)'
              }"
            >
              <div class="h-full bg-[rgba(0,0,0,.6)]"></div>
            </div>
            <div class="flex gap-4 whitespace-nowrap">
              <button aria-label="返回" class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-0 bg-[rgba(0,0,0,.7)] text-white">
                <svg class="fill-current" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon">
                  <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
                </svg>
              </button>
              <button class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-0 bg-[rgba(0,0,0,.7)] text-white" aria-label="前进" aria-expanded="false" disabled="">
                <svg class="fill-current" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon">
                  <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
                </svg>
              </button>
            </div>

            <div data-testid="topbar-content-wrapper" class="flex-grow">
              <div data-testid="topbar-content" class="flex items-center gap-4 transition-opacity duration-500" :style="{ opacity: rectY ? 1 : 0 }">
                <div class="">
                  <button class="play-button | border-0 bg-transparent" aria-label="播放“每日推荐 3”">
                    <span class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-green-500">
                      <span aria-hidden="true" class="">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24">
                          <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>
                <span class="" draggable="true" data-encore-id="type">Hot country</span>
              </div>
            </div>

            <button class="flex h-8 cursor-pointer items-center justify-center gap-2 rounded-[23px] border-0 bg-[rgba(0,0,0,.7)] px-0.5 py-0.5 text-white">
              <figure class="h-7 w-7" title="基督山伯爵" data-testid="user-widget-avatar" style="width: 28px; height: 28px">
                <div class="h-full w-full">
                  <img
                    class="h-full w-full rounded-full object-cover object-center"
                    aria-hidden="false"
                    draggable="false"
                    loading="eager"
                    src="https://i.scdn.co/image/ab6775700000ee85852e236a1a64a76032ff9e7f"
                    alt="基督山伯爵"
                  />
                </div>
              </figure>
              <span class="mr-[6px] max-w-[110px] truncate md:text-sm">基督山伯爵</span>
            </button>
          </header>
        </div>
        <!-- header end -->
        <div class="pb-16 text-white" v-if="truckList && truckList.length">
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
                <span class="mt-2 w-full font-sans">
                  <h1 class="font-black text-white" style="margin: 0.08em 0px 0.12em; visibility: visible; width: 100%; font-size: 6rem">电子音乐</h1>
                </span>

                <div class="flex">
                  <div class="grid grid-flow-col items-center gap-1 whitespace-nowrap">
                    <figure class="h-6 w-6" title="基督山伯爵" data-testid="user-widget-avatar">
                      <div class="h-full w-full">
                        <img
                          class="h-full w-full rounded-full object-cover object-center"
                          aria-hidden="false"
                          draggable="false"
                          loading="eager"
                          src="https://i.scdn.co/image/ab6775700000ee85852e236a1a64a76032ff9e7f"
                          alt="基督山伯爵"
                        />
                      </div>
                    </figure>
                    <span class="max-w-[110px] truncate md:text-sm">基督山伯爵</span>
                  </div>

                  <div class="flex items-center whitespace-nowrap">
                    <span class="text-white before:mx-1 before:content-['•'] md:text-sm"
                      >50 首歌曲,
                      <span class="text-[hsla(0,0%,100%,.7)]">大约 2 小时 30 分钟</span>
                    </span>
                  </div>
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
              <div class="px-8">
                <div class="">
                  <div class="sticky top-16 z-[2] mb-4 ml-[-32px] mr-[-32px] h-9 px-8" ref="titleRef" :style="rectY && titleRefStyObj">
                    <div
                      class="grid h-9 grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 border-0 border-b border-solid px-4 text-[#b3b3b3]"
                      :style="{ 'border-color': rectY ? 'transparent' : 'hsla(0,0%,100%,.1)' }"
                    >
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

                            <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- tracklist start -->
                  <div id="contentArea">
                    <div class="row group rounded hover:bg-[hsla(0,0%,100%,.1)]" v-for="(item, index) in truckList">
                      <div class="grid h-14 grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 px-4">
                        <div class="flex items-center justify-center">
                          <div class="relative h-4 min-h-[16px] w-4 min-w-[16px] text-[#b3b3b3]">
                            <span class="absolute right-[0.25em] top-[-4px] group-hover:hidden">{{ index + 1 }}</span>
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
                            :src="`http://127.0.0.1:5000/tracks_cover/${encodeURIComponent(item.cover && item.cover)}`"
                            draggable="false"
                            loading="eager"
                            alt=""
                            width="40"
                            height="40"
                          />
                          <div class="font-sans">
                            <div class="line-clamp-1 break-all">{{ item.title }}</div>
                            <span class="line-clamp-1 break-all text-sm text-[#b3b3b3]" v-for="singer in item.art">{{ singer }}</span>
                          </div>
                        </div>
                        <div class="flex items-center justify-self-start font-sans text-[#b3b3b3]">
                          <span class="line-clamp-1 break-all"> {{ item.album }} </span>
                        </div>

                        <div class="flex items-center justify-self-end text-[#b3b3b3]">
                          <div class="mr-8">{{ formatSongsTime(item.durtion) }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- tracklist  end-->
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center text-white" v-else>
          <div class="HKamyJi9H31s99erfVyG">
            <svg xmlns="http://www.w3.org/2000/svg" height="12px" width="56px" x="0px" y="0px" viewBox="0 0 1 100" xml:space="preserve" data-testid="loadingIcon">
              <circle class="BuzoTjBZd1UqCn6DmFJr" cx="-140" cy="50" r="32"></circle>
              <circle class="BuzoTjBZd1UqCn6DmFJr" cx="0" cy="50" r="32"></circle>
              <circle class="BuzoTjBZd1UqCn6DmFJr" cx="140" cy="50" r="32"></circle>
            </svg>
          </div>
        </div>

        <div class="absolute bottom-0 left-1 right-0 top-0 z-10 cursor-col-resize bg-transparent" v-if="isShowOverlay"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, onMounted, reactive, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
import { throttle, debounce } from 'lodash';
import { setLocal, getLocal } from '/src/utills/localStorage.js';

const route = useRoute();
const playlistName = route.params.name;
const playlists = ref(getLocal('playlists'));
const titleRef = ref(null);
let rectY = ref(false);
let titleRefStyObj = reactive({
  background: '#181818',
  'border-bottom': `1px solidhsla(0,0%,100%,.1)`,
  'box-shadow': `0 -1px 0 0 #181818`,
  'border-bottom': `1px solid hsla(0,0%,100%,.1)`
});
let scrollPositionRatio = ref(0);
let truckList = ref();
let page = 0;
const navBarRef = ref(null);
const playlistRef = ref(null);
const navScrollWrapperRef = ref(null);
let isShowOverlay = ref(false);
let navScrollWrapperHeight = ref(0);

console.log(route.params.name);

onMounted(() => {
  initScrollBar('.scrollwrapper');
  initNavScrollBar('.nav-scroll-content');
  resetNavScrollWrapperHeight();
});

function resetNavScrollWrapperHeight() {
  const navBarHeight = navBarRef.value.getBoundingClientRect().height;
  const navScrollWrapperTop = navScrollWrapperRef.value.offsetTop;
  navScrollWrapperHeight.value = navBarHeight - navScrollWrapperTop;
  console.log(6);
}

const debounceResetNavScrollWrapperHeight = debounce(resetNavScrollWrapperHeight, 150);

window.onresize = debounceResetNavScrollWrapperHeight;

function initScrollBar(el) {
  OverlayScrollbars(
    document.querySelector(el),
    {
      scrollbars: {
        theme: 'os-theme-custom',
        autoHide: 'leave'
      }
    },
    {
      scroll() {
        scrollPositionRatio.value = Math.max(Math.min(1 - (300 - event.target.scrollTop) / 300, 1));
        rectY.value = titleRef.value.getBoundingClientRect().y == 64;
      }
    }
  );
}
function initNavScrollBar(el) {
  OverlayScrollbars(document.querySelector(el), {
    scrollbars: {
      autoHide: 'leave',
      theme: 'os-theme-custom'
    }
  });
}

function fetchData(playlistName) {
  truckList.value && (truckList.value.length = 0);
  fetch(`http://127.0.0.1:5000/get_playlist_track/${playlistName}/${page}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.code == 200) {
        setTimeout(() => {
          truckList.value = data.data;
        }, 300);
        console.log(data);
        return;
      }
      return Promise.reject(data);
    })
    .catch((errdata) => {
      console.log(errdata);
    });
}
fetchData(playlistName);
function onMousedown() {
  document.addEventListener('mousemove', throttledChangeWidth);
  document.addEventListener('mouseup', onMouseup);
}

const throttledChangeWidth = throttle(changeWidth, 100, {
  trailing: false
});

function changeWidth(event) {
  console.log('move');
  isShowOverlay.value = true;
  const minWidth = 120;
  const maxWidth = 384;
  let newWidth = event.clientX - navBarRef.value.offsetLeft;
  newWidth = Math.min(Math.max(newWidth, minWidth), maxWidth);
  navBarRef.value.style.width = newWidth + 'px';
}

function onMouseup() {
  isShowOverlay.value = false;
  document.removeEventListener('mousemove', throttledChangeWidth);
  document.removeEventListener('mouseup', onMouseup);
  console.log('抬起了');
}
function formatSongsTime(duration) {
  let minute = Math.floor(duration / 60);
  let second = Math.floor(duration % 60)
    .toString()
    .padStart(2, '0');
  return `${minute}:${second}`;
}
// fetchData(playlistName);
</script>

<style>
.playlist {
  --nav-w: 283px;
  --nav-pt: 24px;
}

.nav-scroll-content .os-scrollbar-vertical {
  z-index: 10;
}

.linearGradient {
  background: linear-gradient(hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0.3)) no-repeat 50%/1px 100%;
}

/* .liner_gradient {
  background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%), var(--background-noise);
}

.tracklist_liner_gradient {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%), var(--background-noise);
} */

@keyframes loading-icon {
  0% {
    -webkit-animation-timing-function: cubic-bezier(1, 0, 0.7, 1);
    animation-timing-function: cubic-bezier(1, 0, 0.7, 1);
    opacity: 0.5;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  40% {
    -webkit-animation-timing-function: cubic-bezier(0.3, 0, 0, 1);
    animation-timing-function: cubic-bezier(0.3, 0, 0, 1);
    opacity: 0.75;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  72.5% {
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    opacity: 0.5;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  to {
    opacity: 0.5;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.BuzoTjBZd1UqCn6DmFJr {
  fill: #fff;
  -webkit-animation: loading-icon 1.32s linear infinite;
  animation: loading-icon 1.32s linear infinite;
  -webkit-transform-origin: center;
  transform-origin: center;
}

.BuzoTjBZd1UqCn6DmFJr:nth-of-type(2) {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

.BuzoTjBZd1UqCn6DmFJr:nth-of-type(3) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
</style>
