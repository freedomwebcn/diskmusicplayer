<template>
  <div class="cotainer">
    <header>
      <div class="outer-bg" :style="{ opacity: scrollPositionRatio }" ref="headerOuterBgRef">
        <div class="inner-bg"></div>
      </div>
      <button>Search</button>
    </header>
    <div class="bg"></div>
    <main>
      <section>
        <div class="title">
          <h3>媒体库</h3>
          <span>共 {{ playlists.len ? playlists.len : 0 }} 张歌单</span>
        </div>
        <div class="playlist">
          <template v-if="playlists.data && playlists.data.length">
            <div class="playlist-item" v-for="(playlist, index) in playlists.data" @click="$router.push(`/tracklist/${playlist.name}`)">
              <div class="playlist-item-content">
                <div class="cover-wrapper">
                  <div class="cover" :style="{ backgroundColor: playlist.main_color.length > 0 ? `rgb(${playlist.main_color})` : '' }">
                    <img draggable="false" loading="lazy" :src="playlist.cover" @load="imgloaded(index)" ref="imgRef" />
                  </div>
                  <div class="icon"></div>
                </div>
                <div class="playlist_info">
                  <span class="playlist-name">{{ playlist.name }}</span>
                  <div class="track-count">共 {{ playlist.track_count }} 首</div>
                </div>
                <div></div>
              </div>
            </div>
          </template>

          <div class="playlist-item item-data-loading" v-else v-for="item in playlistsCount">
            <div class="playlist-item-content">
              <div class="cover-wrapper">
                <div class="cover">
                  <img draggable="false" loading="lazy" />
                </div>
                <div class="icon"></div>
              </div>
              <div class="playlist_info">
                <span class="playlist-name"></span>
                <div class="track-count"></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
import { ref } from 'vue';

let playlists = ref([]);
const imgRef = ref();
let scrollPositionRatio = ref();
let playlistsCount = ref(0);

async function getPlaylistsCount() {
  const data = await fetch('http://127.0.0.1:5000/get_playlists_count');
  const formatData = await data.json();
  if (formatData.code !== 200) {
    throw formatData;
  }
  return formatData;
}

(async function () {
  try {
    const { data } = await getPlaylistsCount();
    playlistsCount.value = data;
    initScroolBar();
  } catch (error) {
    console.error(error);
  }
})();

function initScroolBar() {
  OverlayScrollbars(
    document.querySelector('.cotainer'),
    {
      scrollbars: {
        theme: 'os-theme-custom',
        autoHide: 'leave'
      }
    },
    {
      scroll() {
        scrollPositionRatio.value = Math.max(Math.min(1 - (156 - event.target.scrollTop) / 156, 1));
      }
    }
  );
}

fetch('http://127.0.0.1:5000/get_all_playlist')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.code == 200) {
      playlists.value = data;
    }
    return Promise.reject(data);
  })
  .catch((errdata) => {
    console.log(errdata);
  });

function imgloaded(index) {
  imgRef.value[index] && (imgRef.value[index].style.opacity = 1);
}
</script>

<style scoped>
:global(.os-theme-custom) {
  --os-size: 10px;
  --os-handle-bg: hsla(0, 0%, 100%, 0.3);
  --os-handle-bg-hover: hsla(0, 0%, 100%, 0.5);
  --os-handle-bg-active: hsla(0, 0%, 100%, 0.6);
}

:global(.os-scrollbar-visible) {
  transition: all 0.2s ease-in;
}

.cotainer {
  height: calc(100% - 90px);
  user-select: none;
}

header {
  position: fixed;
  width: 100%;
  padding: 0 var(--plr);
  height: 64px;
  line-height: 64px;
  color: rgb(179, 179, 179);
  font-size: 25px;
  text-align: right;
  z-index: 5;
  opacity: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* width: min(1000px, 100% - (var(--container-padding) * 2)); */
}

header .outer-bg {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background-color: #121212;
  z-index: -1;
  opacity: 0;
}

header .inner-bg {
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
}

header button {
  background-color: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
}

main {
  display: flex;
  gap: 24px;
  /* color: #FFF */
  flex-wrap: wrap;
  padding: 64px var(--plr) 0 var(--plr);
  /* background-color: aquamarine; */
}

.bg {
  height: 332px;
  width: 100%;
  position: absolute;
  z-index: -1;
  margin-top: -64px;
  background-color: rgb(83, 83, 83);
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%), var(--background-noise);
}

main section {
  flex: 1 1 100%;
  padding-top: 24px;
  margin-bottom: 16px;
  max-width: 100%;
}

main section .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}

main section .title h3 {
  margin-right: 10px;
}

main section .title span {
  font-size: 1.2rem;
  font-weight: normal;
}

@media (max-width: 414px) {
  :global(.os-theme-custom) {
    --os-size: 5px;
  }

  main section .title {
    display: block;
    font-size: 18px;
  }

  main section .title span {
    font-size: 15px;
  }

  header button {
    font-size: 18px;
  }
}

main section .playlist {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(var(--column-count), minmax(0, 1fr));
}

main section .playlist .playlist-item {
  padding: 16px;
  background: #181818;
  border-radius: 6px;
  width: 100%;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

@media (min-width: 414px) {
  main section .playlist .playlist-item:hover {
    background-color: #282828;
  }
}

main section .playlist .playlist-item .playlist-item-content .cover-wrapper {
  margin-bottom: 16px;
}

main section .playlist .playlist-item .playlist-item-content .cover-wrapper .cover {
  position: relative;
  padding-bottom: 100%;
  background-color: rgb(51, 51, 51);
  border-radius: 4px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  width: 100%;
  overflow: hidden;
}

main section .playlist .playlist-item .playlist-item-content .cover-wrapper img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  opacity: 0;
  height: 100%;
  width: 100%;
  transition: opacity 0.1s ease-in;
}

main section .playlist .playlist-item .playlist-item-content .playlist_info {
  color: #fff;
  /* font-weight: 700; */
  font-size: 1rem;
  min-height: 62px;
}

main section .playlist .playlist-item .playlist-item-content .playlist_info .playlist-name {
  display: inline-block;
  max-width: 100%;
  padding-bottom: 4px;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

main section .playlist .playlist-item .playlist-item-content .playlist_info .track-count {
  font-size: 0.875rem;
  font-weight: 400;
  color: #a7a7a7;
  line-height: 1.6;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  white-space: normal;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

main section .playlist .item-data-loading:hover {
  background-color: #181818;
  cursor: inherit;
}

main section .playlist .item-data-loading .playlist-name {
  width: 100%;
  height: 25px;
  position: relative;
  border-radius: 15px;
  margin-bottom: 5px;
  background-color: hsla(0, 0%, 100%, 0.1);
}

main section .playlist .item-data-loading .track-count {
  width: 57%;
  height: 25px;
  position: relative;
  border-radius: 15px;
  background-color: hsla(0, 0%, 100%, 0.1);
}

main section .playlist .item-data-loading .cover::after,
main section .playlist .item-data-loading .playlist-name::after,
main section .playlist .item-data-loading .track-count::after {
  animation: shimmer 2s infinite;
  background-image: linear-gradient(90deg, transparent, hsla(0, 0%, 100%, 0.1), transparent);
  bottom: 0;
  content: '';
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

main section:nth-child(1) {
  /* background-color: red; */
}

main section:nth-child(2) {
  background-color: rgb(30, 228, 3);
}
</style>
