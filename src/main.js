import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './style.css';
import './index.css';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { RecycleScroller } from 'vue-virtual-scroller';

const app = createApp(App);

app.use(router);
app.component('RecycleScroller', RecycleScroller);

app.mount('#app');

