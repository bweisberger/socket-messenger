import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from 'vue-3-socket.io';

const socketIO = new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store
  }
})

createApp(App).use(store).use(router).use(socketIO).mount("#app");
