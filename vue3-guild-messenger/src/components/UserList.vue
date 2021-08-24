<template lang='pug'>
.user-list-wrapper
  .user-name(v-for="user in existingUsers" @click.native="handleUserClick(user)") {{ user }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from 'vuex';

export default defineComponent({
  name: "UserList",
  computed: {
    ...mapGetters(['existingUsers'])
  },
  mounted() {
    console.log('in userlist')
    console.log('existingUsers', this.existingUsers);
  },
  methods: {
    handleUserClick(userName: string) {
      this.$emit('open-chat', userName);
    }
  }
});
</script>

<style scoped lang="scss">
.user-list-wrapper {
  border: 2px blue solid;
  height: 100%;
  width: 150px;
}
</style>
