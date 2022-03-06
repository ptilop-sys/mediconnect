<script lang="ts" setup>
defineProps<{ uid: String }>();
</script>

<template>
  <v-container>
    <v-row>
      <h1>Welcome, Dr. lastname!</h1>
    </v-row>
    <v-row>
      <p>Your user id is: {{ uid }}</p>
    </v-row>
  </v-container>
</template>
