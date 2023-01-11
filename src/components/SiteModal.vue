<script setup>
import axios from "axios";
import { useStore } from "../store/index.js";

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);
const store = useStore();

let info = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "ad891932e4907c23fc8a99002a4b5d3f",
      include_adult: "false",
    },
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <div class="modalcontainer">
          <h1>{{ info.title }}</h1>
          <div class="gridcontainer">
            <img :src="`https://image.tmdb.org/t/p/w500${info.poster_path}`" />
            <p class="rdate">Release Date: {{ info.release_date }}</p>
            <p class="overview">Movie Overview: {{ info.overview }}</p>
            <button
              class="buy"
              @click="
                store.addToCart(props.id, {
                  id: info.id,
                  poster: info.poster_path,
                  title: info.title,
                })
              "
            >
              buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.gridcontainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: clamp(280px, 100%, 800px);
  height: 100px;
}
.rdate {
  margin-top: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
}

.overview {
  font-family: Arial, Helvetica, sans-serif;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
}

.buy {
  display: block;
  margin-left: auto;
  margin-right: auto;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 3;
  width: 80px;
}

h1 {
  font-family: Impact, 'Haettenschweiler', sans-serif;
  text-align: center;
  margin: 10px;
  font-size: 40px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  width: 200px;
  height: 300px;
}

.modalcontainer {
  z-index: 100;
}

.modal-outer-container {
  gap: 10px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: skyblue;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
  border-style: solid;
  border-width: 8px;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1f2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}
</style>
