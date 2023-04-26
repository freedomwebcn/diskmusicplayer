import { reactive, computed } from 'vue';
import { getLocal } from '/src/utills/localStorage.js';

const playlists = getLocal('playlists');

export const store = reactive({
  scrollTop: 0,
  coverMainColor: [],
  currentPlaylistInfo: {},
  currentPlayPlaylistName: '',
  currentPlayTrack: '',
  scrollWrapperWidth: '',

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

  setCurrentPlayTrack(name) {
    this.currentPlayTrack = name;
  },
  setScrollWrapperWidth(w) {
    this.scrollWrapperWidth = w + 'px';
  }
});

export const computedRectY = computed(() => {
  return store.scrollTop >= 340;
});
