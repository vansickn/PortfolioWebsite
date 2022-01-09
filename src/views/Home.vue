<template>
<div class="w-screen" id="topScreen">
    <!-- START MAIN HERO -->
    <div class="container flex flex-col sm:justify-center min-w-full gap-2 bg-gray-200 p-4 shadow-lg rounded-xl">
       <img src="../assets/headshot.jpg" alt="" srcset="" class="w-40 h-40 sm:w-60 sm:h-60 rounded-full shadow-2xl hover:scale-105 transition duration-300 hover;brightness-110 select-none self-center"> 
       <h1 class="text-5xl font-bold">Noah VanSickle</h1>
       <span>Senior at Union College</span>
       <div class="container flex flex-row justify-center min-w-full">
           <div class="container flex flex-col items-center w-40">
               <svg class="w-10 h-10 transition duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
               <span>Computer Science</span>
           </div>
           <div class="container flex flex-col items-center w-40">
               <svg class="w-10 h-10 transition duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
               <span>Economics</span>
           </div>
       </div>
    </div>
    <!-- END MAIN HERO -->

    <!-- START ABOUT ME SECTION -->
    <div class="container flex flex-col justify-center h-auto min-w-full bg-gradient-to-r from-pink-100 to-pink-300 bg-opacity-20 rounded-2xl shadow-xl items-center" id="aboutSection">
        <div class="container flex flex-row min-w-full justify-between items-center" @click="toggleAboutSection">
            <svg class="w-10 h-10 ml-3 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
            <h1 class="mt-5 mb-5 font-bold text-5xl w-11/12 select-none">About Me</h1>
            <svg class="w-10 h-10 mr-3 transition duration-300" :class="{'rotate-180 transition duration-300':showAboutSection}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        <div class="container flex flex-col min-w-full transition duration-300 items-center justify-start gap-2 pt-5 pb-10 min-h-screen" id="aboutSectionFull" :class="{'hidden':showAboutSection == false,'h-auto':showAboutSection == true}">
            <h1 class="hidden" id="cometome"></h1> 
            <!-- START GRID -->
            <div class="grid grid-cols-1 lg:grid-cols-3 w-11/12 justify-items-center">
                <!-- LEFT GRID -->
                <transition name="slide-fade">
                    <div class="container flex flex-col items-center justify-start gap-3" v-show="showAboutSectionTitle">
                        <h1 class="text-6xl transition duration-300 opacity-100" :class="{'opacity-100 transition duration-300':showAboutSectionTitle == true}">Hi! I'm Noah</h1>
                        <img class="w-5/12 lg:w-10/12 rounded-2xl shadow-xl hover:scale-105 transition duration-300" src="../assets/noahlong.jpeg" alt="" srcset="">
                        <span class="mb-8 text-xs">Trip to Savannah, GA in the Summer of 2021</span> 
                    </div>
                </transition>
                <!-- MIDDLE GRID -->
                <transition name="up-fade">
                <div class="container flex flex-col items-center justify-start gap-5 lg:ml-5 mb-8" v-show="showDenver">
                        <!-- <br>
                        <h1 class="text-lg opacity-100" :class="{'opacity-100 transition duration-300':showDenver == true}" > I'm originally from Denver, Colorado</h1>
                        <img class="w-9/12 rounded-xl shadow-lg opacity-100 hover:scale-105 transition duration-300" :class="{'opacity-100 transition duration-300':showDenver == true}" src="../assets/Denver.jpeg" alt="" srcset="">
                        <h1 class="text-lg opacity-100" :class="{'opacity-100 transition duration-300':showUnion == true}">I attend Union College in Schenectady, NY</h1>
                        <img class="w-9/12 rounded-xl shadow-lg opacity-100 hover:scale-105 transition duration-300" :class="{'opacity-100 transition duration-300':showUnion == true}" src="../assets/union.jpeg" alt="" srcset="">
                        <h1 class="text-lg opacity-100" :class="{'opacity-100 transition duration-300':showUnion == true}">I Graduate in June, 2022</h1> -->
                        <h1 class="text-4xl lg:text-3xl">Quick Introduction</h1>
                        <div class="container flex flex-row justify-start items-center gap-5 mt-10">
                            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            <span class="text-xl text-left">I grew up in Denver, CO</span>
                        </div>
                        <div class="container flex flex-row justify-start items-center gap-5">
                            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                            <span class="text-lg text-left">Union College in Schenectady, NY</span>
                        </div>
                        <div class="container flex flex-row justify-start items-center gap-5">
                            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="text-xl text-left">Computer Science Major</span>
                        </div>
                        <div class="container flex flex-row justify-start items-center gap-5">
                            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-xl text-left">Economics Minor</span>
                        </div>
                        <div class="container flex flex-row justify-start items-center gap-5">
                            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                            <span class="text-xl text-left">Love Making Videos</span>
                        </div>
                        <div class="container flex flex-row justify-start items-center gap-5">
                            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"></path></svg>
                            <span class="text-xl text-left">Big Space Fan</span>
                        </div>
                        <div class="container flex flex-row justify-start items-center gap-5">
                            <svg class="w-14" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <span class="text-xl text-left">Looking for a Software Engineering Role in New York, NY</span>
                        </div>
                    </div>
                </transition>
                <!-- RIGHT GRID -->
                <transition name="opacity">
                <div class="container flex flex-col items-center justify-start gap-3 lg:ml-5" v-show="showUnion">
                    <h1 class="text-6xl lg:text-3xl">Values</h1>
                    <div class="cursor-pointer grid grid-cols-1 gap-4 bg-gradient-to-r from-cyan-500 to-blue-500 w-8/12 h-auto p-4 place-items-center text-3xl font-bold rounded-2xl shadow-xl text-white hover:scale-110 transition duration-300" @click="showTeamworkModal = true">
                        <div class="container flex flex-row justify-between items-center">
                            <h1 class="text-2xl">Teamwork</h1>
                            <svg class="w-6 h-6 -mt-4 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="container flex flex-row justify-center gap-3">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/baseballnoah.jpg" alt="">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/noahfootball.jpg" alt="">
                        </div>
                    </div>
                    <div class="cursor-pointer grid grid-cols-1 gap-4 bg-gradient-to-r from-sky-500 to-indigo-500 w-8/12 h-auto p-4 place-items-center text-3xl font-bold rounded-2xl shadow-xl text-white hover:scale-110 transition duration-300" @click="showLearningModal = true">
                        <div class="container flex flex-row justify-between items-center">
                            <h1 class="text-2xl">Learning</h1>
                            <svg class="w-6 h-6 -mt-4 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="container flex flex-row justify-center gap-3">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/atomic-habits.jpeg" alt="">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/codecode.jpeg" alt="">
                        </div>
                    </div>
                    <div class="cursor-pointer grid grid-cols-1 gap-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-8/12 h-auto p-4 place-items-center text-3xl font-bold rounded-2xl shadow-xl text-white hover:scale-110 transition duration-300" @click="showProblemSolvingModal = true">
                        <div class="container flex flex-row justify-between items-center">
                            <h1 class="text-lg lg:text-2xl">Problem Solving</h1>
                            <svg class="w-6 h-6 -mt-4 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="container flex flex-row justify-center gap-3">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/puzzle.jpeg" alt="">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/ps.jpeg" alt="">
                        </div>
                    </div>
                    <div class="cursor-pointer grid grid-cols-1 gap-4 bg-gradient-to-r from-purple-500 to-pink-500 w-8/12 h-auto p-4 place-items-center text-3xl font-bold rounded-2xl shadow-xl text-white hover:scale-110 transition duration-300" @click="showCreativityModal = true">
                        <div class="container flex flex-row justify-between items-center">
                            <h1 class="text-2xl">Creativity</h1>
                            <svg class="w-6 h-6 -mt-4 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="container flex flex-row justify-center gap-3">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/youngnoah.jpg" alt="">
                            <img class="w-5/12 border-2 border-white rounded-xl" src="../assets/creative.jpeg" alt="">
                        </div>
                    </div>
                </div> 
                </transition>
            </div>
            <!-- END GRID -->
            <transition name="opacity">
            <div class="container flex flex-row gap-3 lg:-mt-16 mt-5 justify-center animate-bounce cursor-pointer" v-show="showContinueToProjects == true" @click="toggleProjectSection">
                <h1 class="">continue to projects</h1>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </div>
            </transition>
        </div>
        <div id="bottom"></div>
    </div>
    <!-- START PROJECTS SECTION -->
    <div class="container flex flex-col justify-center h-auto min-w-full bg-gradient-to-r from-green-400 to-green-100 bg-opacity-20 rounded-2xl shadow-xl items-center" id="aboutSection">
        <div class="container flex flex-row min-w-full justify-between items-center" @click="toggleProjectSection">
            <svg class="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
            <h1 class="mt-5 mb-5 font-bold text-5xl w-11/12 select-none">Projects</h1>
            <svg class="w-10 h-10 mr-3 transition duration-300" :class="{'rotate-180 transition duration-300':showProjectsSection}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        <div class="container flex flex-col min-w-full transition duration-300 items-center justify-start gap-2 pt-5 pb-10 min-h-screen" id="projectSectionFull" :class="{'hidden':showProjectSection == false,'h-auto':showProjectSection == true}">
            <h1 class="text-4xl font-thin mb-5">Here are a few projects I've worked on</h1>
            <!-- START GRID -->
            <div class="grid grid-cols-1 md:grid-cols-2 w-12/12 lg:w-11/12 justify-items-center gap-y-10">
                <!-- START BETTERTHUMBNAILS -->
                <transition name="up-fade">
                    <div class="container flex flex-col bg-gradient-to-r from-red-700 to-red-900 w-10/12 pb-5 rounded-2xl shadow-2xl hover:scale-110 transition duration-300 cursor-pointer" v-show="showBetterThumbnails" @click="showBetterThumbnailsModal = true">
                        <div class="container flex flex-row mt-3 items-center w-full justify-between">
                            <div class="container flex flex-row justify-start items-start gap-2 sm:gap-5 ml-2">
                                <svg class="w-16 h-10 md:h-14 md:w-20 rounded-xl text-red-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                <div class="container flex flex-col items-start justify-start text-white">
                                    <h1 class="text-base sm:text-xl text-left">Founder</h1>
                                    <span class="text-sm sm:text-base">BetterThumbnails LLC</span>
                                </div>
                            </div>
                            <div class="container flex flex-row w-auto justify-start items-start -mt-8 mr-2">
                                <svg class=" text-white w-5 h-5 md:w-8 md:h-8 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                        <ul class="list-disc w-10/12 mx-auto mt-2 text-white">
                            <li class="text-left font-thin text-sm lg:text-base">Building Web Application for YouTube Creators</li>
                            <li class="text-left font-thin text-sm lg:text-base">A/B Testing for YouTube Thumbnails</li>
                            <li class="text-left font-thin text-sm lg:text-base">Google Cloud Vision for object identification</li>
                        </ul>
                        <h1 class="text-base lg:text-xl font-bold mt-1 mb-1 text-white">Tech</h1>
                        <div class="grid grid-cols-4 w-9/12 self-center justify-items-center items-end text-white">
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12" src="../assets/vue.png" alt="" srcset="">
                                <span class="text-xs sm:text-sm">vue</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12 mb-1" src="../assets/firebase.png" alt="" srcset="">
                                <span class="text-xs sm:text-sm">firebase</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12" src="../assets/node.png" alt="" srcset="">                            
                                <span class="text-xs sm:text-sm">nodejs</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <svg class="w-10/12 mb-3" preserveAspectRatio="xMidYMid" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6"><linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%"><stop offset="0" stop-color="#2298bd"/><stop offset="1" stop-color="#0ed7b5"/></linearGradient><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#a)"/></svg>
                                <span class="text-xs sm:text-sm">tailwind</span>
                            </div>

                        </div>
                    </div>
                </transition>
                <!-- END BETTERTHUMBNAILS -->
                <!-- START SENIORTHESIS -->
                <transition name="up-fade">
                    <div class="container flex flex-col bg-gradient-to-r from-pink-500 to-pink-800 w-10/12 pb-5 rounded-2xl shadow-2xl hover:scale-110 transition duration-300 text-white cursor-pointer" v-show="showSeniorThesis" @click="showSeniorThesisModal = true">
                        <div class="container flex flex-row mt-3 items-center w-full justify-between">
                            <div class="container flex flex-row justify-start items-start gap-2 sm:gap-5 ml-2">
                                <img class="w-12 h-12 md:h-16 md:w-16 rounded-full" src="../assets/union.png" alt="">
                                <div class="container flex flex-col items-start justify-start">
                                    <h1 class="text-base sm:text-xl text-left">Senior Capstone Project</h1>
                                    <span class="text-sm sm:text-base">Union College</span>
                                </div>
                            </div>
                            <div class="container flex flex-row w-auto justify-start items-start -mt-8 mr-2">
                                <svg class="w-5 h-5 md:w-8 md:h-8 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                        <ul class="list-disc w-10/12 mx-auto mt-2">
                            <li class="text-left font-thin text-sm lg:text-base">Experiment to determine the role of Faces in YouTube thumbnails</li>
                            <li class="text-left font-thin text-sm lg:text-base">Web Scaping and Face + Emotion Identification</li>
                        </ul>
                        <h1 class="text-base lg:text-xl font-bold mt-1 mb-1">Tech</h1>
                        <div class="grid grid-cols-4 w-9/12 self-center justify-items-center items-end">
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12" src="../assets/python.png" alt="" srcset="">
                                <span class="text-sm">python</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-12/12" src="../assets/gcloud.png" alt="" srcset="">                            
                                <span class="text-sm">gcloud</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12" src="../assets/soup.png" alt="" srcset="">
                                <span class="text-sm">bsoup</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12" src="../assets/vue.png" alt="" srcset="">
                                <span class="text-xs sm:text-sm">vue</span>
                            </div>
                        </div>
                    </div>
                </transition>
                <!-- END SENIORTHESIS -->
                <!-- START GRANICUS -->
                <transition name="up-fade">
                    <div class="container flex flex-col bg-gradient-to-r from-pink-200 to-orange-100 w-10/12 pb-5  rounded-2xl shadow-2xl hover:scale-110 transition duration-300" v-show="showGranicus">
                        <div class="container flex flex-row mt-3 items-center w-full justify-between">
                            <div class="container flex flex-row justify-start items-start gap-2 sm:gap-5 ml-2">
                                <img class="w-10 h-10 md:h-14 md:w-14" src="../assets/icon-granicus.png" alt="">
                                <div class="container flex flex-col items-start justify-start">
                                    <h1 class="text-base sm:text-xl text-left">JIRA Reporting System</h1>
                                    <span class="text-sm sm:text-base">Granicus, Inc</span>
                                </div>
                            </div>
                            <div class="container flex flex-row w-auto justify-start items-start -mt-8 mr-2">
                                <svg class="w-5 h-5 md:w-8 md:h-8 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                        <ul class="list-disc w-10/12 mx-auto mt-2">
                            <li class="text-left font-thin text-sm lg:text-base">Built and Optimized JIRA reporting system</li>
                            <li class="text-left font-thin text-sm lg:text-base">Designed for Maintainability and Scalability</li>
                            <li class="text-left font-thin text-sm lg:text-base">Trained 3 other departments for use in other JIRA projects</li>
                        </ul>
                        <h1 class="text-base lg:text-xl font-bold mt-1 mb-1">Tech</h1>
                        <div class="grid grid-cols-4 w-9/12 self-center justify-items-center items-end">
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12" src="../assets/python.png" alt="" srcset="">
                                <span class="text-xs sm:text-sm">python</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <svg class="w-10/12" preserveAspectRatio="xMidYMid" width="2500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -30.632388516510233 255.324 285.95638851651023"><linearGradient id="a"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient id="b" x1="98.031%" x2="58.888%" xlink:href="#a" y1=".161%" y2="40.766%"/><linearGradient id="c" x1="100.665%" x2="55.402%" xlink:href="#a" y1=".455%" y2="44.727%"/><path d="M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0z" fill="#2684ff"/><path d="M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667z" fill="url(#b)"/><path d="M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667z" fill="url(#c)"/></svg>
                                <span class="text-xs sm:text-sm">JIRA</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12" src="../assets/bash.png" alt="" srcset="">                            
                                <span class="text-xs sm:text-sm">bash</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12" src="../assets/excelicon.png" alt="" srcset="">
                                <span class="text-xs sm:text-sm">excel</span>
                            </div>

                        </div>
                    </div>
                </transition>
                <!-- END GRANICUS -->
                <!-- START CHILECOLONIAL -->
                <transition name="up-fade">
                    <div class="container flex flex-col bg-gradient-to-r from-red-100 to-red-300 w-10/12 pb-5 rounded-2xl shadow-2xl hover:scale-110 transition duration-300" v-show="showChileColonial">
                        <div class="container flex flex-row mt-3 items-center w-full justify-between">
                            <div class="container flex flex-row justify-start items-start gap-2 sm:gap-5 ml-2">
                                <img class="w-12 h-12 md:h-16 md:w-16 rounded-full border-red-400 border-2" src="../assets/chilecrunch.jpg" alt="">
                                <div class="container flex flex-col items-start justify-start">
                                    <h1 class="text-base sm:text-xl text-left">Batch Tracking + Shipping</h1>
                                    <span class="text-sm sm:text-base">Chile Colonial, Inc</span>
                                </div>
                            </div>
                            <div class="container flex flex-row w-auto justify-start items-start -mt-8 mr-2">
                                <svg class="w-5 h-5 md:w-8 md:h-8 hover:animate-pulse hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                        <ul class="list-disc w-10/12 mx-auto mt-2">
                            <li class="text-left font-thin text-sm lg:text-base">Designed, Built, and Maintained Ruby Web Application</li>
                            <li class="text-left font-thin text-sm lg:text-base">Order shipments correlated with batch codes</li>
                            <li class="text-left font-thin text-sm lg:text-base">Easy to use Interface for CEO</li>
                        </ul>
                        <h1 class="text-base lg:text-xl font-bold mt-1 mb-1">Tech</h1>
                        <div class="grid grid-cols-4 w-9/12 self-center justify-items-center items-end">
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12" src="../assets/ruby.png" alt="" srcset="">
                                <span class="text-xs sm:text-sm">ruby</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12" src="../assets/postgres.png" alt="" srcset="">
                                <span class="text-xs sm:text-sm">postgreSQL</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <svg class="w-10/12 mb-3" preserveAspectRatio="xMidYMid" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6"><linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%"><stop offset="0" stop-color="#2298bd"/><stop offset="1" stop-color="#0ed7b5"/></linearGradient><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#a)"/></svg>
                                <span class="text-xs sm:text-sm">tailwind</span>
                            </div>
                            <div class="container flex flex-col justify-center items-center">
                                <img class="w-10/12" src="../assets/html.png" alt="" srcset="">
                                <span class="text-xs sm:text-sm">html5</span>
                            </div>

                        </div>
                    </div>
                </transition>
                <!-- END CHILECOLONIAL -->
                
                
            </div>
            <!-- END GRID -->
            <div class="" v-show="showSeniorThesis">
                <svg class=" cursor-pointer w-10 h-10 mt-5 md:-mt-10 animate-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
        <div id="bottom"></div>
    </div>
    <div class="container flex flex-col justify-center min-w-full bg-blue-500 bg-opacity-20 rounded-2xl shadow-xl">
        <h1 class="mt-5 mb-5 font-bold text-3xl">Contact</h1>
    </div>
    
</div>
<!-- VALUES MODALS START -->
<!-- Teamwork Value Modal -->
<Modal
    v-model="showTeamworkModal"
    :close="closeModal"
    >
        <div class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl w-10/12 sm:w-8/12 h-auto pb-5">
            <div class="container flex flex-col gap-5">
                <svg class="w-8 h-8 mr-2 mt-1 self-end absolute hover:text-red-500 transition duration-300 cursor-pointer" @click="closeModal()" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <h1 class="sm:text-6xl text-3xl font-thin font-sans mx-auto text-white mt-5">Teamwork</h1>
                <div class="grid md:grid-cols-2 grid-cols-1">
                    <div class="container flex flex-col items-center gap-5">
                        <img class="w-10/12 rounded-2xl border-2 border-white shadow-xl" src="../assets/baseballnoah.jpg" alt="">
                        <img class="w-10/12 rounded-2xl border-2 border-white shadow-xl" src="../assets/noahfootball.jpg" alt="">
                    </div>
                    <div class="container flex flex-col items-center">
                        <h1 class="text-white font-thin text-xl italic text-center mt-5 sm:mt-0 md:mr-10">"Teamwork is the only way to accomplish a task worth accomplishing".</h1>
                        <span class="text-white font-thin text-base sm:mr-10">-me</span>

                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 md:mr-10 md:ml-0 text-sm lg:text-base">Through my years of organized sports, I have truly learned the value of teamwork. Having acted as both a leader and a follower, I understand the actions required in order to accomplish the greater goal. For me, winning teams are united by a single cause. It is the job of the leader to promote that vision, and the job of the followers to help carry the mission to completion.</span>
                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 md:mr-10 md:ml-0 text-sm lg:text-base"> My knowledge of teamwork and team-building helps me in all aspects of life. From group projects in college, to building friendships with classmates and coworkers. As a Computer Science major, I have quickly understood the great value of communication with others. Projects with little to no communication always end in disaster, whereas constant and effective communication most often results in success.  </span>
                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 md:mr-10 md:ml-0 text-sm lg:text-base">Overall, the value of Teamwork and communication that I've learned from years of sports has been invaluable. I can both follow a leader with an important goal, and lead a team by uniting them under a single mission.</span>


                    </div>
                </div>
            </div>

        </div>

</Modal>
<!-- Learning Modal -->
<Modal
    v-model="showLearningModal"
    :close="closeModal"
    >
        <div class="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl w-10/12 sm:w-8/12 h-auto">
            <div class="container flex flex-col gap-5">
                <svg class="w-8 h-8 mr-2 mt-1 self-end absolute hover:text-red-500 transition duration-300 cursor-pointer" @click="closeModal()" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <h1 class="sm:text-6xl text-3xl font-thin font-sans mx-auto text-white mt-5">Learning</h1>
                <div class="grid md:grid-cols-2 grid-cols-1">
                    <div class="container flex flex-col items-center gap-5">
                        <img class="w-10/12 rounded-2xl border-2 border-white shadow-xl" src="../assets/open-book.jpeg" alt="">
                        <img class="w-10/12 rounded-2xl border-2 border-white shadow-xl" src="../assets/learning.jpeg" alt="">
                    </div>
                    <div class="container flex flex-col items-center">
                        <h1 class="text-white font-thin text-xl italic text-center mt-5 sm:mt-0 md:mr-10">"I actively learn something new every single day. There is no point to life if you do not continue to learn."</h1>
                        <span class="text-white font-thin text-base sm:mr-10">-me</span>

                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 md:ml-0 text-sm lg:text-base"> Learning is the most important part of each day for me. I always seek new knowledge and experiences so that I can grow as a person. I hold the notion that a person is either growing, or dying. </span>
                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 md:ml-0 text-sm lg:text-base"> The thing I love most about learning is the applicability of my knowledge on an everyday basis. As I continue to learn, I can expand on my understanding of the world around me. </span>

                        <h1 class="text-left self-center mt-10 mr-10 text-white font-thin text-2xl">What I like Learning about</h1>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:mr-10 mt-5 mb-5">
                            <div class="container flex flex-row text-white items-center gap-3">
                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <h1>Computer Science</h1>
                            </div>
                            <div class="container flex flex-row text-white items-center gap-3">
                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <h1>Economics</h1>
                            </div>
                            <div class="container flex flex-row text-white items-center gap-3">
                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"></path></svg>
                                <h1>Space</h1>
                            </div>
                            <div class="container flex flex-row text-white items-center gap-3">
                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
                                <h1>Psychology</h1>
                            </div>
                            <div class="container flex flex-row text-white items-center gap-3">
                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                <h1>Philosophy</h1>
                            </div>
                            <div class="container flex flex-row text-white items-center gap-3">
                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"></path></svg>
                                <h1>Science</h1>
                            </div>
                            <div class="container flex flex-row text-white items-center gap-3">
                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z" clip-rule="evenodd"></path></svg>
                                <h1>Math</h1>
                            </div>
                        </div>




                    </div>
                </div>
            </div>

        </div>

</Modal>
<!-- Problem Solving Modal -->
<Modal
    v-model="showProblemSolvingModal"
    :close="closeModal"
    >
        <div class="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl w-10/12 sm:w-8/12 h-auto pb-5">
            <div class="container flex flex-col gap-5">
                <svg class="w-8 h-8 mr-2 mt-1 self-end absolute hover:text-red-500 transition duration-300 cursor-pointer" @click="closeModal()" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <h1 class="sm:text-6xl text-3xl font-thin font-sans mx-auto text-white mt-5">Problem Solving</h1>
                <div class="grid md:grid-cols-2 grid-cols-1">
                    <div class="container flex flex-col items-center gap-5">
                        <img class="w-10/12 rounded-2xl border-2 border-white shadow-xl" src="../assets/problem-solving.png" alt="">
                        <img class="w-10/12 rounded-2xl border-2 border-white shadow-xl" src="../assets/onepager.jpeg" alt="">
                        <span class="text-white font-thin -mt-3 text-xs mb-4 ml-3 mr-3 text-center">A "one pager" from Chris Hadfield aboard the Space Shuttle</span>
                    </div>
                    <div class="container flex flex-col items-center">
                        <h1 class="text-white font-thin text-xl italic text-center mt-5 sm:mt-0 md:mr-10">"My optimism and confidence come not from feeling I'm luckier than other mortals, and they sure don't come from visualizing victory. They're the result of a lifetime spent visualizing defeat and figuring out how to prevent it."</h1>
                        <span class="text-white font-thin text-base sm:mr-10">-Chris Hadfield</span>

                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 md:ml-0 text-sm lg:text-base "> In my eyes, strong problem solving is one of the most vital attributes to success in life. When faced with a difficult challenge, I find that knowledge alone cannot lead you to a solution. Perserverance, persistence, and an iterative approach have all contributed massively towards problems that I have faced in the past.  </span>
                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 md:ml-0 text-sm lg:text-base"> Whether the problem is trivial or complex, it is always neccessary to first understand and define the problem that you face. In this lense, I adopt the "First Principles" approach to thinking. Popularized by Elon Musk, First Principles allows the problem solver to get to the root of any issue, reason up from there. This is in stark contrast to reasoning by analogy, in which the problem solver can only relate the problem to similar problems, thus not grasping the complete picture.</span>
                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 md:ml-0 text-sm lg:text-base"> In any problem I approach, I use the First Principles approach to truly understand what must be accomplished. Usually, this is the hardest part of the problem. From there, I determine what steps are neccessary to achieve my goal.</span>
                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 md:ml-0 text-sm lg:text-base"> Since adopting this mental framework, I have been able to apply it to every aspect of my life. From friendships, class projects, to founding an LLC. The possibilities of reasoning are infinite. </span>
                    </div>
                </div>
            </div>

        </div>

</Modal>
<!-- Creativity Modal -->
<Modal
    v-model="showCreativityModal"
    :close="closeModal"
    >
        <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl w-10/12 sm:w-8/12 h-auto pb-5">
            <div class="container flex flex-col gap-5">
                <svg class="w-8 h-8 mr-2 mt-1 self-end absolute hover:text-red-500 transition duration-300 cursor-pointer" @click="closeModal()" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <h1 class="sm:text-6xl text-3xl font-thin font-sans mx-auto text-white mt-5"> Creativity</h1>
                <div class="grid md:grid-cols-2 grid-cols-1">
                    <div class="container flex flex-col items-center gap-5">
                        <iframe class="w-10/12 rounded-2xl border-2 border-white" width="560" height="315" src="https://www.youtube.com/embed/EF50oyEu6Hg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <img class="w-10/12 rounded-2xl border-2 border-white shadow-xl" src="../assets/creative.jpeg" alt="">
                    </div>
                    <div class="container flex flex-col items-center">
                        <h1 class="text-white font-thin text-xl italic text-center mt-5 sm:mt-0 md:mr-10">"Creativity is intelligence having fun"</h1>
                        <span class="text-white font-thin text-base sm:mr-10">-Albert Einstein</span>

                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 md:ml-0 text-sm lg:text-base "> Since I have been old enough to remember, I have always had the urge to be creative. This has taken many forms over the years, but my creative nature persists. The video embedded in this modal was created by me in 2010, when I was 10 years old. 6 months later it won a national video contest for the United States Department of Agricultre in which I was awarded 1000 dollars. The video was shown in the White House, and I met with the United States Surgeon General.</span>
                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 md:ml-0 text-sm lg:text-base "> Every endeavor that I take on must require a level of creativity in order for me to truly do my best. I love sinking my teeth into a challenging project, and using every drop of creativity in order to create something special.</span>
                        <span class="text-left self-start mt-5 text-white mr-2 ml-2 sm:mr-10 md:ml-0 text-sm lg:text-base "> These days, my creativity takes the form of building awesome software. From refactoring a reporting system to building a beautiful user interface, the possibilities of creativity in software is endless. </span>


                    </div>
                </div>
            </div>

        </div>

</Modal>
<!-- VALUES MODALS END -->

<!-- PROJECT MODALS START -->
<!-- Better Thumbnails Modal -->
<Modal
    v-model="showBetterThumbnailsModal"
    :close="closeModal"
    >
        <div class="bg-gradient-to-r from-red-700 to-red-900 rounded-xl w-10/12 sm:w-8/12 h-auto pb-5">
            <div class="container flex flex-col gap-5">
                <svg class="w-8 h-8 mr-2 mt-1 self-end absolute hover:text-red-500 transition duration-300 cursor-pointer" @click="closeModal()" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <h1 class="sm:text-6xl text-3xl font-thin font-sans mx-auto text-white mt-5 text-center"> BetterThumbnails LLC</h1>
                <div class="container flex flex-col">
                    <div class="grid grid-cols-1 md:grid-cols-2 w-11/12 justify-items-center mx-auto">
                        <div class="container flex flex-col">
                            <img class="rounded-2xl md:w-9/12 mx-auto shadow-2xl hover:scale-125 transition duration-300" src="../assets/bt2.png" alt="">
                            <span class="text-sm text-white font-thin mb-5 text-center mt-1">Screenshot of the home page of BetterThumbnails.com</span>
                        </div>
                        <div class="container flex flex-col justify-start items-center w-10/12 mx-auto gap-3">
                            <h1 class="text-white text-left self-start text-2xl lg:text-3xl font-light">I founded BetterThumbnails LLC in November, 2021 to help YouTube Creators understand more about their thumbnails.</h1>
                            <span class="text-base lg:text-lg text-white font-light text-left self-start">The objective of the company is to deliver the best data-centric approach to designing and testing YouTube thumbnails. </span>
                        </div>
                    </div>
                    <h1 class="text-5xl text-white self-center font-light text-center mb-5 mt-5">Main Functionality</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 w-11/12 justify-items-center mx-auto">
                        <div class="container flex flex-col justify-start items-center w-10/12 mx-auto gap-3">
                            <h1 class="text-white text-left self-start text-2xl lg:text-3xl font-light"> Using Data to find the perfect Thumbnail for a creator's video.</h1>
                            <span class="text-sm lg:text-lg text-white font-light text-left self-start mb-5">At it's core, BetterThumbnails.com is a community polling website. Users can create tests and vote on others in order to hone their thumbnail designs.</span>
                            <span class="text-sm lg:text-lg text-white font-light text-left self-start mb-5"> In the "My Tests" page, the changing votes are shown live to the user, to see people's opinions in real time. </span>

                        </div>
                        <div class="container flex flex-col">
                            <img class="rounded-2xl w-12/12 mx-auto shadow-2xl hover:scale-125 transition duration-300" src="../assets/bt3.png" alt="">
                            <span class="text-sm text-white font-thin mb-5 text-center">Screenshot of "My Tests" page</span>
                            <!-- <span class="text-lg font-light text-white">The photo above shows the "My Tests" portion of the website, in which the user can spectate </span> -->
                        </div>
                    </div>
                    <h1 class="text-5xl text-white self-center font-light text-center mb-5 mt-5">Coins + Sample Sizes</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 w-11/12 justify-items-center mx-auto">
                        <div class="container flex flex-col">
                            <img class="rounded-2xl w-12/12 mx-auto shadow-2xl hover:scale-125 transition duration-300" src="../assets/btcreatetest.png" alt="">
                            <span class="text-sm text-white font-thin mb-5 text-center">Screenshot of "Create Test" page</span>
                            <!-- <span class="text-lg font-light text-white">The photo above shows the "My Tests" portion of the website, in which the user can spectate </span> -->
                        </div>
                        <div class="container flex flex-col justify-start items-center w-10/12 mx-auto gap-3">
                            <h1 class="text-white text-left self-start text-2xl lg:text-3xl font-light"> I needed a way to incentivize users voting on other tests.</h1>
                            <span class="text-sm lg:text-lg text-white font-light text-left self-start mb-5">To solve this problem, I decided a currency system was the best way to make sure that users's tests were voted on. A user first must vote on a specific number of thumbnail tests before they are able to create one themselves. This guarantees that a user's tests will be seen, and for valuable data to be returned to them.</span>
                            <span class="text-sm lg:text-lg text-white font-light text-left self-start mb-5"></span>
                        </div>
                    </div>
                    <h1 class="text-2xl md:text-5xl text-white self-center font-light text-center mb-5 mt-5">Further Developments</h1>
                    <h1 class="mb-5 text-xl md:text-3xl text-white font-thin w-11/12 mx-auto text-center">As of November, 2021:  BetterThumbnails is now recognized as a Limited Liability Corporation (LLC) in the state of Colorado.</h1>
                    <h1 class="text-sm md:text-2xl font-thin text-white mx-auto w-11/12 text-center">The main functionality of the website has largely been completed. I am currently implementing the following things, but it currently must take a backseat to my University studies. </h1>
                    <div class="grid md:grid-cols-2 grid-cols-1 w-11/12 mx-auto mt-3 gap-3 justify-items-center">
                        <div class="container flex flex-col items-center">
                            <h1 class="font-thin text-white text-4xl">YouTube API</h1>
                            <span class="text-white font-light mt-2">One of the most valuable implementations I'm currently working on is the YouTube Data API, specifically the scope which allows BetterThumbnails to manage the user's YouTube channel. The ultimate goal is for the user to plug in two or more thumbnails, and for BetterThumbnails to take care of the rest. This means performing the actual A/B test, and then publishing the video to YouTube. Additionally, this would give BetterThumbnails the ability to perform testing on actual YouTube users, instead of just users of the site. *This will require a Chrome extension, which has been added to the list of things I need to do :)</span>
                        </div>
                        <div class="container flex flex-col items-center">
                            <h1 class="font-thin text-white text-4xl">Google Cloud Vision</h1>
                            <span class="text-white font-light mt-2">I'm implementing Google Cloud Vision's image API in order to determine certain aspects of thumbnails already uploaded, and currently being tested by the website. I'm doing this to help the user understand the characteristics of their most popular thumbnails, in order to emulate and optimize their thumbnail making process.</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

</Modal>
<!-- Senior Thesis Modal -->
<Modal
    v-model="showSeniorThesisModal"
    :close="closeModal"
    >
        <div class="bg-gradient-to-r from-pink-500 to-pink-800 rounded-xl w-10/12 sm:w-8/12 h-auto pb-5">
            <div class="container flex flex-col gap-5">
                <svg class="w-8 h-8 mr-2 mt-1 self-end absolute hover:text-red-500 transition duration-300 cursor-pointer" @click="closeModal()" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <h1 class="sm:text-6xl text-3xl font-thin font-sans mx-auto text-white mt-5 text-center"> Senior Thesis Project</h1>
                <div class="container flex flex-col">
                    
                </div>
            </div>

        </div>

</Modal>
<!-- PROJECT MODALS END -->
</template>

<script>
//img loading
import youngnoah from '../assets/youngnoah.jpg';
import noahfootball from '../assets/noahfootball.jpg';
import baseballnoah from '../assets/baseballnoah.jpg';

import Card from '../components/Card.vue';
import {ref} from 'vue';
export default {
    components: { Card },
    methods: {
        toggleAboutSection(){
            this.showAboutSection = !this.showAboutSection;
            setTimeout(()=>{
                let section = document.querySelector('#aboutSectionFull');
                if(this.showAboutSection == false){
                    this.scrollToTop();
                    this.showAboutSectionTitle = false;
                    this.showDenver = false;
                    this.showUnion = false;
                    this.showContinueToProjects = false;
                }else{
                    this.scrollToElement(section);
                    console.log("This is working.")
                    // showTitle
                    setTimeout(()=>{this.showAboutSectionTitle = true}, 500);
                    // showDenver
                    setTimeout(()=>{this.showDenver = true}, 1500);
                    // showUnion
                    setTimeout(()=>{this.showUnion = true}, 2500);

                    setTimeout(()=>{this.showContinueToProjects = true}, 4000);
                }
            },0)
        },
        toggleProjectSection(){
            console.log('project section')
            if(this.showAboutSection){this.toggleAboutSection();}
            this.showProjectSection = !this.showProjectSection;
            setTimeout(()=>{
                let section = document.querySelector('#projectSectionFull');
                if(this.showProjectSection == false){
                    this.scrollToTop();
                    this.showGranicus = false;
                    this.showChileColonial = false;
                    this.showBetterThumbnails = false;
                    this.showSeniorThesis= false;
                }else{
                    this.scrollToElement(section);
                    setTimeout(()=>{this.showBetterThumbnails = true}, 500);
                    setTimeout(()=>{this.showSeniorThesis = true}, 700);
                    setTimeout(()=>{this.showGranicus = true}, 900);
                    setTimeout(()=>{this.showChileColonial = true}, 1100);
                }
            },0)
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
            // values
            this.showTeamworkModal = false;
            this.showLearningModal = false;
            this.showProblemSolvingModal = false;
            this.showCreativityModal = false;
            
            // projects
            this.showBetterThumbnailsModal = false;
            this.showSeniorThesisModal = false;
            this.showGranicusModal = false;
            this.showChileColonialModal = false;

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
            showContinueToProjects: false,

            // About Section Modals
            showTeamworkModal: false,
            showLearningModal: false,
            showProblemSolvingModal: false,
            showCreativityModal: false,

            // Project timing Triggers
            showGranicus: false,
            showChileColonial: false,
            showBetterThumbnails: false,
            showSeniorThesis: false,

            // Project Section Modals
            showBetterThumbnailsModal: false,
            showSeniorThesisModal: false,
            showGranicusModal: false,
            showChileColonialModal: false,
        }
    },
    mounted(){
        this.checkScreen();
        window.addEventListener('resize',this.checkScreen);
    }
}
</script>

<style>
/* original slide fade */
.slide-fade-enter-active {
  transition: all .3s ease-out;
  /* transform: translateX(0); */
  opacity: 100;
  
}
.slide-fade-leave-active {
  transition: all .3s ease-out;
  opacity: 0;
}
.slide-fade-enter-from
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-300px);
  opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(-300px);
    opacity: 0;
}
/* slide fade down */
.down-fade-enter-active {
  transition: all .3s ease-out;
  /* transform: translateX(0); */
  opacity: 100;
  
}
.down-fade-leave-active {
  transition: all .3s ease-out;
  opacity: 0;
}
.down-fade-enter-from
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-300px);
  opacity: 0;
}

.down-fade-leave-to {
    opacity: 0;
}

/* slide fade up */
.up-fade-enter-active {
  transition: all .3s ease-out;
  /* transform: translateX(0); */
  opacity: 100;
  
}
.up-fade-leave-active {
  transition: all .3s ease-out;
  opacity: 0;
}
.up-fade-enter-from
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(300px);
  opacity: 0;
}

.up-fade-leave-to {
    opacity: 0;
}

/* only opacity */
.opacity-enter-active {
  transition: all .3s ease-out;
  /* transform: translateX(0); */
  opacity: 100;
  
}
.opacity-leave-active {
  transition: all .3s ease-out;
  opacity: 0;
}
.opacity-enter-from
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.opacity-leave-to {
    opacity: 0;
}
</style>
