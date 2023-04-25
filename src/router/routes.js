import Home from '../pages/Home/Home.vue';
import Playlist from '../pages/Playlist/Playlist.vue';
import tracklist from '../pages/Playlist/tracklist.vue';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/playlist/:name',
    name: 'Playlist',
    component: Playlist,
    children: [{ path: '', name: 'tracklist', component: tracklist }]
  }
];

export default routes;
