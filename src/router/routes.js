import Home from '../pages/Home/Home.vue';
import Playlist from '../pages/Playlist/Playlist.vue';
import TrackList from '../pages/Playlist/TrackList.vue';


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
    children: [
      { path: '', name: 'tracklist', component: TrackList },
   
    ]
  }
];

export default routes;
