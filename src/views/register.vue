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
  <v-container>
    <v-card class="px-10 py-10">
      <v-row class="d-flex">
        <v-col cols="12" lg="4">
          <v-row class="mb-10">
            <h1>Sign Up Now!</h1>
          </v-row>
          <v-form>
            <v-row>
              <v-text-field v-model="firstName" label="First Name"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field v-model="lastName" label="Last Name"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field v-model="email" label="Email"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                label="Password"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-row>
            <v-row class="d-flex flex-column">
              <v-btn class="text-center" @click="submit" color="black">Submit</v-btn>
            </v-row>
          </v-form>
        </v-col>
        <v-col cols="12" lg="4" class="d-flex flex-column">
          <v-spacer></v-spacer>
          <h1 class="text-center">or</h1>
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="12" lg="4" class="d-flex flex-column">
          <v-spacer></v-spacer>
          <v-btn @click="$router.push('/login')">Log In</v-btn>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
