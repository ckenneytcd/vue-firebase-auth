import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyCLexrwToi2Zf-87MnG_ZmGbFXmV4P3aVE",
  authDomain: "se-tester-d62e1.firebaseapp.com",
  projectId: "se-tester-d62e1",
  storageBucket: "se-tester-d62e1.appspot.com",
  messagingSenderId: "736448836199",
  appId: "1:736448836199:web:bb74a18ecdc369689b9ac2",
  measurementId: "G-GMJWSRPB19"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
