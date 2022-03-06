<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
import { useAuth } from "./database/firebase";

const { isLogin, signOut } = useAuth()
</script>

<template>
  <v-app>
    <Navbar>
      <template v-slot:mainDrawer>
        <v-btn @click="$router.push('/')">Home</v-btn>
        <v-btn @click="$router.push('/about')">About</v-btn>
        <v-btn @click="$router.push('/doctors')">Doctors</v-btn>
        <v-btn @click="$router.push('/hospitals')">Hospitals</v-btn>
        <v-btn @click="$router.push('/apply')">Apply Your Hospital</v-btn>
      </template>
      <template v-slot:userDrawer>
        <v-list-item v-show="!isLogin" @click="$router.push('/login')">Sign In</v-list-item>
        <v-list-item v-show="!isLogin" @click="$router.push('/register')">Register</v-list-item>
        <v-list-item v-show="isLogin" @click="signOut">Sign Out</v-list-item>
      </template>
    </Navbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
#app {
  background: url("./assets/background.png");
}
</style>