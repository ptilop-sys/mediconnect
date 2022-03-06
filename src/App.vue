<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <v-app>
    <Navbar>
      <template v-slot:mainDrawer>
        <v-btn>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/about">About</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/doctors">Doctors</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/hospitals">Hospitals</router-link>
        </v-btn>
      </template>
      <template v-slot:userDrawer>
        <v-btn>Sign In</v-btn>
        <v-btn>Register</v-btn>
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
