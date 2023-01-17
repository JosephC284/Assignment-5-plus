<script setup>
import { useStore } from "../store/index.js";
import router from "../router";

const store = useStore();
console.log();

let remove = (index) => {
  delete store.cart[index];
};

function cartEmpty() {
  router.push("/thanks");
}
</script>

<template>
  <div v-for="movie in Array.from(store.cart.values())">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
    <h1>{{ movie.title }}</h1>
    <h2>{{ movie.date }}</h2>
    <button @click="store.removeFromCart(movie.id)">Remove</button>
  </div>
</template>

<style scoped>
button {
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}

.box {
  background-color: deepskyblue;
  margin: 50px;
  border-radius: 20px;
  min-height: 700px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 450px;
  padding: 50px;
}

img:hover {
  width: 400px;
  height: 600px;
  transition: 3s;
}
</style>
