<template>
    <div class="bg-gray-100 h-16 rounded-xl shadow-lg">
        <div class="container flex flex-row min-w-full h-16 items-center justify-between">
            <router-link to="/" class="text-3xl ml-4">Noah's Portfolio</router-link>
            <div class="container flex flex-row justify-end mr-4 gap-2 w-52">
                <router-link to="/about" class="text-xl hover:text-white hover:bg-red-500 transition duration-300 bg-gray-200 rounded-lg p-2 shadow-md" active-class='bg-red-400 transition duration-300 text-white'>About</router-link>
                <router-link to="/projects" class="text-xl hover:text-white hover:bg-green-500 transition duration-300 bg-gray-200 rounded-lg p-2 shadow-md" active-class="bg-green-400 text-white">Projects</router-link>
                <router-link to="/hey" class="text-xl hover:text-white hover:bg-blue-500 transition duration-300 bg-gray-200 rounded-lg p-2 shadow-md" active-class="bg-blue-400 text-white">Contact</router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>