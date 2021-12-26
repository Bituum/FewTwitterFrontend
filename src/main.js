import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from "vue-router";
import {routes} from "/src/router/index.js";

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  state:{
    token: "",
    current: 1
  },
  mutations:{
    setToken(state, token){
      state.token = token
    },
    setCurrent(state, current){
      state.current = current
    }
  }
})

const router = new VueRouter({
  routes,
  mode:"history"
})


new Vue({
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app')
