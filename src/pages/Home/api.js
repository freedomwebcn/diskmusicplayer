import { ref } from 'vue';

export function reqTrackListData(playlistName) {
  const data = ref([]);
  const error = ref(null);
  async function fetchData() {
    try {
      data.value.length = 0;
      const res = await fetch(`http://127.0.0.1:5000/get_playlist_track/${playlistName}`);
      const resdata = await res.json();
      if (resdata.code !== 200) {
        throw new Error(resdata);
      }
      data.value = resdata.data;
    } catch (err) {
      error.value = err;
      console.log(error);
    }
  }
  fetchData();
  return {
    data,
    error
  };
}
