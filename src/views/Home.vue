<template>
<div class="w-screen">
    <div class="container flex flex-row justify-center min-w-full gap-2 bg-gray-200 p-4 shadow-lg rounded-xl">
        <img src="../assets/headshot.jpg" alt="" srcset="" class="w-60 h-60 rounded-full shadow-2xl hover:scale-105 transition duration-300 hover;brightness-110">
        <div class="container flex flex-col w-5/12 gap-3">
            <h1 class="text-3xl mt-5 font-bold mb-1 text-left ml-10">Noah VanSickle</h1>
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
    <div class="container flex flex-col justify-center min-w-full bg-red-500 bg-opacity-20 rounded-2xl shadow-xl">
        <div class="container flex flex-row min-w-full justify-between items-center" @click="toggleAboutSection" id="aboutSection">
            <svg class="w-10 h-10 ml-3 transition duration-300" :class="{'rotate-360 transition duration-300':showAboutSection}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <h1 class="mt-5 mb-5 font-bold text-5xl w-11/12 select-none">About Me</h1>
            <svg class="w-10 h-10 mr-3 transition duration-300" :class="{'rotate-180 transition duration-300':showAboutSection}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        <div class="container flex flex-col h-screen" v-show="showAboutSection">
            This is the about section
        </div>
        <div id="bottom"></div>
    </div>
    <div class="container flex flex-col justify-center min-w-full bg-green-500 bg-opacity-20 rounded-2xl shadow-xl" id="projectSection">
        <h1 class="mt-5 mb-5 font-bold text-3xl">Projects</h1>
    </div>
    <div class="container flex flex-col justify-center min-w-full bg-blue-500 bg-opacity-20 rounded-2xl shadow-xl">
        <h1 class="mt-5 mb-5 font-bold text-3xl">Contact</h1>
    </div>
</div>
</template>

<script>
import Card from '../components/Card.vue';
import {ref} from 'vue';
export default {
    components: { Card },
    methods: {
        sendToGithub(){
            window.open('https://github.com/vansickn');
        },
        sendToLinkedin(){
            window.open('https://www.linkedin.com/in/noah-vansickle-b68131191/');
        },
        toggleAboutSection(){
            this.showAboutSection = !this.showAboutSection;
            let el = document.querySelector('#aboutSection');
            window.scrollTo(100,100)
            console.log('hey')
        }
    },
    data(){
        return {
            showAboutSection: false,
            showProjectSection: false,
            showContactSection: false,
        }
    },
}
</script>

<style>

</style>