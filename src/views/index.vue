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
    <div class="d-flex flex-column justify-center">
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
        <h1>Welcome to MediConnect!</h1>
        <p>Where we help you connect to Medical Centers quickly!</p>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex flex-column flex-lg-row justify-lg-space-around">
        <v-btn @click="$router.push('/about')">About Us</v-btn>
        <v-btn @click="$router.push('/hospitals')">Look for Hospitals Near You</v-btn>
        <v-btn @click="$router.push('/apply')">Apply Your Medical Center or Hospital</v-btn>
        <v-btn @click="$router.push('/register')">Register as Patient</v-btn>
      </div>
      <v-col cols="12">
        <v-btn elevation="3" rounded="pill" color="primary" @click="testFunction">Testing</v-btn>
      </v-col>
    </div>
  </v-container>
</template>

<style>
@media screen and (max-width: 1264px) {
  .img-size {
    width: 250px;
  }
}
</style>