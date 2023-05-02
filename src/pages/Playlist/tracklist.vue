<template>
  <div class="wrapper mt-[-64px]">
    <RecycleScroller class="scroller" :items="trackListData" :item-size="56" key-field="id">
      <template #before>
        <div class="relative flex h-[30vh] max-h-[400px] min-h-[340px] bg-orange-500 px-8 pb-6">
          <div class="absolute left-0 top-0 h-full w-full" :style="{ background: `rgb(${store.coverMainColor})` }"></div>
          <div class="absolute left-0 top-0 h-full w-full bg-[linear-gradient(transparent_0,_rgba(0,_0,_0,_0.5)_100%),var(--background-noise)]"></div>
          <div class="mr-6 flex h-[192px] w-[192px] min-w-[192px] self-end xl:h-[232px] xl:w-[232px] xl:min-w-[232px]">
            <div class="relative flex h-[inherit]">
              <div class="h-full w-full" draggable="false">
                <img v-show="showCover" class="h-full w-full object-cover object-center" draggable="false" loading="eager" :src="store.currentPlaylistInfo.cover" @load="coverLoaded" />
              </div>
            </div>
          </div>

          <div class="z-0 flex flex-1 flex-col justify-end">
            <span class="mt-2 w-full font-sans">
              <h1 class="font-black text-white" style="margin: 0.08em 0px 0.12em; visibility: visible; width: 100%; font-size: 6rem">
                {{ store.currentPlaylistInfo.name }}
              </h1>
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
                <span class="max-w-[110px] truncate text-white md:text-sm">基督山伯爵</span>
              </div>

              <div class="flex items-center whitespace-nowrap">
                <span class="text-white before:mx-1 before:content-['•'] md:text-sm">
                  {{ store.currentPlaylistInfo.track_count }} 首歌曲,
                  <span class="text-[hsla(0,0%,100%,.7)]">大约 2 小时 30 分钟</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="relative w-full">
          <div
            class="absolute z-[-1] h-[232px] w-full bg-[linear-gradient(rgba(0,_0,_0,_0.6)_0,_#121212_100%),_var(--background-noise)]"
            :style="{ backgroundColor: `rgb(${store.coverMainColor})` }"
          ></div>
          <div ref="playBtnRef" class="px-8 py-6">
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
        </div>
        <div class="z-[2] mb-4 px-8" :style="storeComputedOfIsScrolledToPosition && style">
          <div ref="titleRef" class="ml-[-32px] mr-[-32px] h-9 px-8">
            <div
              class="grid h-9 grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 border-0 border-b border-solid px-4 text-[#b3b3b3]"
              :style="{
                'border-color': storeComputedOfIsScrolledToPosition ? 'transparent' : 'hsla(0,0%,100%,.1)'
              }"
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
        </div>
        <div class="h-14" v-if="storeComputedOfIsScrolledToPosition"></div>
      </template>

      <template #default="{ item }">
        <div class="px-8">
          <div class="row group rounded" @dblclick="play(item)">
            <div class="grid h-14 grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 px-4">
              <div class="flex items-center justify-center">
                <div class="relative h-4 min-h-[16px] w-4 min-w-[16px] text-[#b3b3b3]">
                  <!-- 序号 -->
                  <span
                    v-if="store.currentPlayTrackInfo.file != item.file || !store.playStatus"
                    class="absolute right-[0.25em] top-[-4px] group-hover:hidden"
                    :style="{
                      color: store.currentPlayTrackInfo.file == item.file ? '#1ed760' : ''
                    }"
                  >
                    {{ item.id }}</span
                  >

                  <!-- 曲目列表的播放按钮 -->
                  <button
                    v-if="store.currentPlayTrackInfo.file != item.file || !store.playStatus"
                    class="flex h-full w-full items-center justify-center border-0 bg-transparent text-white opacity-0 group-hover:opacity-100"
                    tabindex="-1"
                  >
                    <svg class="fill-current" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24">
                      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
                  </button>

                  <!--  -->
                  <div class="relative h-4 w-4">
                    <!-- 播放中的图标 -->
                    <img v-if="store.currentPlayTrackInfo.file == item.file && store.playStatus" src="./equaliser-animated-green.f5eb96f2.gif" alt="" class="group-hover:hidden" />
                    <!-- 暂停 -->
                    <button v-if="store.currentPlayTrackInfo.file == item.file && store.playStatus" class="border-0 bg-transparent text-white opacity-0 group-hover:opacity-100" aria-label="暂停">
                      <svg class="h-4 w-4 fill-current" role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon">
                        <path
                          d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-self-start">
                <img
                  v-if="item.cover"
                  class="mr-4 shrink-0 bg-[#282828] object-cover object-center"
                  :src="`http://127.0.0.1:5000/tracks_cover/${encodeURIComponent(item.cover && item.cover)}`"
                  draggable="false"
                  loading="lazy"
                  alt=""
                  width="40"
                  height="40"
                />
                <div class="font-sans">
                  <!--  -->
                  <div
                    class="line-clamp-1 break-all text-white"
                    :style="{
                      color: store.currentPlayTrackInfo.file == item.file ? '#1ed760' : ''
                    }"
                  >
                    {{ item.title }}
                  </div>
                  <span v-for="singer in item.art" class="line-clamp-1 break-all text-sm text-[#b3b3b3]">{{ singer }}</span>
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
      </template>
      <template #after>
        <div class="h-4"></div>
      </template>
    </RecycleScroller>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { initMainViewScrollBar } from './initScrollbar.js';
import { store, storeComputedOfIsScrolledToPosition } from './store.js';
import { bus } from '/src/utills/eventbus.js';
import { reqTrackListData } from './api.js';

// const { log } = console;

let route = useRoute();

initMainViewScrollBar('.wrapper', '.scroller'); //初始化滚动条

let trackListData = [];
let showCover = ref(false);

watch(
  () => route.params.name,
  () => {
    const { data } = reqTrackListData(route.params.name);
    console.log(data);
    trackListData = data;
    showCover.value = false;
    store.setCurrentPlaylistInfo(route.params);
    console.log('watch');
  },
  { immediate: true }
);

function play(trackItem) {
  store.setCurrentPlayPlaylistName(trackItem.playlistname);
  store.setCurrentPlayTrackList([...trackListData.value]);
  store.setCurrentPlayId({ id: trackItem.id - 1 });
  // 触发PlayingBar组件中注册的事件
  bus.emit('onBusEventOfPlayTrack');
}

const style = computed(() => {
  return {
    background: '#181818',
    'box-shadow': `0 -1px 0 0 #181818`,
    'border-bottom': `1px solid hsla(0,0%,100%,.1)`,
    position: 'fixed',
    top: '64px',
    width: store.scrollWrapperWidth
  };
});

const coverLoaded = () => (showCover.value = true);

function formatSongsTime(duration) {
  let minute = Math.floor(duration / 60);
  let second = Math.floor(duration % 60)
    .toString()
    .padStart(2, '0');
  return `${minute}:${second}`;
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
.scroller {
  width: 100%;
  height: 100%;
}

.wrapper ::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.wrapper {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hover .row {
  background: hsla(0, 0%, 100%, 0.1);
}
</style>
