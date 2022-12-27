<script setup>
import { useStore } from "../store/index.js";
import router from "../router";
import SiteModal from "../components/SiteModal.vue";
import { ref } from "vue";

const store = useStore();
await store.getMovies();
const showModal = ref(false);
const selectedId = ref(0);


function addCart() {
  router.push("/cart");
}

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div>
    <div class="bcontainer">
      <button @click="addCart()">Cart</button>
    </div>
    <div class="Movieposter">
      <img
        v-for="movie in store.movies"
        :src="movie.poster"
        @click="openModal(movie.id)"
      />
    </div>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style scoped>
.bcontainer {
  height: 40px;
}
.Movieposter {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  height: 400px;
  border-radius: 10px;
}
button {
  margin: 10px;
  float: right;
  width: 100px;
}
</style>
