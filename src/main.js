import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from "vue-router";
import {routes} from "/src/router/index.js";
import createPersistanceState from 'vuex-persistedstate';

Vue.use(Vuex);
Vue.use(VueRouter);

//удалить сессию
//sessionStorage.clear()
const store = new Vuex.Store({
  plugins: [createPersistanceState({
    storage: window.sessionStorage,
  })

  ],
  state:{
    token: ""
  },
  mutations:{
    setToken(state, token){
      state.token = token
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
