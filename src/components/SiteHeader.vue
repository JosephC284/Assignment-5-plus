<script setup>

const props = defineProps(["login"]);
</script>

<template>
  <div class="container1">
    <p>Movie World</p>
    <RouterLink to="/account" custom v-slot="{ navigate }">
      <button v-if="login" @click="navigate" role="link">Login</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.container1 {
  margin: 0px;
  text-align: center;
  background-color: deepskyblue;
  border-style: solid;
  border-width: 4px;
}

p {
  font-size: 50px;
  font-family: Impact, "Haettenschweiler", sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  width: 200px;
}
</style>
