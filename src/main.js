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
    token: "",
    photo: "",
    userId: "",
    email:"",
    friends: 0,
    name:"",
    secondName:"",
    patronymic:"",
    hobby:""
  },
  mutations:{
    setToken(state, token){
      state.token = token
    },
    setPhoto(state, photo){
      state.photo = photo
    },
    setUserId(state, id){
      state.userId = id
    },
    setEmail(state, email){
      state.email = email
    },
    setName(state, name){
      state.name = name
    },
    setSecondName(state, sname){
      state.secondName = sname
    },
    setPatron(state, patron){
      state.patronymic = patron
    },
    setHobby(state, hobby){
      state.hobby = hobby
    },
    setFriends(state, friends){
      state.friends = friends
    },
    clear(state){
      state.token = "";
      state.photo = "";
      state.userId = "";
      state.email = "";
      state.friends = "";
      state.hobby = "";
      state.name ="";
      state.secondName = "";
      state.patronymic = "";
      state.friends = 0;
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
