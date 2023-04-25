import { reactive, computed } from 'vue';
import { setLocal, getLocal } from '/src/utills/localStorage.js';

const playlists = getLocal('playlists');

export const store = reactive({
  scrollTop: 0,
  coverMainColor: [],
  currentPlaylistInfo: {},
  currentPlayPlaylistName: '',

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
  }
});

export const computedRectY = computed(() => {
  return store.scrollTop >= 340;
});
