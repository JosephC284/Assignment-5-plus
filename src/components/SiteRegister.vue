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
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  console.log(user);
};
</script>

<template>
  <div class="registercontainer">
    <h2>Register by Google</h2>
    <button @click="registerUserByGoogle">Google</button>
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
</template>

<style scoped>
input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 5px;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

.registercontainer {
  min-height: 700px;
}
</style>
