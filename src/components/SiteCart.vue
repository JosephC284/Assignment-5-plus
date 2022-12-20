<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
console.log()

</script>

<template>
  <div class="box">
    <p v-for="movie in Array.from(store.cart.values())">Movie Title: {{ movie.title }}</p>
    <img
      v-for="movie in Array.from(store.cart.values())"
      :src="`https://image.tmdb.org/t/p/w500${movie.poster}`"
    />
  </div>
</template>

<style scoped>
.box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

img {
  width: 200px;
  height: 300px;
}
</style>
