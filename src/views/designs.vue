<template>
  <div class="min-w-full min-h-screen bg-gradient-to-t from-indigo-500 to-purple-300 m-0 p-0" id="designsdiv">
      <h1 class="text-5xl sm:text-7xl text-white font-thin pt-20 mb-2">Welcome to My Designs</h1>
      <h1 class="text-white font-thin text-xs sm:text-base">*this is a page for the AVA-282 Digital Aesthetics Class</h1>
      <div class="container flex flex-col w-11/12 sm:w-8/12 justify-center items-center mx-auto mt-5">
        <h1 class="text-4xl font-thin self-start mb-3 text-slate-200">Assignments</h1>
        <!-- 10 bad designs -->
        <div class="container flex flex-row items-center justify-between bg-gradient-to-r from-gray-600 to-black rounded-2xl shadow-xl p-6 hover:scale-105 transition duration-300 cursor-pointer">
            <div class="container flex flex-row items-center gap-2 sm:gap-7">
                <h1 class="text-2xl sm:text-5xl lg:text-6xl -mb-2">🤮</h1>
                <h1 class="text-white font-thin text-lg sm:text-2xl md:text-4xl lg:text-6xl">10 bad designs</h1>
            </div>
            <h1 class="text-white text-sm sm:text-lg self-center justify-self-center">01/06/2022</h1>
        </div>
        <!-- END 10 bad designs -->
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        scrollToElement(element){
            element.scrollIntoView({behavior:'smooth'});
        },
    },
    mounted(){
        let designsdiv = document.querySelector('#designsdiv');
        this.scrollToElement(designsdiv);
    }
}
</script>

<style>

</style>