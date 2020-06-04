if("serviceWorker" in navigator){
  navigator.serviceWorker.register("/sw.js")
    .then(()=>{
      console.log("service worker registered");
    })
    .catch(()=>{
      console.log("service worker registration failed");
    })
}

import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from "./route";

Vue.use(VueRouter);

const router=new VueRouter({
  mode: "history",
  routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
