<script lang="ts" setup>
import { ref } from "vue";
const mainDrawer = ref(false);
</script>

<template>
  <nav>
    <v-toolbar flat app>
      <v-btn
        class="d-lg-none"
        icon="mdi-menu"
        @click="mainDrawer = !mainDrawer"
      ></v-btn>
      <!-- Desktop Navibation -->
      <v-toolbar-title>
        <router-link to="/">
          <img
            class="img-brand"
            src="../assets/icons/navbar.svg"
            alt="mediconnect icon"
          />
        </router-link>
      </v-toolbar-title>
      <v-flex class="d-none d-lg-block">
        <slot name="mainDrawer"></slot>
      </v-flex>
      <v-spacer></v-spacer>
      <v-menu top offset-x="true">
        <template v-slot:activator="{ props }">
          <v-btn dark icon v-bind="props">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <slot name="userDrawer"></slot>
        </v-list>
      </v-menu>
    </v-toolbar>

    <!-- Mobile Navigation -->
    <v-navigation-drawer
      class="d-lg-none primary"
      temporary
      v-model="mainDrawer"
    >
      <slot name="mainDrawer"></slot>
    </v-navigation-drawer>
  </nav>
</template>

<style scoped>
.img-brand {
  width: 80px;
}
</style>
