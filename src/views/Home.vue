<template>
<div class="w-screen">
    <div class="container flex flex-row justify-center min-w-full gap-2 bg-gray-200 p-4 shadow-lg rounded-xl">
        <img src="../assets/headshot.jpg" alt="" srcset="" class="w-60 h-60 rounded-full shadow-2xl hover:scale-105 transition duration-300 hover;brightness-110">
        <div class="container flex flex-col w-5/12 gap-3">
            <h1 class="text-3xl mt-5 font-bold mb-1 text-left ml-10">Noah VanSickle's Portfolio</h1>
            <div class="container flex flex-row items-baseline justify-start gap-2 ml-10">
                <span class="font-bold text-xl">Currently:</span>
                <span>Senior at Union College in Schenectady, NY</span>
            </div>
            <div class="container flex flex-row items-baseline justify-start gap-2 ml-10">
                <span class="font-bold text-xl">Major:</span>
                <span>Computer Science</span>
                <span class="font-bold text-xl">Minor:</span>
                <span>Economics</span>
            </div>
            <div class="container flex flex-row items-baseline justify-start gap-2 ml-10">
                <span class="font-bold text-xl">Looking For:</span>
                <span>Software Enginerring role in New York, NY</span>
            </div>
            <div class="container flex flex-row justify-start gap-10 ml-10">
                <img src="../assets/github.png" alt="" srcset="" class="w-10 h-10 rounded-full shadow-xl hover:scale-110 transition duration-300 hover;brightness-110" @click="sendToGithub">
                <img src="../assets/linkedin.png" alt="" srcset="" class="w-10 h-10 rounded-sm shadow-xl hover:scale-110 transition duration-300 hover:brightness-110" @click="sendToLinkedin">
            </div>
        </div>
    </div>
    <div class="grid grid-cols-3 mt-5">
        <Card :header="'About Me'" :border="'red'"/>
        <Card :header="'My Projects'" :border="'green'"/>
        <Card :header="'Experiences'" :border="'blue'"/>
    </div>
</div>
</template>

<script>
import Card from '../components/Card.vue';
export default {
    components: { Card },
    methods: {
        sendToGithub(){
            window.open('https://github.com/vansickn');
        },
        sendToLinkedin(){
            window.open('https://www.linkedin.com/in/noah-vansickle-b68131191/');
        }
    }
}
</script>

<style>

</style>