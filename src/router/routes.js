import Home from '../pages/Home/Home.vue';
import Playlist from '../pages/Playlist/Playlist.vue';

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
    component: Playlist
  }
];

export default routes;
