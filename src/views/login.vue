<script lang="ts" setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../database/firebase";

// UID
// /patient/UID/dashboard

const { signIn } = useAuth();

const email = ref("");
const password = ref("");

const showPassword = ref(false);

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((authedUser) => {
      const { user } = authedUser;
      console.log(user.metadata);

      alert(`Welcome ${user.displayName?.split(" ")[0]}`);
    })
    .catch((err) => console.error(err));
};
</script>

<template>
  <v-container>
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
          <v-row>
            <v-btn class="mr-4" color="black" @click="login">Login</v-btn>
            <v-btn color="red" @click="signIn">Sign in with Google</v-btn>
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
  </v-container>
</template>
