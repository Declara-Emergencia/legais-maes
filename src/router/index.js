import { createRouter, createWebHashHistory } from 'vue-router'
//import Vue from "vue";
//import VueRouter from "vue-router";
import HomePage from '../components/HomePage.vue'
import RegisterForm from '../components/RegisterForm.vue'
import LoginForm from '../components/LoginForm.vue'
import ServiceList from '../components/ServiceList.vue'

//import firebase from 'firebase/app'
//import "firebase/auth"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: "HomePage", component: HomePage },
        { path: '/registrar', name: "RegisterForm", component: RegisterForm },
        { path: '/entrar', name: "LoginForm", component: LoginForm },
        { path: '/lista-servicos', name: "ServiceList", component: ServiceList, meta: {requiresAuth: true}}
    ],
});
/*
Vue.use(VueRouter);

const routes = [
    { path: '/', name: "HomePage", component: HomePage },
    { path: '/register', name: "RegisterForm", component: RegisterForm },
    { path: '/login', name: "LoginForm", component: LoginForm },
    { path: '/service-list', name: "ServiceList", component: ServiceList, meta: {requiresAuth: true}}
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = firebase.auth().currentUser;

    if(requiresAuth && !isAuthenticated)
        next("/login");
    else
        next();
})

export default router;
*/