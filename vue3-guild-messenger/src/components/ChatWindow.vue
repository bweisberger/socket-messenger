<template lang='pug'>
.chat-window-wrapper {{ currentUser }} : {{ toUser }} - Message
  .message-wrapper
    Message.message(v-for="(message, index) in messages" :message="message" :key="index")
  form.input-text-form
    textarea.input-text-area
    button(type="submit") Send
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from 'vuex';

export default defineComponent({
  name: "ChatWindow",
  props: {
    toUser: {
      type: String,
      default: 'Somebody else',
    }
  },
  computed: {
    ...mapGetters(['currentUser', 'messages'])
  },
});
</script>

<style scoped lang="scss">

</style>
