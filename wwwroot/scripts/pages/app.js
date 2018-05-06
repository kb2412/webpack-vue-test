import Vue from "vue";
import App from "@/App.vue"
import router from "@/router"
import "scripts/pages/permission"

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
