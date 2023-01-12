<script setup>
import { useStore } from "../store/index.js";
import router from "../router";

const store = useStore();
console.log();

let remove = (index) => {
  delete store.cart[index];
  console.log(index);
};

function cartEmpty() {
  router.push("/thanks");
}
</script>

<template>
  <div>
    <p class="cart">
      Here are the movies you have selected. If you would like to remove any items from
      the cart, click on the poster. To purchase your items, please click on the buy
      button at the bottom of the page.
    </p>
    <div class="box">
      <img
        v-for="movie of store.cart"
        :src="`https://image.tmdb.org/t/p/w500${movie.data.poster}`"
        @click="remove(movie.id)"
      />
    </div>
    <button @click="cartEmpty()">Buy</button>
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
.cart {
  margin: 20px;
  font-size: 20px;
  border-style: solid;
  border-width: 4px;
  background-color: yellow;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
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
