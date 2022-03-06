<script lang="ts" setup>
import { ref } from "vue";
const mainDrawer = ref(false);
const userDrawer = ref(false);
</script>

<template>
  <nav>
    <v-toolbar flat app>
      <v-btn class="d-lg-none" icon="mdi-menu" @click="mainDrawer = !mainDrawer"></v-btn>
      <v-toolbar-title>
        <router-link to="/">
          <img class="img-brand" src="../assets/icons/navbar.svg" alt="mediconnect icon" />
        </router-link>
      </v-toolbar-title>
      <v-flex class="d-none d-lg-block">
        <slot name="mainDrawer"></slot>
      </v-flex>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-account" color="grey" @click="userDrawer = !userDrawer"></v-btn>
    </v-toolbar>

    <v-navigation-drawer class="d-lg-none primary" temporary v-model="mainDrawer">
      <slot name="mainDrawer"></slot>
    </v-navigation-drawer>

    <v-navigation-drawer temporary v-model="userDrawer" class="primary" position="right">
      <slot name="userDrawer"></slot>
    </v-navigation-drawer>
  </nav>
</template>

<style scoped>
.img-brand {
  width: 80px;
}
</style>
