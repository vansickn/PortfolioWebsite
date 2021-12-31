<template>
<!-- 11/12 of the grid -->
  <div class="container flex flex-row justify-center">
      <div class="w-11/12 h-50 bg-gray-100 border-2 rounded-lg shadow-lg"
        :class="{
          'border-red-500':border=='red',
          'border-green-500':border=='green',
          'border-blue-500':border=='blue',
          }">
          <button class="text-center text-2xl font-bold">{{header}}</button>
      </div>
  </div>
</template>

<script>
export default {
  props: ['header','border']
}
</script>

<style>

</style>