import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIOExt from 'vue-socket.io-extended';
import SocketIO from 'socket.io-client';

const socket = SocketIO('http://localhost:3000');

createApp(App).use(store).use(router).use(VueSocketIOExt, socket).mount("#app");
