import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authStatus: false,
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    userChange(state, user) {
      state.user = user;
    },
    statusChange(state, status) {
      state.authStatus = status;
    },
    tokenChange(state, token) {
      state.token = token;
    }
  },
  getters: {
    authStatus: state => state.authStatus,
    token: state => state.token,
    user: state => state.user
  },
  actions: {},
  modules: {}
});
