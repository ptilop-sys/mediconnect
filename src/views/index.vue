<script lang="ts" setup>
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../database/firebase";

async function testFunction() {
  const docRef = doc(firestore, "users", "default-user-0");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document Data: ", docSnap.data());
  } else {
    console.log("No such document");
  }
}
</script>

<template>
  <v-container>
    <div class="d-flex flex-column justify-space-around">
      <v-row>
        <v-spacer></v-spacer>
        <img
          class="justify-center img-size"
          src="../assets/icons/hero.png"
          alt="mediconnect main logo"
        />
        <v-spacer></v-spacer>
      </v-row>
      <v-spacer></v-spacer>
      <div class="d-flex flex-column align-self-center">
        <h1 class="spacer">Welcome to MediConnect!</h1>
        <p class="spacer">Where we help you connect to Medical Centers quickly!</p>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex flex-column flex-lg-row justify-lg-space-around spacer">
        <v-btn @click="$router.push('/about')">About Us</v-btn>
        <v-btn @click="$router.push('/hospitals')">Look for Hospitals Near You</v-btn>
        <v-btn @click="$router.push('/apply')">Apply Your Medical Center or Hospital</v-btn>
        <v-btn @click="$router.push('/register')">Register as Patient</v-btn>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: #fff;
}
.spacer {
  padding: 1rem 0;
}
@media screen and (max-width: 1264px) {
  .img-size {
    width: 250px;
  }
}
</style>