import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase"

Vue.config.productionTip = false
const config = {
  apiKey: 'AIzaSyA8BP7ZBxX1u3p2mjSS1TfFkXeV59EOotk',
  projectId: 'firesecond-50fe1',
  authDomain: 'firesecond-50fe1.firebaseapp.com',
  databaseURL: 'https://firesecond-50fe1.firebaseio.com',
  storageBucket: 'firesecond-50fe1.appspot.com',
}
firebase.initializeApp(config);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default firebase;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')