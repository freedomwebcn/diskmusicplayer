import { reactive, computed } from 'vue';
import { getLocal } from '/src/utills/localStorage.js';

const playlists = getLocal('playlists');

export const store = reactive({
  scrollTop: 0,
  coverMainColor: [],
  currentPlaylistInfo: {},
  currentPlayPlaylistName: '',
  currentPlayTrackInfo: {},
  scrollWrapperWidth: '',
  currentPlayId: 0,
  currentPlayTrackList: [], //这个数据播放队列也需要
  playStatus: false,
  currentTime: 0, //音频的当前播放时间
  scrollLRCstatus: false, //歌词滚动状态 （点击音频进度条或者点击歌词时更新为true）

  setScrollTop(top) {
    this.scrollTop = top;
  },

  setCurrentPlaylistInfo(routeParams) {
    this.currentPlaylistInfo = null;
    this.currentPlaylistInfo = playlists.find((playlist) => playlist.name == routeParams.name);
    this.coverMainColor = this.currentPlaylistInfo.main_color || [0, 0, 0];
  },

  setCurrentPlayPlaylistName(name) {
    this.currentPlayPlaylistName = name;
  },

  setcurrentPlayTrackInfo(trackInfo) {
    this.currentPlayTrackInfo = trackInfo;
  },

  setCurrentPlayTrackList(trackList) {
    this.currentPlayTrackList = trackList;
  },
  // 点击播放列表播放音乐时
  setCurrentPlayId({ id }) {
    this.currentPlayId = id;
  },
  // 歌曲播放结束设置当前播放Id
  setPlayendedCurrentPlayId() {
    this.currentPlayId >= this.currentPlayTrackList.length - 1 ? (this.currentPlayId = 0) : this.currentPlayId++;
  },
  // 切换上一首 或 下一首时设置当前播放ID
  setPlayNextOrPrevCurrentPlayId(num) {
    this.currentPlayId = (this.currentPlayId + num + this.currentPlayTrackList.length) % this.currentPlayTrackList.length;
  },
  // 设置播放状态
  setPlayStatus(status) {
    this.playStatus = status;
  },
  //设置音频当前播放时间
  setCurrentTime(time) {
    this.currentTime = time;
  },
  // 设置滚动歌词状态
  seScrollLRCstatus(status) {
    this.scrollLRCstatus = status;
  },
  setScrollWrapperWidth(w) {
    this.scrollWrapperWidth = w + 'px';
  }
});
// store 的计算属性
export const storeComputedOfIsScrolledToPosition = computed(() => {
  // 380= 340+104-64
  return store.scrollTop > 380;
});
