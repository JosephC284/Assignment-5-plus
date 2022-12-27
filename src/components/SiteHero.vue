<script setup>
</script>

<template>
  <div class="imgcontainer">
    <img
      src="https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.jpg?s=612x612&w=0&k=20&c=XwQxmfrHb-OwV5onPUW5ApB4RaGBK7poSIzZj4q_N_g="
      alt=""
    />
    <div class="pcontainer">
      <p class="intro">Here, you can find the most popular movies! Login to gain the ability to purchase these popular movies!</p>
    </div>
  </div>
</template>

<style scoped>
.imgcontainer {
  background-color: black;
  position: relative;
  text-align: center;
  border-style: solid;
  border-width: 4px;
  border-color: black;
}

img {
  position: block;
  height: 800px;
  width: 100%;
}

.intro {
  position: absolute;
  top: 30%;
  left: 60%;
  transform: translate(-70%, -40%);
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}
</style>
