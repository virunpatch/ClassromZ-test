import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
//import firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)

  /*created() {
    var firebaseConfig = {
      apiKey: "xxxxxxxxxxxxxxxxx",
      authDomain: "xxxxxxxxxxxxxxxxx",
      projectId: "xxxxxxxxxxx",
      storageBucket: "xxxxxxxxxxx",
      messagingSenderId: "xxxxxxxxxxxx",
      appId: "xxxxxxxxxxxxx",
      measurementId: "xxxxxxxxxxxxx"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
  }   [Api firebase here]*/

}).$mount('#app')
