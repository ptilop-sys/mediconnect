<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

const showPassword = ref(false);

const auth = getAuth();
const router = useRouter();

const signUp = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((authedUser) => {
      const { user } = authedUser;
      updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
      router.push(`/patient/${user.uid}/dashboard`);
    })
    .catch((err) => console.error(err));
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
              <v-text-field
                v-model="firstName"
                label="First Name"
              ></v-text-field>
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
              <v-btn
                color="black"
                @click="signUp(firstName, lastName, email, password)"
                >Sign Up</v-btn
              >
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
