import TrackList from '../pages/Home/TrackList.vue';
import Lrc from '../pages/Home/Lrc.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'Playlist',
  //   component: Playlist
  // }
  {
    path: '/playlist/:name',
    name: 'tracklist',
    component: TrackList
  },
  {
    path: '/lrc',
    name: 'lrc',
    component:Lrc
  }
];

export default routes;
