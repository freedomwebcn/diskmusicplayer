<template>
  <div class="h-[90px] w-full">
    <footer class="h-full min-w-[620px] border-0 border-t border-solid border-[#282828] bg-[#181818]">
      <div class="flex h-full items-center justify-between px-4">
        <!-- 左侧歌曲信息模块 -->
        <div class="w-[30%]">
          <div class="relative flex flex-row items-center justify-start">
            <div class="relative h-14 w-14 flex-shrink-0 bg-[#282828] shadow-[0_0_10px_rgba(0,0,0,0.3)]">
              <div class="absolute bottom-[35%] left-[35%] right-[35%] top-[35%]">
                <svg height="24" width="24" viewBox="0 0 24 24" fill="#fff" style="width: 100%; height: 100%">
                  <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path>
                </svg>
              </div>
              <img
                class="absolute h-full w-full"
                draggable="false"
                loading="eager"
                :src="`http://127.0.0.1:5000/tracks_cover/${encodeURIComponent(store.currentPlayTrackInfo.cover)}`"
                v-if="store.currentPlayTrackInfo.cover"
              />
            </div>
            <div class="mx-3.5 grid grid-cols-[auto_1fr] grid-rows-[auto_auto] items-center gap-x-2">
              <div class="col-span-2 w-full justify-self-start text-[#fff]">
                <div class="relative mx-[-6px] overflow-hidden mask-image">
                  <div class="overflow-hidden">
                    <div class="flex w-fit whitespace-nowrap px-1.5 pr-3">
                      <div class="w-full text-[#fff] min-[768px]:text-sm">
                        <span> {{ store.currentPlayTrackInfo.title }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-span-2 w-full text-[rgb(179_179_179)]">
                <div class="relative mx-[-6px] overflow-hidden mask-image">
                  <div class="overflow-hidden">
                    <div class="flex w-fit whitespace-nowrap px-1.5 pr-3">
                      <div class="w-full text-xs">
                        <span v-for="art in store.currentPlayTrackInfo.art" :key="art">
                          {{ art }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 音乐控制模块 -->
        <div class="w-2/5 max-w-[722px]">
          <div class="flex flex-col items-center justify-center" aria-label="播放器控制区域">
            <div class="mb-2.5 flex w-full flex-row flex-nowrap gap-4">
              <div class="flex flex-1 justify-end gap-2">
                <button
                  class="shuffle_play | flex h-8 w-8 items-center justify-center border-0 bg-transparent text-[hsla(0,0%,100%,.7)]"
                  aria-label="开启随机播放"
                  :style="colorStyle"
                  :disabled="!currentPlayTruckListHasData"
                  @click="shufflePlayStatus = !shufflePlayStatus"
                  :class="{ shuffle_play_active: shufflePlayStatus }"
                >
                  <svg class="fill-[currentcolor]" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                    <path
                      d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"
                    ></path>
                    <path
                      d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
                    ></path>
                  </svg>
                </button>
                <button
                  class="flex h-8 w-8 items-center justify-center border-0 bg-transparent text-[hsla(0,0%,100%,.7)] hover:text-white"
                  aria-label="上一首"
                  :style="colorStyle"
                  @click="playNextOrPrev(-1)"
                  :disabled="!currentPlayTruckListHasData"
                >
                  <svg class="fill-[currentcolor]" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
                  </svg>
                </button>
              </div>
              <!-- 播放与暂停按钮 -->
              <button
                class="flex h-8 w-8 items-center justify-center rounded-full border-0 transition-all duration-[33ms] ease-[cubic-bezier(.3,0,0,1)] hover:scale-[1.06]"
                :disabled="!currentPlayTruckListHasData"
                @click="togglePlay"
                :style="{ backgroundColor: !currentPlayTruckListHasData ? 'hsla(0,0%,100%,.3)' : '#fff' }"
              >
                <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" v-if="!playing && currentPlayTruckListHasData">
                  <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                </svg>
                <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" v-else>
                  <path
                    d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
                  ></path>
                </svg>
              </button>

              <div class="flex flex-1 gap-2">
                <button
                  class="flex h-8 w-8 items-center justify-center border-0 bg-transparent text-[hsla(0,0%,100%,.7)] hover:text-white"
                  aria-label="下一首"
                  :style="colorStyle"
                  @click="playNextOrPrev(1)"
                  :disabled="!currentPlayTruckListHasData"
                >
                  <svg class="fill-[currentcolor]" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                    <path
                      d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
                    ></path>
                  </svg>
                </button>
                <button
                  class="flex h-8 w-8 items-center justify-center border-0 bg-transparent text-[hsla(0,0%,100%,.7)] hover:text-white"
                  aria-label="开启循环播放"
                  :style="colorStyle"
                  :disabled="!currentPlayTruckListHasData"
                  @click="handleLoopEvent"
                  :class="{ 'on-loop': loopStatus }"
                >
                  <svg v-if="!loopStatus" class="fill-[currentcolor]" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                    <path
                      d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
                    ></path>
                  </svg>
                  <svg v-else class="fill-[currentcolor]" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon">
                    <path
                      d="M0 4.75A3.75 3.75 0 0 1 3.75 1h.75v1.5h-.75A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5zM12.25 2.5h-.75V1h.75A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25z"
                    ></path>
                    <path d="M9.12 8V1H7.787c-.128.72-.76 1.293-1.787 1.313V3.36h1.57V8h1.55z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- 进度条与时间 -->
            <div class="flex w-full flex-row items-center justify-between gap-2">
              <div class="min-w-[40px] text-right text-xs text-[#a7a7a7]">
                {{ currentTime }}
              </div>

              <div class="progress-bar-wrapper | group relative flex h-3 w-full items-center" @mousedown="startProgressSlide" ref="progressBarWrapperRef">
                <div class="progress-bar | relative h-1 w-full rounded-sm bg-[hsla(0,0%,100%,.3)]">
                  <div class="h-full w-full overflow-hidden rounded-sm">
                    <div
                      class="fill | h-full w-full rounded-sm bg-white group-hover:bg-green-500"
                      :style="{
                        transform: `translateX(calc(-100% + ${progressBarTransform}))`,
                        backgroundColor: `${showBgColor ? 'rgb(34, 197, 94)' : ''}`
                      }"
                    ></div>
                  </div>
                  <div
                    class="dot | absolute top-1/2 ml-[-6px] h-3 w-3 translate-y-[-50%] rounded-full bg-transparent group-hover:bg-white"
                    :style="{
                      left: progressBarTransform,
                      backgroundColor: `${showBgColor ? 'white' : ''}`,
                      display: !currentPlayTruckListHasData ? 'none' : 'block'
                    }"
                  ></div>
                </div>
              </div>

              <div class="min-w-[40px] text-left text-xs text-[#a7a7a7]">
                {{ duration }}
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-[30%] justify-end">
          <div class="flex grow justify-end">
            <!-- lrc btn -->
            <button
              class="relative flex cursor-pointer items-center justify-center border-0 bg-transparent p-2 text-[#a7a7a7]"
              data-testid="lyrics-button"
              data-active="false"
              aria-label="歌词"
              aria-expanded="false"
              @click="goBackOrToLrcRoute"
            >
              <span aria-hidden="true" class="flex">
                <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="fill-current">
                  <path
                    d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"
                  ></path>
                </svg>
              </span>
            </button>
            <!-- 播放队列 -->
            <div>
              <button
                class="relative flex cursor-pointer items-center justify-center border-0 bg-transparent p-2 text-[#a7a7a7]"
                data-testid="control-button-queue"
                data-active="false"
                aria-label="队列"
                data-encore-id="buttonTertiary"
                aria-expanded="false"
              >
                <span aria-hidden="true" class="fill-current">
                  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq">
                    <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <!-- 调节音量 -->
            <div class="relative flex flex-[0_1_125px] items-center">
              <!-- 图标 -->
              <button
                class="flex h-8 w-8 min-w-[32px] items-center justify-center border-0 bg-transparent text-[hsla(0,0%,100%,.7)]"
                aria-label="静音"
                aria-describedby="volume-icon"
                data-testid="volume-bar-toggle-mute-button"
                aria-expanded="false"
              >
                <svg role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volume low" id="volume-icon" viewBox="0 0 16 16" data-encore-id="icon" class="fill-current">
                  <path
                    d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
                  ></path>
                </svg>
              </button>
              <!-- 调节区域 -->
              <div class="w-full">
                <div class="relative h-3 w-full">
                  <div class="h-full w-full" data-testid="progress-bar" style="--progress-bar-transform: 29.03225806451613%">
                    <div
                      class="group absolute top-2/4 h-1 w-full translate-y-[-50%] rounded-sm bg-[hsla(0,0%,100%,.3)]"
                      data-testid="progress-bar-background"
                      @mousedown="startVolumeBarSlide"
                      ref="volumeSliderRef"
                    >
                      <div class="h-full w-full overflow-hidden rounded-full">
                        <div
                          class="h-full w-full rounded-sm bg-white group-hover:bg-green-500"
                          :style="{ transform: `translateX(calc(-100% + ${volumeBarTransform}))`, backgroundColor: `${slideVolumeBarStatus ? 'rgb(34, 197, 94)' : ''}` }"
                        ></div>
                      </div>
                      <div
                        class="absolute top-2/4 ml-[-6px] h-3 w-3 translate-y-[-50%] rounded-full bg-transparent shadow-[0_2px_4px_0_rgba(0,0,0,.5)] group-hover:bg-white"
                        :style="{ left: volumeBarTransform, backgroundColor: slideVolumeBarStatus ? 'white' : '' }"
                      ></div>
                    </div>
                    <div style="width: 100%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { bus } from '/src/utills/eventbus.js';
import { store } from '/src/store/store.js';

let route = useRoute();
let router = useRouter();
let audio = null;
let progressBarTransform = ref('0%');
let playing = ref(false);
let duration = ref('-:--');
let currentTime = ref('-:--');
let progressBarWrapperRef = ref(null);
let showBgColor = ref(false);
let shufflePlayStatus = ref(false); //随机播放状态
// 保存原始播放列表
let originalPlayList = [];

let volume = 0.15;
let volumeSliderRef = ref(null);
let volumeBarTransform = ref(`${volume * 100}%`);

const { log } = console;

onMounted(() => bus.on('onBusEventOfPlayTrack', onBusEventOfPlayTrack));
onBeforeUnmount(() => bus.off('onBusEventOfPlayTrack'));

let baseUrl = `http://127.0.0.1:5000/audio/`;

const colorStyle = computed(() => {
  return {
    color: store.currentPlayTrackList.length <= 0 ? 'hsla(0,0%,100%,.3)' : ''
  };
});

const currentPlayTruckListHasData = computed(() => store.currentPlayTrackList.length > 0);

function onBusEventOfPlayTrack() {
  playCurrentTrack(store.currentPlayTrackList[store.currentPlayId]); //在随机播放列表前播放
  shufflePlayStatus.value && handleShufflePlay();
}

function initAudio(src) {
  log(src);
  audio ? log('音频对象已存在，只需要更新音频地址') : log('正在初始化音频对象');
  if (!audio) {
    audio = new Audio(src);
    audio.addEventListener('play', play);
    audio.addEventListener('pause', paused);
    audio.addEventListener('timeupdate', timeupdate);
    audio.addEventListener('loadedmetadata', loadedmetadata);
    audio.addEventListener('canplay', oncanplay);
    audio.addEventListener('ended', playended);
    audio.addEventListener('error', errorHandler);
    audio.volume = Math.pow(volume, 2);
  }
  audio.src = src;
}

document.addEventListener('keydown', function (event) {
  if (event.target.nodeName == 'TEXTAREA' || event.target.nodeName == 'INPUT') {
    return;
  }
  if (event.code === 'Space') {
    console.log('空格键被按下了');
    event.preventDefault();
    audio && togglePlay();
  }
});

function oncanplay() {
  log('可以播放了');
  audio.play();
}

function timeupdate() {
  store.setCurrentTime(audio.currentTime);
  // console.log(audio.currentTime);
}

// 播放结束触发 (开启循环当前音乐后 不会触发这个事件)
function playended() {
  log('播放结束，正在准备播放下一首');
  store.setPlayendedCurrentPlayId(); //设置播放Id
  setTimeout(() => {
    playCurrentTrack(store.currentPlayTrackList[store.currentPlayId]);
  }, 100);
}

// 切换播放状态
function togglePlay() {
  audio.paused ? audio.play() : audio.pause();
}

let isStartAnimationFrame = ref(false);

// 处理播放事件
function play() {
  isStartAnimationFrame.value = playing.value = true;
  log('play');
  store.setPlayStatus(true);
  requestAnimationFrame(updatePlayProgress);
}

//处理暂停事件
function paused() {
  log('paused');
  isStartAnimationFrame.value = playing.value = false;
  store.setPlayStatus(false);
}

function playNextOrPrev(num) {
  //-1 上一首 ，1 下一首
  store.setPlayNextOrPrevCurrentPlayId(num);
  playCurrentTrack(store.currentPlayTrackList[store.currentPlayId]);
}

let loopStatus = ref(false);
//处理循环音乐事件
const handleLoopEvent = () => (loopStatus.value = audio.loop = !audio.loop); //audio.loop 返回布尔值

// 监听随机播放状态
watch(shufflePlayStatus, () => handleShufflePlay());

// 处理随机播放事件
function handleShufflePlay() {
  if (shufflePlayStatus.value) {
    originalPlayList = store.currentPlayTrackList.slice(); //复制原始播放列表
    shuffleArray(store.currentPlayTrackList);
  } else {
    // 在关闭随机播放时，找到当前播放音乐在原始列表中的位置
    const index = originalPlayList.findIndex((item) => item.id == store.currentPlayTrackInfo.id);
    log(index);
    store.setCurrentPlayId({ id: index }); //保存当前播放音乐在原始列表中的位置
    // 恢复列表原始顺序
    store.setCurrentPlayTrackList(originalPlayList);
    originalPlayList = [];
  }
}

// 打乱播放列表
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 播放当前音乐
function playCurrentTrack(truckInfo) {
  log(truckInfo);
  store.setcurrentPlayTrackInfo(truckInfo); //保存当前播放曲目详情
  const src = baseUrl + `${truckInfo.playlistname}/${truckInfo.file}`;
  initAudio(src);
}

//音频发生错误时
function errorHandler() {
  audio.pause();
  log('音频出错，请刷新重试！');
}

// 更新播放进度
function updatePlayProgress() {
  // log('playing...');
  const progressPercentage = audio.currentTime / audio.duration;
  progressBarTransform.value = `${progressPercentage * 100}%`;
  updateCurrentTime(audio.currentTime);
  isStartAnimationFrame.value && requestAnimationFrame(updatePlayProgress);
}

// 音频元数据下载完毕后 更新时间
function loadedmetadata() {
  duration.value = formatSongsTime(audio.duration);
}

//更新音乐时间
function updateCurrentTime(t) {
  currentTime.value = formatSongsTime(t);
}

// 开始调节进度条
function startProgressSlide(event) {
  // 播放列表没有数据 禁止点击拖动进度条
  if (!currentPlayTruckListHasData.value) return;
  slideProgress(event);
  document.addEventListener('mousemove', slideProgress);
  document.addEventListener('mouseup', stopProgressSlide);
}

function getPosition(event, element) {
  const rect = element.getBoundingClientRect();
  return event.clientX - rect.left;
}

function getPercentage(event, element) {
  const position = getPosition(event, element);
  return Math.max(0, Math.min(position / element.offsetWidth, 1));
}

// 移动进度条
function slideProgress(event) {
  showBgColor.value = !(isStartAnimationFrame.value = false);
  const percentage = getPercentage(event, progressBarWrapperRef.value);
  progressBarTransform.value = `${percentage * 100}%`;
  const t = percentage * audio.duration;
  updateCurrentTime(t); //调节进度条期间实时更新当前显示时间
}

// 停止调节进度条
function stopProgressSlide(event) {
  showBgColor.value = !(isStartAnimationFrame.value = true);
  const percentage = getPercentage(event, progressBarWrapperRef.value);
  store.seScrollLRCstatus(true);
  audio.currentTime = audio.duration * percentage; //在停止调节进度条后更新当前播放进度 防止在调节进度条期间音乐不停地更新播放
  requestAnimationFrame(updatePlayProgress);
  document.removeEventListener('mousemove', slideProgress);
  document.removeEventListener('mouseup', stopProgressSlide);
}

let slideVolumeBarStatus = ref(false);
// 音量调节
function startVolumeBarSlide(event) {
  console.log('vol start');
  slideVolume(event);
  document.addEventListener('mousemove', slideVolume);
  document.addEventListener('mouseup', stopVolumeSlide);
}

// 调节音量 (音量值：为 0 到 1 的双精度值。0 为静音，1 为音量最大时的值。)
function slideVolume(event) {
  slideVolumeBarStatus.value = true;
  const percentage = getPercentage(event, volumeSliderRef.value);
  volumeBarTransform.value = `${percentage * 100}%`;
  setVolume(percentage);
}
// 停止调节音量
function stopVolumeSlide() {
  slideVolumeBarStatus.value = false;
  document.removeEventListener('mousemove', slideVolume);
  document.removeEventListener('mouseup', stopVolumeSlide);
}
// 设置音量
function setVolume(percentage) {
  volume = Math.pow(percentage, 2);
  audio && (audio.volume = volume);
  // setVolumeSvg(volume);
}

function goBackOrToLrcRoute() {
  const targetRoutePath = '/lrc'; // 目标路由路径
  if (route.path === targetRoutePath) {
    // 当前路由为目标路由，执行页面返回操作
    router.go(-1);
  } else {
    // 当前路由不是目标路由，跳转到目标路由
    router.push(targetRoutePath);
  }
}

// 格式化时间
function formatSongsTime(duration) {
  let minute = Math.floor(duration / 60);
  let second = Math.floor(duration % 60)
    .toString()
    .padStart(2, '0');
  return `${minute}:${second}`;
}
</script>

<style scoped>
.shuffle_play:hover {
  color: #fff;
}

.shuffle_play_active,
.on-loop {
  position: relative;
  color: #1db954;
}
.shuffle_play_active:hover,
.on-loop:hover {
  color: #1ed760;
}
.shuffle_play_active::after,
.on-loop::after {
  background-color: currentcolor;
  border-radius: 50%;
  bottom: 0;
  content: '';
  display: block;
  height: 4px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 4px;
}
</style>
