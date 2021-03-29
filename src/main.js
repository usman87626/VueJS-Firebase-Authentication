import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './routes.js'
import './auth'
import Vuetify from 'vuetify'
import store from './store'
Vue.config.productionTip = false
Vue.use(Vuetify);
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
