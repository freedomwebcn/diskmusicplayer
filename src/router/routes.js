import Home from '../pages/Home/Home.vue';
import Playlist from '../pages/Playlist/Playlist.vue';
import test from '../pages/test.vue';

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
    children: [{ path: '', component: test }]
  },
  {
    path: '/test',
    name: 'test',
    component: test
  }
];

export default routes;
