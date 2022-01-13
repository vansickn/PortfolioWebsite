<template>
  <div class="min-w-full min-h-screen bg-gradient-to-t from-indigo-500 to-purple-300 m-0 p-0" id="designsdiv">
      <h1 class="text-5xl sm:text-7xl text-white font-thin pt-20 mb-2">Welcome to My Designs</h1>
      <h1 class="text-white font-thin text-xs sm:text-base">*this is a page for the AVA-282 Digital Aesthetics Class</h1>
      <div class="container flex flex-col w-11/12 sm:w-8/12 justify-center items-center mx-auto mt-5 gap-4">
        <h1 class="text-4xl font-thin self-start text-slate-200 -mb-2">Assignments</h1>
        <!-- 10 bad designs -->
        <div class="container flex flex-row items-center justify-between bg-gradient-to-r from-gray-600 to-black rounded-2xl shadow-xl p-6 md:hover:scale-105 transition duration-300 cursor-pointer" @click="showBadDesigns = true">
            <div class="container flex flex-row items-center gap-2 sm:gap-7">
                <h1 class="text-2xl sm:text-5xl lg:text-6xl sm:-mb-2">🤮</h1>
                <h1 class="text-white font-thin text-lg sm:text-2xl md:text-4xl lg:text-6xl">10 bad designs</h1>
            </div>
            <h1 class="text-white text-sm sm:text-lg self-center justify-self-center">01/06/2022</h1>
        </div>
        <!-- END 10 bad designs -->
        <!-- Project 1 -->
        <div class="container flex flex-row items-center justify-between bg-gradient-to-r from-gray-600 to-black rounded-2xl shadow-xl p-6 md:hover:scale-105 transition duration-300 cursor-pointer" @click="showProject1 = true">
            <div class="container flex flex-row items-center gap-2 sm:gap-7">
                <h1 class="text-2xl sm:text-5xl lg:text-6xl -mb-2">☝️</h1>
                <h1 class="text-white font-thin text-lg sm:text-2xl md:text-4xl lg:text-6xl">Project 1</h1>
            </div>
            <h1 class="text-white text-sm sm:text-lg self-center justify-self-center">01/13/2022</h1>
        </div>
        <!-- END Project 1 -->
      </div>
  </div>
  <!-- BAD DESIGNS -->
  <Modal
    v-model="showBadDesigns"
    :close="closeModal"
    >
        <div class="bg-gradient-to-r from-gray-700 to-black rounded-xl w-11/12 sm:w-10/12 h-auto pb-5">
            <div class="container flex flex-col gap-5 items-center justify-start mx-auto min-w-full">
                <svg class="w-8 h-8 mr-2 text-white mt-1 self-end absolute hover:text-red-500 transition duration-300 cursor-pointer" @click="closeModal()" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <div class="container flex flex-row justify-center items-center w-12/12 gap-3 mx-auto">
                    <h1 class="text-2xl sm:text-5xl lg:text-6xl sm:mt-7 mt-6">🤮</h1>
                    <h1 class="sm:text-4xl lg:text-6xl text-2xl font-light font-sans text-white mt-5 text-left"> 10 Bad Designs</h1>
                </div>
                <div class="grid md:grid-cols-4 lg:grid-cols-5 justify-items-center p-5 gap-5 items-end">
                    <img class="rounded-xl shadow-2xl hover:scale-100 md:hover:scale-150 transition duration-300" src="../assets/rockies.jpeg" alt="">
                    <img class="rounded-xl shadow-2xl hover:scale-100 md:hover:scale-150 transition duration-300" src="../assets/webadvising.jpg" alt="">
                    <img class="w-9/12 rounded-xl shadow-2xl hover:scale-100 md:hover:scale-150 transition duration-300" src="../assets/londonolympics.jpeg" alt="">
                    <img class="rounded-xl shadow-2xl hover:scale-100 md:hover:scale-150 transition duration-300" src="../assets/jump.jpeg" alt="">
                    <img class="rounded-xl shadow-2xl hover:scale-100 md:hover:scale-150 transition duration-300" src="../assets/car.jpeg" alt="">
                    <img class="self-start rounded-xl shadow-2xl hover:scale-100 md:hover:scale-150 transition duration-300" src="../assets/poster.jpeg" alt="">
                    <img class="self-start rounded-xl shadow-2xl hover:scale-100 md:hover:scale-150 transition duration-300" src="../assets/hoes.jpeg" alt="">
                    <img class="self-start rounded-xl shadow-2xl hover:scale-100 md:hover:scale-150 transition duration-300" src="../assets/feethot.png" alt="">
                    <img class="rounded-xl shadow-2xl hover:scale-100 md:hover:scale-150 transition duration-300" src="../assets/schenectadyschools.png" alt="">
                    <img class="self-start rounded-xl shadow-2xl hover:scale-100 md:hover:scale-150 transition duration-300" src="../assets/blueorigin.jpeg" alt="">
                    
                </div>
                <h1 class="text-white mx-auto font-light">*A few examples of what I consider bad design. </h1>
                
            </div>

        </div>

</Modal>
<!-- END BAD DESIGNS -->
<!-- START PROJECT 1 -->
<Modal
    v-model="showProject1"
    :close="closeModal"
    >
        <div class="bg-gradient-to-r from-gray-700 to-black rounded-xl w-11/12 sm:w-10/12 h-auto pb-5">
            <div class="container flex flex-col gap-5 items-center justify-start mx-auto min-w-full">
                <svg class="w-8 h-8 mr-2 text-white mt-1 self-end absolute hover:text-red-500 transition duration-300 cursor-pointer" @click="closeModal()" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <div class="container flex flex-row justify-center items-center w-12/12 gap-3 mx-auto">
                    <h1 class="text-2xl sm:text-5xl lg:text-6xl sm:mt-7 mt-6">☝️</h1>
                    <h1 class="sm:text-4xl lg:text-6xl text-2xl font-light font-sans text-white mt-5 text-left"> Project 1</h1>
                </div>
                <div class="container flex flex-col gap-3">
                    <h1 class="text-2xl md:text-4xl text-center font-thin text-white">Balance</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center w-11/12 mx-auto gap-2">
                        <img class="w-9/12" src="../assets/proj1/balance1.jpg" alt="" srcset="">
                        <img class="" src="../assets/proj1/balance2.jpg" alt="" srcset="">
                    </div>
                    <h1 class="text-2xl md:text-4xl text-center font-thin text-white">Economy</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center w-11/12 mx-auto gap-2">
                        <img class="w-9/12" src="../assets/proj1/economy2.jpg" alt="" srcset="">
                        <img class="" src="../assets/proj1/economy1.jpg" alt="" srcset="">
                    </div>
                    <h1 class="text-2xl md:text-4xl text-center font-thin text-white">Repetition</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center w-11/12 mx-auto gap-2">
                        <img class="" src="../assets/proj1/repetition1.jpg" alt="" srcset="">
                        <img class="" src="../assets/proj1/repetition2.jpg" alt="" srcset="">
                    </div>
                    <h1 class="text-2xl md:text-4xl text-center font-thin text-white">Rhythm</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center w-11/12 mx-auto gap-2">
                        <img class="" src="../assets/proj1/rythm1.jpg" alt="" srcset="">
                        <img class="" src="../assets/proj1/rythm2.jpg" alt="" srcset="">
                    </div>
                    <h1 class="text-2xl md:text-4xl text-center font-thin text-white">Emphasis</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center w-11/12 mx-auto gap-2">
                        <img class="w-9/12" src="../assets/proj1/emphasis2.jpg" alt="" srcset="">
                        <img class="" src="../assets/proj1/emphasis1.jpg" alt="" srcset="">
                    </div>
                    <h1 class="text-2xl md:text-4xl text-center font-thin text-white">Variety</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center w-11/12 mx-auto gap-2">
                        <img class="" src="../assets/proj1/variety1.jpg" alt="" srcset="">
                        <img class="w-9/12" src="../assets/proj1/variety2.jpg" alt="" srcset="">
                    </div>
                </div>
                
            </div>

        </div>

</Modal>
<!-- END PROJECT 1 -->
</template>

<script>
export default {
    methods: {
        scrollToElement(element){
            element.scrollIntoView({behavior:'smooth'});
        },
        closeModal(){
            this.showBadDesigns = false;
            this.showProject1 = false;
        }
    },
    mounted(){
        let designsdiv = document.querySelector('#designsdiv');
        this.scrollToElement(designsdiv);
    },
    data(){
        return {
            showBadDesigns: false,
            showProject1: false,
        }
    }
}
</script>

<style>

</style>