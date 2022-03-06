import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import routes from "~pages";

// import Home from "../views/Home.vue";
// import Login from "../views/Login.vue";
// import Register from "../views/Register.vue";
// import Dashboard from "../views/Dashboard.vue";

// const viewRoutes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/register",
//     name: "Register",
//     component: Register,
//   },
//   {
//     path: "/login",
//     name: "Login",
//     component: Login,
//   },
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     component: Dashboard,
//   },
// ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
