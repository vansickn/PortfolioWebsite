<script setup>
// This starter template is using Vue 3 <script setup> SFCs
import Nav from './components/Nav.vue';
import Projects from './views/Projects.vue';
import Card from './components/Card.vue';
// import 'styles.css';
</script>

<template>
  <div class="w-screen"><Nav></Nav></div>
  <router-view/>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <div class="bg-red-500 text-white"> hey</div> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
