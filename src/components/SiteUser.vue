<script setup>
import { ref } from "vue";
import router from "../router";
import { auth } from "../firebase/index";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
const email = ref("");
const password1 = ref("");
const registerUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then(() => {
    router.push("./purchase");
  });
  console.log(user);
};

const signInUser = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password1.value);
    router.push("/purchase");
  } catch (error) {
    console.log(error);
  }
  return { email, password1 };
};
</script>

<template>
  <div class="usercontainer">
    <div class="container1">
      <h2>Login by Google</h2>
      <button @click="registerUserByGoogle()">Google</button>
    </div>
    <div class="container1">
      <h2>Login by Email</h2>
      <form @submit.prevent="signInWithEmailAndPassword()">
        <input v-model="email" type="email" placeholder="email" /> <br />
        <input v-model="password1" type="password" placeholder="password" /> <br />
        <input type="submit" value="Login" @click="signInUser()" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.usercontainer {
  min-height: 700px;
}
h2 {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
}

button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
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

.container1 {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20%;
  margin-right: 20%;
  padding: 20px;
  border-style: solid;
  border-width: 4px;
  background-color: deepskyblue;
}
</style>
