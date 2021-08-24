<template lang='pug'>
.message-wrapper
  span.user-name(:class="userClass") {{ message.fromUser }} : 
  span.message-text {{ message.text }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from 'vuex';

export default defineComponent({
  name: "Message",
  props: {
    message: {
      type: Object,
      required: true,
    }
  },
  computed: {
    userClass() {
      if (this.message.fromUser === this.currentUser) {
        return 'currentUser';
      }
    },
    ...mapGetters(['currentUser'])
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user-name {
  font-weight: 600;
  color: red;
}
.current-user {
  color: blue;
}
</style>
