<template>
<div class="w-screen" id="topScreen">
    <!-- START MAIN HERO -->
    <div class="container flex flex-col sm:justify-center min-w-full gap-2 bg-gray-200 p-4 shadow-lg rounded-xl">
       <img src="../assets/headshot.jpg" alt="" srcset="" class="w-40 h-40 sm:w-60 sm:h-60 rounded-full shadow-2xl hover:scale-105 transition duration-300 hover;brightness-110 select-none self-center"> 
       <h1 class="text-5xl font-bold">Noah VanSickle</h1>
       <span>Senior at Union College</span>
       <div class="container flex flex-row justify-center min-w-full">
           <div class="container flex flex-col items-center w-40">
               <svg class="w-10 h-10 transition duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 7H7v6h6V7z"></path><path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd"></path></svg>
               <span>Computer Science</span>
           </div>
           <div class="container flex flex-col items-center w-40">
               <svg class="w-10 h-10 transition duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
               <span>Economics</span>
           </div>
       </div>
    </div>
    <!-- END MAIN HERO -->

    <div class="container flex flex-col justify-center min-w-full bg-red-500 bg-opacity-20 rounded-2xl shadow-xl items-center" id="aboutSection">
        <div class="container flex flex-row min-w-full justify-between items-center" @click="toggleAboutSection">
            <svg class="w-10 h-10 ml-3 transition duration-300" :class="{'rotate-360 transition duration-300':showAboutSection}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <h1 class="mt-5 mb-5 font-bold text-5xl w-11/12 select-none">About Me</h1>
            <svg class="w-10 h-10 mr-3 transition duration-300" :class="{'rotate-180 transition duration-300':showAboutSection}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        <div class="container flex flex-row h-10 min-w-full transition duration-300 items-start justify-center gap-2" id="aboutSectionFull" :class="{'hidden':showAboutSection == false,'h-screen transition duration-300':showAboutSection == true}">
            <!-- <div class="container flex flex-col items-start gap-3 w-3/12 mt-5">
                <img class="rounded-2xl shadow-xl hover:scale-105 transition duration-300" src="../assets/noahlong.jpeg" alt="" srcset="">
                <span>Trip to Savannah, GA in the Summer of 2021</span>
            </div>
            <div class="container flex flex-col items-start justify-start gap-3 w-4/12">
                <h1 class="text-6xl transition duration-300 opacity-0 mt-5 ml-10" :class="{'opacity-100 transition duration-300':showAboutSectionTitle == true}">Hi! I'm Noah</h1>
                <h1 class="ml-10 text-lg opacity-0" :class="{'opacity-100 transition duration-300':showDenver == true}" > I'm originally from Denver, Colorado</h1>
                <img class="w-80 rounded-xl ml-10 shadow-lg opacity-0 hover:scale-105 transition duration-300" :class="{'opacity-100 transition duration-300':showDenver == true}" src="../assets/Denver.jpeg" alt="" srcset="">
                <h1 class="ml-10 text-lg opacity-0" :class="{'opacity-100 transition duration-300':showUnion == true}">I attend Union College in Schenectady, NY</h1>
                <img class="w-80 rounded-xl ml-10 shadow-lg opacity-0 hover:scale-105 transition duration-300" :class="{'opacity-100 transition duration-300':showUnion == true}" src="../assets/union.jpeg" alt="" srcset="">
            </div>
            <div class="container flex flex-col items-center justify-end w-4/12 mt-9">
                <h1 class="text-4xl self-start ml-10">My Values</h1>
                <div class="container flex flex-col items-center justify-center ml-10 gap-3">
                    <div class="h-32 container flex flex-row bg-gray-100 items-center justify-center w-9/12 rounded-xl border-2 border-blue-500 mt-5">
                        <h1 class="h-32 text-3xl">Teamwork</h1>
                    </div>
                </div>
            </div> -->
            <div class="grid grid-cols-3 w-11/12 justify-items-center">
                <div class="container flex flex-col items-center justify-center gap-3">
                    <h1 class="text-6xl transition duration-300 opacity-0" :class="{'opacity-100 transition duration-300':showAboutSectionTitle == true}">Hi! I'm Noah</h1>
                    <img class="w-8/12 rounded-2xl shadow-xl hover:scale-105 transition duration-300" src="../assets/noahlong.jpeg" alt="" srcset="">
                    <span class="">Trip to Savannah, GA in the Summer of 2021</span> 
                </div>
               <div class="container flex flex-col items-center justify-start gap-3">
                   <h1 class="text-6xl transition duration-300 opacity-0">Hi! I'm Noah</h1>
                    <h1 class="text-lg opacity-0" :class="{'opacity-100 transition duration-300':showDenver == true}" > I'm originally from Denver, Colorado</h1>
                    <img class="w-9/12 rounded-xl shadow-lg opacity-0 hover:scale-105 transition duration-300" :class="{'opacity-100 transition duration-300':showDenver == true}" src="../assets/Denver.jpeg" alt="" srcset="">
                    <h1 class="text-lg opacity-0" :class="{'opacity-100 transition duration-300':showUnion == true}">I attend Union College in Schenectady, NY</h1>
                    <img class="w-9/12 rounded-xl shadow-lg opacity-0 hover:scale-105 transition duration-300" :class="{'opacity-100 transition duration-300':showUnion == true}" src="../assets/union.jpeg" alt="" srcset="">
                    <h1 class="text-lg opacity-0" :class="{'opacity-100 transition duration-300':showUnion == true}">I Graduate in June, 2022</h1>
                    {{showDenver}}
                    {{showUnion}}
                </div>
                <div class="container flex flex-col items-center justify-start gap-3">
                    <h1 class="text-4xl">Values</h1>
                    <div class="cursor-pointer grid grid-cols-1 gap-4 bg-gradient-to-r from-cyan-500 to-blue-500 w-8/12 h-auto p-4 place-items-center text-3xl font-bold rounded-2xl shadow-xl text-white hover:scale-110 transition duration-300" @click="showTeamworkModal = true">
                        <div class="container flex flex-row justify-between items-center">
                            <h1 class="text-2xl">Teamwork</h1>
                            <svg class="w-6 h-6 -mt-4 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="container flex flex-row justify-center gap-3">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/baseballnoah.JPG" alt="">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/noahfootball.JPG" alt="">
                        </div>
                    </div>
                    <div class="cursor-pointer grid grid-cols-1 gap-4 bg-gradient-to-r from-sky-500 to-indigo-500 w-8/12 h-auto p-4 place-items-center text-3xl font-bold rounded-2xl shadow-xl text-white hover:scale-110 transition duration-300">
                        <div class="container flex flex-row justify-between items-center">
                            <h1 class="text-2xl">Learning</h1>
                            <svg class="w-6 h-6 -mt-4 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="container flex flex-row justify-center gap-3">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/atomic-habits.jpeg" alt="">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/codecode.jpeg" alt="">
                        </div>
                    </div>
                    <div class="cursor-pointer grid grid-cols-1 gap-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-8/12 h-auto p-4 place-items-center text-3xl font-bold rounded-2xl shadow-xl text-white hover:scale-110 transition duration-300">
                        <div class="container flex flex-row justify-between items-center">
                            <h1 class="text-2xl">Problem Solving</h1>
                            <svg class="w-6 h-6 -mt-4 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="container flex flex-row justify-center gap-3">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/puzzle.jpeg" alt="">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/ps.jpeg" alt="">
                        </div>
                    </div>
                    <div class="cursor-pointer grid grid-cols-1 gap-4 bg-gradient-to-r from-purple-500 to-pink-500 w-8/12 h-auto p-4 place-items-center text-3xl font-bold rounded-2xl shadow-xl text-white hover:scale-110 transition duration-300">
                        <div class="container flex flex-row justify-between items-center">
                            <h1 class="text-2xl">Creativity</h1>
                            <svg class="w-6 h-6 -mt-4 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="container flex flex-row justify-center gap-3">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/youngnoah.JPG" alt="">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/creative.jpeg" alt="">
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <div id="bottom"></div>
    </div>
    <div class="container flex flex-col justify-center min-w-full bg-green-500 bg-opacity-20 rounded-2xl shadow-xl" id="projectSection">
        <h1 class="mt-5 mb-5 font-bold text-3xl">Projects</h1>
    </div>
    <div class="container flex flex-col justify-center min-w-full bg-blue-500 bg-opacity-20 rounded-2xl shadow-xl">
        <h1 class="mt-5 mb-5 font-bold text-3xl">Contact</h1>
    </div>
    <div class="h-screen bg-gray-500">
        <h1>hey</h1>
    </div>
</div>
<!-- Teamwork Value Modal -->
<Modal
    v-model="showTeamworkModal"
    :close="closeModal"
    >
        <div class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl w-10/12 sm:w-8/12 h-auto lg:h-screen">
            <div class="container flex flex-col gap-5">
                <svg class="w-8 h-8 mr-2 mt-1 self-end absolute hover:text-red-500 transition duration-300 cursor-pointer" @click="closeModal()" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <h1 class="sm:text-6xl text-3xl font-thin font-sans mx-auto text-white mt-5">Teamwork</h1>
                <div class="grid md:grid-cols-2 grid-cols-1">
                    <div class="container flex flex-col items-center gap-5">
                        <img class="w-10/12 rounded-2xl border-2 border-white shadow-xl" src="../assets/baseballnoah.JPG" alt="">
                        <img class="w-10/12 rounded-2xl border-2 border-white shadow-xl" src="../assets/noahfootball.JPG" alt="">
                    </div>
                    <div class="container flex flex-col items-center">
                        <h1 class="text-white font-thin text-xl italic text-center mt-5 sm:mt-0 md:mr-10">"Teamwork is the only way to accomplish a task worth accomplishing".</h1>
                        <span class="text-white font-thin text-base sm:mr-10">-me</span>

                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 sm:ml-0">Through my years of organized sports, I have truly learned the value of teamwork. Having acted as both a leader and a follower, I understand the actions required in order to accomplish the greater goal. For me, winning teams are united by a single cause. It is the job of the leader to promote that vision, and the job of the followers to help carry the mission to completion.</span>
                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 sm:ml-0"> My knowledge of teamwork and team-building helps me in all aspects of life. From group projects in college, to building friendships with classmates and coworkers. As a Computer Science major, I have quickly understood the great value of communication with others. Projects with little to no communication always end in disaster, whereas constant and effective communication most often results in success.  </span>
                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 sm:ml-0">Overall, the value of Teamwork and communication that I've learned from years of sports has been invaluable. I can both follow a leader with an important goal, and lead a team by uniting them under a single mission.</span>


                    </div>
                </div>
            </div>

        </div>

</Modal>
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

            let section = document.querySelector('#aboutSection');
            if(this.showAboutSection == false){
                this.scrollToTop();
                this.showAboutSectionTitle = false;
                this.showDenver = false;
                this.showUnion = false;
            }else{
                this.scrollToElement(section);
                console.log("This is working.")
                // showTitle
                setTimeout(()=>{this.showAboutSectionTitle = true}, 500);
                // showDenver
                setTimeout(()=>{this.showDenver = true}, 1500);
                // showUnion
                setTimeout(()=>{this.showUnion = true}, 2500);


            }
        },
        scrollToElement(element){
            element.scrollIntoView({behavior:'smooth'});
        },
        scrollToTop(){
            window.scrollTo({behavior:'smooth',top:0,left:0});
        },
        checkScreen() {
            console.log('Checking Screen')
            const windowWidth = window.innerWidth;
            console.log(windowWidth)
            if (windowWidth <= 640){
                this.mobileHero = true;
                console.log("Mobile Hero!")
                return;
            }
            this.mobileHero = false;
            return;
        },
        closeModal(){
            this.showTeamworkModal = false;
        },
    },
    data(){
        return {
            // for Mobile Styling
            mobileHero: false,

            // main section shows
            showAboutSection: false,
            showProjectSection: false,
            showContactSection: false,

            // About Section different timing triggers
            showAboutSectionTitle: false,
            showDenver: false,
            showUnion: false,

            // About Section Modals
            showTeamworkModal: false,
        }
    },
    mounted(){
        this.checkScreen();
        window.addEventListener('resize',this.checkScreen);
    }
}
</script>

<style>

</style>