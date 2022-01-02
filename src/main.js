import { createApp } from 'vue';
import App from './App.vue';
import '../index.css';
import router from './router';
import Card from './components/Card.vue';
// import VideoBackground from 'vue-responsive-video-background-player';
import * as firebase from "firebase/app";

// Universal Modal Component
import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcf3oQJgRBnm_mGD5mvomwn7hy1sZvvY4",
  authDomain: "portfoliowebsite-d3b06.firebaseapp.com",
  projectId: "portfoliowebsite-d3b06",
  storageBucket: "portfoliowebsite-d3b06.appspot.com",
  messagingSenderId: "932941937462",
  appId: "1:932941937462:web:4b52f221e742f61855d197",
  measurementId: "G-PXBPSVZF0R"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

const app = createApp(App)
app.use(router)

// use Vue Universal Modal Package
app.use(VueUniversalModal, {
  teleportTarget: 'body'
})

// app.component('video-background',VideoBackground)
app.component('Card', Card)

const mountedApp = app.mount('#app')


// createApp(App)
//     .use(router)
//     .mount('#app')
