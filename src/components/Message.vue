<template>
  <div>
    <span v-if="!sender">{{ name }}</span>

    <div class="d-flex" :class="sender ? 'flex-row-reverse' : ''">
      <div
        class="pa-4 my-1 text-center rounded-pill"
        :class="
          sender
            ? 'bg-teal-accent-4 rounded-br-0'
            : 'bg-grey-lighten-1  rounded-bl-0'
        "
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  name: String,
  avatarURL: String,
  sender: Boolean,
});
</script>
