import { createApp } from 'vue';
import App from './App.vue';
import '../index.css';
import router from './router';
import Card from './components/Card.vue';
import VideoBackground from 'vue-responsive-video-background-player';

// Universal Modal Component
import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'

const app = createApp(App)
app.use(router)

// use Vue Universal Modal Package
app.use(VueUniversalModal, {
  teleportTarget: 'body'
})

app.component('video-background',VideoBackground)
app.component('Card', Card)

const mountedApp = app.mount('#app')


// createApp(App)
//     .use(router)
//     .mount('#app')
