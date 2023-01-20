<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
console.log();
</script>

<template>
  <div class="cartcontainer">
    <p class="cart">
      Here are the movies you have selected. If you would like to remove any items from
      the cart, click on the remove button. Thank you for visiting this website.
    </p>
    <div class="box" v-for="movie in Array.from(store.cart.values())">
      <h2>{{ movie.title }}</h2>
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
      <h2>{{ movie.date }}</h2>
      <button @click="store.removeFromCart(movie.id)">Remove</button>
    </div>
  </div>
</template>

<style scoped>
.cartcontainer {
  min-height: 700px;
}

h2 {
  text-align: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 40px;
  margin-top: 30px;
}

button {
  width: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}

.cart {
  margin: 20px;
  font-size: 20px;
  border-style: solid;
  border-width: 4px;
  border-radius: 10px;
  background-color: yellow;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
}

.box {
  background-color: deepskyblue;
  margin: 50px;
  margin-left: 30%;
  margin-right: 30%;
  border-style: solid;
  border-width: 4px;
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
</style>
