<script lang="ts" setup>
import { reactive, toRefs } from 'vue';
import Hospital from '../types/Hospital';

const hospitalData = reactive({
    hospitalName: "",
    representative: "",
    address: "",
    location: "",
    contact: "",
    description: "",
    doctors: ""
})

const { hospitalName, representative, address, contact, description } = toRefs(hospitalData)

</script>

<template>
    <v-container>
        <v-card class="px-10 py-10">
            <h1 class="pb-10">Hospital Acceptance Form</h1>
            <v-form>
                <v-col cols="12" lg="5">
                    <v-row>
                        <v-text-field v-model="hospitalName" label="Hospital Name"></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field
                            v-model="representative"
                            label="Name of Hospital Representative"
                        ></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field v-model="address" label="Address of Establishment"></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field v-model="contact" label="Contact Number"></v-text-field>
                    </v-row>
                    <v-row>
                        <v-textarea v-model="description" label="Description"></v-textarea>
                    </v-row>
                    <v-row class="d-flex flex-column">
                        <v-btn class="center" color="success">Submit</v-btn>
                    </v-row>
                </v-col>
            </v-form>
        </v-card>
    </v-container>
</template>