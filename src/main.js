import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';


Vue.use(axios)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title
  }next()
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
