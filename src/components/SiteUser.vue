<script setup>
import { ref } from "vue";
import router from "../router";

const name = ref("");
const password = ref("");

let wrongLogin = ref(false);
function Login() {
  if (name.value != "tmdb" || password.value != "movies") {
    wrongLogin.value = true;
  } else {
    router.push("/purchase");
  }
}
</script>

<template>
  <div class="usercontainer">
    <div class="logcontainer">
      <h1>Login</h1>
      <form class="loginpage" @submit.prevent>
        <input type="text" placeholder="Name" v-model="name" />
        <input type="password" placeholder="Password" v-model="password" />
        <input class="enter" type="submit" value="Enter" @click="Login" />
      </form>
      <div v-if="wrongLogin">
        <p>Incorrect username or password</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.usercontainer {
  height: 700px;
}
input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
}

p {
  margin: 10px;
  background-color: yellow;
  border-style: solid;
  border-width: 4px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.logcontainer {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 30%;
  height: 340px;
  border-style: solid;
  border-color: black;
  border-width: 4px;
  background-color: deepskyblue;
}

h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 15px;
}

.enter {
  width: 30%;
}
</style>
