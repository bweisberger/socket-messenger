import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser: '',
    existingUsers: [],
    messages: []
  },
  mutations: {
    setExistingUsers(state, userNames) {
      state.existingUsers = userNames;
    },
    setCurrentUser(state, userName) {
      state.currentUser = userName;
    },
    setMessages(state, messages) {
      state.messages.concat(messages);
    }
  },
  getters: {
    existingUsers: (state) => state.existingUsers,
    messages: (state) => state.messages,
    currentUser: (state) => state.currentUser
  },
  modules: {},
});
