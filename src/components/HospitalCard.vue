<script lang="ts" setup>
import Hospital from "../types/Hospital"
defineProps<{
  hospitalDetails: Hospital
}>()

</script>

<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="hospitalDetails.img">
      <v-card-title>{{ hospitalDetails.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0 d-flex flex-column align-start">
      <p class="text-left">{{ hospitalDetails.location }}</p>
      <p class="text-left">
        Contact Details:
        <span
          v-for="(contact, index) in hospitalDetails.contacts"
          :key="index"
        >{{ contact }}&nbsp;&nbsp;</span>
      </p>
    </v-card-subtitle>

    <v-card-text class="text--primary">{{ hospitalDetails.description }}</v-card-text>

    <v-card-actions>
      <v-btn color="primary" text @click="$router.push('/register')">Register Now</v-btn>
    </v-card-actions>
  </v-card>
</template>