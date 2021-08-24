<template lang='pug'>
.chat-wrapper
  UserList(@open-chat="toggleChat")
  ChatWindow(v-if="chatOpen" :toUser="toUser")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserList from '@/components/UserList.vue';
import ChatWindow from '@/components/ChatWindow.vue';

export default defineComponent({
  name: "Home",
  components: {
    UserList,
    ChatWindow
  },
  data() {
    return {
      chatOpen: false,
      toUser: ''
    }
  },
  methods: {
    toggleChat(toUser: string) {
      this.toUser = toUser;
      this.chatOpen = true;
    }
  }
});
</script>
<style lang="scss">
.chat-wrapper {
  display: flex;
  height: 50vh;
  border: 3px red dotted;
}
</style>
