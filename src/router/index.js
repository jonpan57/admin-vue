// import { createRouter,  createWebHashHistory } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  //Hash 模式
  // history: createWebHashHistory(),
  //HTML5 模式
  history: createWebHistory(),
  routes,
});

export default router;
