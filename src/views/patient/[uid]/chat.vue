<template>
  <v-container class="mt-5">
    <div class="mx-5">
      <Message
        v-for="{ id, content, userPhotoURL, userName, userId } in messages"
        :key="id"
        :name="userName"
        :sender="userId === user?.uid"
        >{{ content }}</Message
      >
    </div>
  </v-container>

  <div ref="bottom" class="mt-20"></div>
  <div class="bottom">
    <v-container>
      <v-form @keyup.native.enter="send">
        <input type="text" />
        <v-text-field
          label="Message"
          v-model="message"
          append-icon="mdi-send"
          variant="outlined"
          @click:append="send"
        ></v-text-field>
      </v-form>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, watch } from "vue";
import Message from "../../../components/Message.vue";
import { useAuth, useChat } from "../../../database/firebase";

const { messages, sendMessage } = useChat();

const message = ref("");
const bottom = ref();
watch(
  messages,
  () => {
    nextTick(() => {
      bottom.value?.scrollIntoView({ behaviour: "smooth" });
    });
  },
  { deep: true }
);

const { user, isLogin } = useAuth();

const send = () => {
  sendMessage(message.value);
  message.value = "";
};
</script>
