import Playlists from '../pages/Playlists/Playlists.vue';
import TrackList from '../pages/TrackList/TrackList.vue';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Playlists'
    }
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: Playlists
  },
  {
    path: '/tracklist/:playlist',
    name: 'TrackList',
    component: TrackList
  }
];

export default routes;
