<template lang='pug'>
.hello
  h1(@click.native="handleClick") {{ msg }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  sockets: {
    connect() {
      console.log('socket connected')
    },
    chatMessage1(data) {
      console.log('this method was fired by the socket server', data)
    }
  },
  methods: {
    handleClick() {
      this.$socket.client.emit('chatMessage2', this.msg);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
