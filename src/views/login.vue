<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

// UID
// /patient/UID/dashboard

const router = useRouter();
const auth = getAuth();

const email = ref("");
const password = ref("");

const showPassword = ref(false);

const signIn = async () => {
  signInWithEmailAndPassword(auth, email.value, password.value).then(
    (authedUser) => {
      alert(`Welcome ${authedUser.user.displayName}!`);
      router.push({ path: `/patient/${authedUser.user.uid}/dashboard` }); // Fix this soon
    }
  );
};
</script>

<template>
  <v-container>
    <v-card class="px-10 py-10">
      <v-row>
        <v-col cols="12" lg="4">
          <v-row class="mb-10">
            <h1>Welcome Back!</h1>
          </v-row>
          <v-form>
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
              <v-btn color="black" @click="signIn()">Login</v-btn>
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
          <v-btn @click="$router.push('/register')">Register</v-btn>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
