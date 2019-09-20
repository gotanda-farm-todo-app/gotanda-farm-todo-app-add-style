import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBao9xuGZBdD3yQNLByF9LgC-AINkID5ws",
  authDomain: "gf-todo-app-add-style.firebaseapp.com",
  databaseURL: "https://gf-todo-app-add-style.firebaseio.com",
  projectId: "gf-todo-app-add-style",
  storageBucket: "",
  messagingSenderId: "503003019384",
  appId: "1:503003019384:web:601458511e4e6e4b63d58d"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
