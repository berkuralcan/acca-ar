import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {routes} from "./routes"

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  base: "/my-app/",
  mode: "history",
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
