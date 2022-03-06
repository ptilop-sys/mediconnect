<script lang="ts" setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

const showPassword = ref(false);

const submit = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value).then(
    (authedUser) => {
      const { user } = authedUser;
      updateProfile(user, {
        displayName: `${firstName.value} ${lastName.value}`,
      });
      alert("Signed in!");
    }
  );
};
</script>

<template>
  <v-container class="">
    <v-row class="my-2"><h1>Sign Up Now!</h1></v-row>
    <v-form>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="firstName" label="First Name"> </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="lastName" label="Last Name"> </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" label="Email"> </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            label="Password"
            @click:append="showPassword = !showPassword"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-btn @click="submit" color="black">Submit</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>
