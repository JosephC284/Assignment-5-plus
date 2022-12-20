<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
console.log()

let remove = (index) => {
  delete store.cart[index]
  console.log(index);
}

console.log(store.cart)


</script>

<template>
  <div class="box">
    <p v-for="movie of store.cart">Movie Title: {{ movie.data.title }}</p>
    <img v-for="movie of store.cart" :src= "`https://image.tmdb.org/t/p/w500${movie.data.poster}`" 
    @click = remove(movie.id) />
  </div>
</template>

<style scoped>
.box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

p {
  grid-column-start: 1;
  grid-column-end: 1;
}
img {
  width: 200px;
  height: 300px;
  grid-column-start: 2;
  grid-column-end: 2;
}
</style>
