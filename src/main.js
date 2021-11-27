import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';
//import axios from 'axios';
import firebase from "firebase/app"
import Notifications from '@kyvg/vue3-notification'

const firebaseConfig = {
    apiKey: "AIzaSyDzzI4auMWpriTY3IW9OUIpcl8yZIrI3sE",
    authDomain: "maes-legais-prod.firebaseapp.com",
    projectId: "maes-legais-prod",
    storageBucket: "maes-legais-prod.appspot.com",
    messagingSenderId: "56390524895",
    appId: "1:56390524895:web:75258a59827667b3462e6a"
};

firebase.initializeApp(firebaseConfig);

let app;
firebase.auth().onAuthStateChanged(user =>{
    if(!app) {
        app = createApp(App).use(store).use(router).use(Notifications).mount('#app')
    }
})

//createApp(App).use(store).use(router).mount('#app')
