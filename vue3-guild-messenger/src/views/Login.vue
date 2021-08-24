<template lang='pug'>
form.login-wrapper(
  @submit.prevent="handleLogin"
)
  .input-wrapper
    label.login-label(for="screen-name") Screen Name
    input#screen-name.text-field(type="text" v-model="userName")
  .input-wrapper
    label.login-label(for="password") Password
    input#password.text-field(type="password" placeholder="This does nothing")
  button.btn-sign-on(type="submit") Sign On
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from 'vuex';

export default defineComponent({
  name: "Login",
  data() {
    return {
      userName: null
    }
  },
  computed: {
    ...mapGetters(['existingUsers'])
  },
  watch: {
    existingUsers() {
      console.log(this.existingUsers, 'existingUsers in login');
    }
  },
  sockets: {
    connect() {
      console.log('socket connected')
    },
    existingUsers(userNames) {
      console.log('got existing users:', userNames);
      this.setExistingUsers(userNames)
    },
    foundNewMessages(messages) {
      console.log('found new messages!', messages)
    },
    polling(user) {
      console.log('polling for: ', user)
    }
  },
  methods: {
    handleLogin() {
      this.$socket.client.emit('user logged in', this.userName);
      this.setCurrentUser(this.userName);
      this.$router.push({name: 'Chat'});
    },
    ...mapMutations(['setExistingUsers', 'setCurrentUser'])
  }
});
</script>
<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  .input-wrapper {
    margin: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .login-label, .text-field {
    
    }
  }
  .btn-sign-on {
    align-self: center;
  }
}

</style>