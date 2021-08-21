/* eslint-disable */
import VueSocketIOExt from 'vue-socket.io-extended';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $socket:  VueSocketIOExt;
  }
};

declare module 'socket.io-client';