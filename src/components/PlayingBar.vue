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
              <img class="absolute h-full w-full" draggable="false" loading="eager" src="https://i.scdn.co/image/ab67616d00004851b586e6253ee8b6db4dafc0ac" />
            </div>
            <div class="mx-3.5 grid grid-cols-[auto_1fr] grid-rows-[auto_auto] items-center gap-x-2">
              <div class="col-span-2 w-full justify-self-start text-[#fff]">
                <div class="mask-image | relative mx-[-6px] overflow-hidden">
                  <div class="overflow-hidden">
                    <div class="flex w-fit whitespace-nowrap px-1.5 pr-3">
                      <div class="w-full text-[#fff] min-[768px]:text-sm">
                        <span> track name</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-span-2 w-full text-[rgb(179_179_179)]">
                <div class="mask-image | relative mx-[-6px] overflow-hidden">
                  <div class="overflow-hidden">
                    <div class="flex w-fit whitespace-nowrap px-1.5 pr-3">
                      <div class="w-full text-xs">
                        <span> track name </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 音乐控制模块 -->
        <div class="w-[40%] max-w-[722px]">
          <div class="flex flex-col items-center justify-center" aria-label="播放器控制区域">
            <div class="mb-2.5 flex w-full flex-row flex-nowrap gap-4">
              <div class="flex flex-1 justify-end gap-2">
                <button class="flex h-8 w-8 items-center justify-center border-0 bg-transparent text-[hsla(0,0%,100%,.7)]" aria-label="开启随机播放">
                  <svg class="fill-[currentcolor]" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                    <path
                      d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"
                    ></path>
                    <path
                      d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
                    ></path>
                  </svg>
                </button>
                <button class="flex h-8 w-8 items-center justify-center border-0 bg-transparent text-[hsla(0,0%,100%,.7)]" aria-label="上一首">
                  <svg class="fill-[currentcolor]" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
                  </svg>
                </button>
              </div>
              <!-- 播放与暂停按钮 -->
              <button class="flex h-8 w-8 items-center justify-center rounded-full border-0 bg-[#fff]" @click="togglePlay">
                <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" v-if="!playing">
                  <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                </svg>
                <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" v-else>
                  <path
                    d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
                  ></path>
                </svg>
              </button>

              <div class="flex flex-1 gap-2">
                <button class="flex h-8 w-8 items-center justify-center border-0 bg-transparent text-[hsla(0,0%,100%,.7)]" aria-label="下一首">
                  <svg class="fill-[currentcolor]" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                    <path
                      d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
                    ></path>
                  </svg>
                </button>
                <button class="flex h-8 w-8 items-center justify-center border-0 bg-transparent text-[hsla(0,0%,100%,.7)]" aria-label="开启循环播放">
                  <svg class="fill-[currentcolor]" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                    <path
                      d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- 进度条与时间 -->
            <div class="flex w-full flex-row items-center justify-between gap-2">
              <div class="min-w-[40px] text-right text-xs text-[#a7a7a7]">{{ currentTime }}</div>

              <div class="progress-bar-wrapper | group relative flex h-3 w-full cursor-pointer items-center" @mousedown="startProgressSlide" ref="progressBarWrapperRef">
                <div class="progress-bar | relative h-1 w-full rounded-sm bg-[hsla(0,0%,100%,.3)]">
                  <div class="h-full w-full overflow-hidden rounded-sm">
                    <div
                      class="fill | h-full w-full rounded-sm bg-white group-hover:bg-green-500"
                      :style="{ transform: `translateX(calc(-100% + ${progressBarTransform}))`, backgroundColor: `${!isAnimation ? 'rgb(34, 197, 94)' : ''}` }"
                    ></div>
                  </div>
                  <div class="dot | invisible absolute top-[50%] ml-[-6px] h-3 w-3 translate-y-[-50%] rounded-full bg-white group-hover:visible" :style="{ left: progressBarTransform }"></div>
                  <!-- <div class="progress-buffer | absolute top-0 h-full w-0 rounded-sm " ref="progressBufferRef"></div> -->
                </div>
              </div>

              <div class="font min-w-[40px] text-left text-xs text-[#a7a7a7]">{{ duration }}</div>
            </div>
          </div>
        </div>

        <div class="flex w-[30%] justify-end">
          <div class="flex grow justify-end">1</div>
        </div>
        <!--  @progress="updateBufferedProgress" -->
        <!-- 
          @timeupdate="updatePlayProgress"

         -->
        <audio src="/src/assets/李克勤 - 月半小夜曲.flac" ref="audioRef" @play="play" @pause="paused" @loadedmetadata="loadedmetadata"></audio>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

let audioRef = ref(null);
let progressBarTransform = ref('0%');
let playing = ref(false);
let isAnimation = ref(false);
let duration = ref('0:00');
let currentTime = ref('0:00');
let progressBarWrapperRef = ref(null);

onMounted(() => {
  audioRef.value.volume = 0.1;
});

// 切换播放状态
function togglePlay() {
  audioRef.value.paused ? audioRef.value.play() : audioRef.value.pause();
}

// 处理播放事件
function play() {
  playing.value = true;
  isAnimation.value = true;
  requestAnimationFrame(updatePlayProgress);
}

function updatePlayProgress() {
  console.log('playing...');
  const progressPercentage = audioRef.value.currentTime / audioRef.value.duration;
  progressBarTransform.value = `${progressPercentage * 100}%`;
  updateCurrentTime(audioRef.value.currentTime);
  isAnimation.value && requestAnimationFrame(updatePlayProgress);
}
//处理暂停时间
function paused() {
  playing.value = false;
  isAnimation.value = false;
}

// 音频元数据下载完毕后 更新时间
function loadedmetadata() {
  duration.value = formatSongsTime(audioRef.value.duration);
  updateCurrentTime(audioRef.value.currentTime);
}

//更新音乐时间
function updateCurrentTime(t) {
  currentTime.value = formatSongsTime(t);
}

// 开始调节进度条
function startProgressSlide(event) {
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

function slideProgress(event) {
  isAnimation.value = false;
  const percentage = getPercentage(event, progressBarWrapperRef.value);
  progressBarTransform.value = `${percentage * 100}%`;
  const t = percentage * audioRef.value.duration;
  updateCurrentTime(t);
}

function stopProgressSlide(event) {
  const percentage = getPercentage(event, progressBarWrapperRef.value);
  audioRef.value.currentTime = audioRef.value.duration * percentage;
  isAnimation.value = true;
  if (!audioRef.value.paused) {
    requestAnimationFrame(updatePlayProgress);
  }
  document.removeEventListener('mousemove', slideProgress);
  document.removeEventListener('mouseup', stopProgressSlide);
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
.mask-image {
  mask: linear-gradient(90deg, transparent 0, #000 6px, #000 calc(100% - 12px), transparent);
}

.right-content {
  width: 30%;
}
</style>
