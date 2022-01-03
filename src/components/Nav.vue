<template>
    <div class="bg-gray-100 h-16 rounded-xl shadow-lg">
        <div class="container flex flex-row min-w-full h-16 items-center justify-between">
            <a href="/" class="text-xl sm:text-3xl sm:ml-4 ml-2">Noah's Portfolio</a>
            <div class="container flex flex-row justify-end mr-4 gap-4 w-3/12" v-show="!mobile">
                <img src="../assets/github.png" alt="" srcset="" class="w-10 h-10 mt-1 rounded-full shadow-xl hover:scale-110 transition duration-300 hover;brightness-110" @click="sendToGithub">
                <img src="../assets/linkedin.png" alt="" srcset="" class="w-10 h-10 mt-1 rounded-sm shadow-xl hover:scale-110 transition duration-300 hover:brightness-110" @click="sendToLinkedin">
                <button class="sm:text-xl hover:text-white hover:bg-blue-500 transition duration-300 bg-gray-200 rounded-lg p-2 shadow-md" active-class="bg-blue-400 text-white">Contact</button>
            </div>
             <svg class="w-6 h-6 mr-4 focus:none" @click="mobileNav = !mobileNav" id='menu-icon' v-show="mobile" aria-hidden="true" focusable="false" data-prefix="far" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg>
        </div>
    </div>
    <transition name="slide-fade">
       <ul class="container bg-gray-200 w-9/12 h-full absolute flex flex-col bg-opacity-90 z-30 rounded-r-xl" v-show="mobileNav">
                <!-- <router-link @click="toggleMobileNav" v-if="loggedIn" class = "container w-2/3 flex justify-around items-center mt-2 p-3 hover:bg-red-500 rounded-lg transition duration-500 ease-in-out transform" to="/account">
                    <img :src="userData.photo" alt="" srcset="" class="rounded-full w-12 h-12 border-2">
                    <Coin v-if="user.data != null" :coins="coins" @change="listenForCoins" class="w-12 h-12"/>
                </router-link>
                <router-link @click="toggleMobileNav" class = "container mb-2 mt-2 w-2/3 flex justify-center items-center p-3 bg-white opacity-100 hover:bg-red-500 hover:text-white rounded-lg transition duration-500 ease-in-out transform" active-class="bg-red-500 text-white" to="/" >About</router-link> 
                <router-link @click="toggleMobileNav" class = "container mb-2 w-2/3 flex justify-center items-center p-3 bg-white hover:bg-green-500 hover:text-white rounded-lg transition duration-500 ease-in-out transform" to="#" >Projects</router-link> -->
                
        </ul>
    </transition>
</template>

<script>
export default {
    
    mounted(){
        this.checkScreen();
        window.addEventListener('resize',this.checkScreen)
    },
    methods: {
         checkScreen() {
             console.log('Checking Screen')
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 450){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        sendToGithub(){
            window.open('https://github.com/vansickn');
        },
        sendToLinkedin(){
            window.open('https://www.linkedin.com/in/noah-vansickle-b68131191/');
        },
    },
    data(){
        return{
            mobile: false,
            mobileNav: false,
        }
    }

}
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
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

</style>