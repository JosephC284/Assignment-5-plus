<script setup>
import { ref } from "vue";
import router from "../router";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const passcheck = ref(false);
const username = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");

const registerUserByEmail = async () => {
  if (password1.value !== password2.value) {
    passcheck.value = true;
    return;
  } else {
    router.push("/purchase");
  }
  try {
    await createUserWithEmailAndPassword(auth, email.value, password1.value);
  } catch (error) {
    console.log(error);
  }
};

const registerUserByGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("./purchase");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="registercontainer">
    <div class="container2">
      <h2>Register by Google</h2>
      <button @click="registerUserByGoogle">Google</button>
    </div>
    <div class="container2">
      <h2>Register by email</h2>
      <form @submit.prevent="registerUserByEmail()">
        <input v-model="username" type="text" placeholder="username" />
        <input v-model="email" type="email" placeholder="email" />
        <input v-model="password1" type="password" placeholder="password" />
        <input v-model="password2" type="password" placeholder="re-enter password" />
        <input type="submit" value="Register" />
      </form>
      <div v-if="passcheck">
        <p>Passwords do not match</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
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

h2 {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

.registercontainer {
  min-height: 700px;
}

.container2 {
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
