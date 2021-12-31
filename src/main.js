import { createApp } from 'vue';
import App from './App.vue';
import '../index.css';
import router from './router';
import Card from './components/Card.vue';

const app = createApp(App)
app.use(router)
app.component('Card', Card)

const mountedApp = app.mount('#app')


// createApp(App)
//     .use(router)
//     .mount('#app')
