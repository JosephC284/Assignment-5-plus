<script setup></script>

<template>
  <div class="comcontainer">
    <h1 class="info">Company Information</h1>
    <div class="text">
      <p>Email: jchang284@gmail.com</p>
      <p>Phone Number: 647-545-7890</p>
      <p>Support</p>
      <p>FAQ</p>
      <p>About us</p>
    </div>
  </div>
</template>

<style scoped>
.text {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(3,1fr);
}
.comcontainer {
  background-color: black;
  padding: 5px;
}
.info {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-right: 70%;
  border-width: 4px;
  padding: 3px;
  margin-left: 5px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin-left: 5px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
