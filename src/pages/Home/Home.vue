<template>
  <div class="h-full">
    <div class="relative grid h-full w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto]">
      <!-- header start -->
      <div class="pointer-events-none z-[2] col-start-2 col-end-3 row-start-2 row-end-3 h-16 text-white">
        <header class="relative flex h-full w-full items-center justify-between gap-4 lg:px-8 lg:py-4">
          <div
            class="absolute bottom-0 left-0 right-0 top-0 z-[-1] overflow-hidden bg-[#121212]"
            :style="{
              opacity: scrollPositionRatio,
              backgroundColor: `rgb(${store.coverMainColor})`
            }"
            v-if="route.path != '/lrc'"
          >
            <div class="h-full bg-[rgba(0,0,0,.6)]"></div>
          </div>
          <div class="pointer-events-auto flex gap-4 whitespace-nowrap">
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

          <div data-testid="topbar-content-wrapper" class="pointer-events-auto flex-grow">
            <Transition name="fade">
              <div data-testid="topbar-content" class="flex items-center gap-4" v-if="computedOfIsScrolledToPosition && route.path != '/lrc'">
                <div>
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
                <span class="" draggable="true" data-encore-id="type"> {{ store.currentPlaylistInfo.name }}</span>
              </div>
            </Transition>
          </div>

          <button class="pointer-events-auto flex h-8 cursor-pointer items-center justify-center gap-2 rounded-[23px] border-0 bg-[rgba(0,0,0,.7)] px-0.5 py-0.5 text-white">
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

      <!-- nav bar Start-->
      <div ref="navBarRef" class="relative col-start-1 col-end-2 row-start-2 row-end-3 flex min-h-0 w-[calc(var(--nav-w)+9px)] flex-col bg-[#000] text-white">
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
                <span class="line-clamp-1 break-all"> 搜索 </span>
              </a>
            </li>

            <li class="px-2">
              <a class="flex h-10 items-center gap-4 px-4 text-[#b3b3b3] no-underline transition-[color] duration-200 ease-linear hover:text-white">
                <span class="line-clamp-1 break-all"> 已点赞的歌曲 </span>
              </a>
            </li>
          </ul>

          <!-- scroll start -->
          <div ref="navScrollWrapperRef" class="relative mt-[13px] flex h-full flex-col" :style="{ height: `${navScrollWrapperHeight}px` }">
            <div class="flex h-full flex-1 flex-col">
              <div class="relative z-10">
                <hr class="mx-6 mt-2 h-[1px] border-none bg-[#282828]" />
                <div class="absolute bottom-[-16px] left-0 right-0 h-4 bg-[linear-gradient(180deg,_rgba(0,0,0,.7),_transparent)]"></div>
              </div>
              <div class="nav-scroll-content">
                <ul class="mt-2" @click="reqPlaylistData">
                  <li
                    v-for="(item, index) in playlists"
                    :key="index"
                    class="flex h-8 items-center px-6 text-sm text-[#b3b3b3] hover:text-white"
                    :style="{
                      color: store.currentPlaylistInfo.name == item.name ? '#fff' : ''
                    }"
                  >
                    <span class="line-clamp-1 flex-1 break-all">{{ item.name }}</span>

                    <div v-if="store.currentPlayPlaylistName == item.name" class="ml-2 h-3 w-3 shrink-0">
                      <button class="flex h-full w-full items-center border-0 bg-transparent text-green-500">
                        <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="fill-current">
                          <path
                            d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
                          ></path>
                          <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="linearGradient absolute right-[-4.5px] z-[888] h-full w-[9px] cursor-col-resize opacity-0 hover:opacity-100"
          :style="{ opacity: isShowOverlay ? 1 : '' }"
          @mousedown="onMousedown"
        ></div>

        <div v-if="isShowOverlay" class="absolute bottom-0 left-0 right-1 top-0 z-20 cursor-col-resize bg-transparent"></div>
        <!-- scroll end -->
      </div>
      <!-- nav bar end-->

      <!-- main View start-->
      <div ref="scrollwrapperRef" class="col-start-2 col-end-3 row-start-2 row-end-3 h-full w-full overflow-hidden">
        <!-- <router-view></router-view> -->

        <router-view v-slot="{ Component }">
          <KeepAlive :max="3">
            <component :is="Component" :key="$route.fullPath" />
          </KeepAlive>
        </router-view>
        <!-- <div class="absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center text-white" v-show="!truckList.length">
          <div class="HKamyJi9H31s99erfVyG">
            <svg xmlns="http://www.w3.org/2000/svg" height="12px" width="56px" x="0px" y="0px" viewBox="0 0 1 100" xml:space="preserve" data-testid="loadingIcon">
              <circle class="BuzoTjBZd1UqCn6DmFJr" cx="-140" cy="50" r="32"></circle>
              <circle class="BuzoTjBZd1UqCn6DmFJr" cx="0" cy="50" r="32"></circle>
              <circle class="BuzoTjBZd1UqCn6DmFJr" cx="140" cy="50" r="32"></circle>
            </svg>
          </div>
        </div> -->
        <div v-if="isShowOverlay" class="absolute bottom-0 left-1 right-0 top-0 z-20 cursor-col-resize bg-transparent"></div>
      </div>
      <!-- main View  end-->

      <!-- now play start -->
      <div class="col-start-1 col-end-3 row-start-3 row-end-4 h-[90px]">
        <NowPlay></NowPlay>
      </div>
      <!-- now play  end-->
    </div>
  </div>
</template>

<script setup>
import { watch, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import { throttle, debounce } from 'lodash';
import { getLocal } from '/src/utills/localStorage.js';
import { initScrollBar } from './initScrollbar.js';
import { store,computedOfIsScrolledToPosition } from '/src/store/store.js';

import NowPlay from '/src/components/NowPlay.vue';

const router = useRouter();
const route = useRoute();

const playlists = getLocal('playlists');
let scrollPositionRatio = ref(0);
const navBarRef = ref(null);
const navScrollWrapperRef = ref(null);
let isShowOverlay = ref(false);
let navScrollWrapperHeight = ref(0);
let scrollwrapperRef = ref(null);

initScrollBar('.nav-scroll-content'); //初始化nav滚动条

const reqPlaylistData = (e) => router.push(`/playlist/${encodeURIComponent(e.target.innerText)}`);

onMounted(() => {
  store.setScrollWrapperWidth(scrollwrapperRef.value.offsetWidth);
  resetNavScrollWrapperHeight();
});

watch(
  () => store.scrollTop,
  () => {
    scrollPositionRatio.value = Math.max(Math.min(1 - (300 - store.scrollTop) / 300, 1));
  }
);

function resetNavScrollWrapperHeight() {
  const navBarHeight = navBarRef.value.getBoundingClientRect().height;
  const navScrollWrapperTop = navScrollWrapperRef.value.offsetTop;
  navScrollWrapperHeight.value = navBarHeight - navScrollWrapperTop;
}
const debounceResetNavScrollWrapperHeightFn = debounce(resetNavScrollWrapperHeight, 150);
window.onresize = debounceResetNavScrollWrapperHeightFn;

function onMousedown() {
  document.addEventListener('mousemove', throttledChangeWidth);
  document.addEventListener('mouseup', onMouseup);
}

const throttledChangeWidth = throttle(changeWidth, 100, {
  trailing: false
});

const navBarWidth = ref('283px');
function changeWidth(event) {
  console.log('move');
  isShowOverlay.value = true;
  const minWidth = 120;
  const maxWidth = 384;
  let newWidth = event.clientX - navBarRef.value.offsetLeft;
  newWidth = Math.min(Math.max(newWidth, minWidth), maxWidth);
  navBarWidth.value = newWidth + 'px';
  navBarRef.value.style.width = newWidth + 'px';
  store.setScrollWrapperWidth(scrollwrapperRef.value.offsetWidth);
}

function onMouseup() {
  isShowOverlay.value = false;
  document.removeEventListener('mousemove', throttledChangeWidth);
  document.removeEventListener('mouseup', onMouseup);
  console.log('抬起了');
}
</script>

<style scoped>
/* .home {
  display: grid;
  grid-template-areas:
    '.               .'
    'nav-bar         main-view'
    'now-playing-bar now-playing-bar';
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  min-height: 100%;
  position: relative;
  width: 100%;
} */
/* 
.header {
  grid-area: main-view;
  z-index: 10;
}
.nav-bar {
  grid-area: nav-bar;
}
.Root__main-view {

  overflow: hidden;
  grid-area: main-view/main-view;
}
.Root__now-playing-bar {
  grid-area: now-playing-bar;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.nav-scroll-content .scroller {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

:global(.os-scrollbar-vertical) {
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
    animation-timing-function: cubic-bezier(1, 0, 0.7, 1);
    opacity: 0.5;
    transform: scale(1);
  }

  40% {
    animation-timing-function: cubic-bezier(0.3, 0, 0, 1);
    opacity: 0.75;
    transform: scale(1.3);
  }

  72.5% {
    animation-timing-function: linear;
    opacity: 0.5;
    transform: scale(1);
  }

  to {
    opacity: 0.5;
    transform: scale(1);
  }
}

.BuzoTjBZd1UqCn6DmFJr {
  fill: #fff;
  animation: loading-icon 1.32s linear infinite;
  transform-origin: center;
}

.BuzoTjBZd1UqCn6DmFJr:nth-of-type(2) {
  animation-delay: 0.1s;
}

.BuzoTjBZd1UqCn6DmFJr:nth-of-type(3) {
  animation-delay: 0.2s;
}

.hover .row {
  background: hsla(0, 0%, 100%, 0.1);
}
</style>
