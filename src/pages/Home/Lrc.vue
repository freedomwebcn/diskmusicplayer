<template>
  <div ref="lrcWrapperRef" class="lrc-wrapper h-full w-full text-white">
    <div class="grid h-full w-full bg-[rgb(104,122,122)]">
      <div class="mt-16 grid w-full justify-center bg-[rgb(104,122,122)] text-5xl">
        <div class="mx-36 font-bold leading-[1.5em] text-black">
          <template v-for="(item, index) in lyricData">
            <div
              ref="lyricLineRef"
              class="lyric-line cursor-pointer"
              :style="{
                color: index < currentLyricIndex ? 'var(--lyrics-color-passed)' : currentLyricIndex == index ? 'var(--lyrics-color-active)' : '',
                transition: `all .1s ease-out`
              }"
            >
              {{ item.text }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch, ref, nextTick } from 'vue';
import { store } from '/src/store/store.js';
import { initNavScrollBar } from './initScrollbar.js';
// onMounted
let lyricData = reactive([]);
const lyricLineRef = ref(null);
const lyricLineRefHeight = ref();
const lrcWrapperRef = ref(null);

let { instance } = initNavScrollBar('.lrc-wrapper');

let scrollLrcStatus = ref(true);

// onMounted(() => {
//   // lrcWrapperRef.value.addEventListener('wheel', () => {
//   //   scrollLrcStatus.value = false;
//   // });
// });

watch(
  () => store.currentTime,
  (newTime) => {
    updateCurrentLyric(newTime);
    // console.log(newTime);
  }
);

fetch('王力宏 - 我们的歌.lrc')
  .then((response) => {
    if (response.status == 200) {
      return response.text();
    }
    return Promise.reject(response.statusText);
  })
  .then((data) => {
    // console.log(data);
    lyricData.push(...parseLyric(data));
    nextTick(() => {
      lyricLineRefHeight.value = lyricLineRef.value[0].offsetHeight;
    });

    // console.log(lyricData);
  })
  .catch((error) => {
    // 处理请求失败的情况
    console.log('歌词获取失败', error);
  });

// 解析歌词信息
function parseLyric(lyric) {
  const lines = lyric.split('\n');
  const result = [];
  const timeExp = /\[(\d{2}):(\d{2})\.(\d+)\]/;

  for (let line of lines) {
    const matches = timeExp.exec(line);
    if (!matches) continue;
    const minutes = parseInt(matches[1]);
    const seconds = parseInt(matches[2]);
    const milliseconds = parseInt(matches[3]);
    // audio currentTime返回秒 而歌词数据是: 分 秒 毫秒，这里统一转换成秒
    const time = minutes * 60 + seconds + milliseconds / 1000;
    const text = line.replace(timeExp, '').trim();
    if (text) {
      result.push({
        time,
        text
      });
    }
  }
  return result;
}

// 获取当前播放时间对应的歌词索引
function getCurrentLyricIndex(time) {
  for (let i = 0; i < lyricData.length; i++) {
    if (time < lyricData[i].time) return i - 1;
  }
  return lyricData.length - 1;
}

let currentLyricIndex = ref();
//更新当前歌词
function updateCurrentLyric(time) {
  currentLyricIndex.value = getCurrentLyricIndex(time);
  scrollLrcStatus.value && scrollLyric(currentLyricIndex.value);
}

let saveIndex = 0;
// 滚动歌词
function scrollLyric(index) {
  if (index == saveIndex) return;
  // 使滚动歌词居中
  const top = lyricLineRef.value[index].offsetTop - lrcWrapperRef.value.offsetHeight / 2 + lyricLineRefHeight.value / 2;
  const { viewport } = instance.value.elements();
  const { scrollTop } = viewport;
  // 根据store的scrollLRCstatus状态 决定是否要执行scrollTo
  if (!store.scrollLRCstatus) {
    // 当前歌词行的offsetTop大于滚动值加可视区域高 说明当前元素在可视区域底部外面 或者 居中值top小于滚动值
    if (lyricLineRef.value[index].offsetTop > scrollTop + lrcWrapperRef.value.offsetHeight || top < scrollTop) {
      saveIndex = index;
      return;
    }
  }
  // 当前歌词行的前两行和后两行添加平稳滚动
  viewport.scrollTo({ top, behavior: Math.abs(index - saveIndex) <= 2 ? 'smooth' : 'instant' });
  saveIndex = index;
  store.seScrollLRCstatus(false);
}
</script>

<style scoped>
.lrc-wrapper {
  --lyrics-color-active: rgb(255, 255, 255);
  --lyrics-color-inactive: rgb(0, 0, 0);
  --lyrics-color-passed: rgba(255, 255, 255, 0.7);
}

.lyric-line:hover {
  color: var(--lyrics-color-active) !important;
}
</style>
