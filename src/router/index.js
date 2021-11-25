import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import RegisterForm from '../components/RegisterForm.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: "HomePage", component: HomePage },
        { path: '/register', name: "RegisterForm", component: RegisterForm }
    ],
});
