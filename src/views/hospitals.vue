<script lang="ts" setup>
import Hospital from '../types/Hospital';
import HospitalCard from '../components/HospitalCard.vue';

const hospitals = [
    {
        id: "0001",
        name: "MakatiMed",
        img: "imgLink",
        representative: "Andres Something",
        address: "2205 Something Legit St.",
        location: "Quezon City",
        contacts: [
            "09151111234",
            "092512345677"
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates, repellat nostrum neque odit ad necessitatibus exercitationem id. Optio sed, totam laudantium nostrum assumenda maiores quam illo at nihil rerum distinctio illum aperiam doloremque consequatur? Aperiam sapiente aspernatur quis, asperiores repellat accusamus quasi autem recusandae, dolores numquam dolorum et? Ab.",
        doctors: [
            "Dr. Abueza"
        ]
    },
    {
        id: "0002",
        name: "MakatiMed",
        img: "imgLink",
        representative: "Andres Something",
        address: "2205 Something Legit St.",
        location: "Quezon City",
        contacts: [
            "09151111234",
            "092512345677"
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates, repellat nostrum neque odit ad necessitatibus exercitationem id. Optio sed, totam laudantium nostrum assumenda maiores quam illo at nihil rerum distinctio illum aperiam doloremque consequatur? Aperiam sapiente aspernatur quis, asperiores repellat accusamus quasi autem recusandae, dolores numquam dolorum et? Ab.",
        doctors: [
            "Dr. Abueza"
        ]
    }
    ,
    {
        id: "0003",
        name: "MakatiMed",
        img: "imgLink",
        representative: "Andres Something",
        address: "2205 Something Legit St.",
        location: "Quezon City",
        contacts: [
            "09151111234",
            "092512345677"
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates, repellat nostrum neque odit ad necessitatibus exercitationem id. Optio sed, totam laudantium nostrum assumenda maiores quam illo at nihil rerum distinctio illum aperiam doloremque consequatur? Aperiam sapiente aspernatur quis, asperiores repellat accusamus quasi autem recusandae, dolores numquam dolorum et? Ab.",
        doctors: [
            "Dr. Abueza"
        ]
    }
]

</script>


<template>
    <v-container grid-list-md>
        <h1>TODO: List of hospitals from database here:</h1>

        <v-layout>
            <v-flex xs12 md4 v-for="hospital in hospitals" :key="hospital.id">
                <HospitalCard :hospital-details="hospital" />
            </v-flex>
        </v-layout>
    </v-container>
</template>