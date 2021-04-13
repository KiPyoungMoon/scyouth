import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    title: "About",
    redirect: { name: "Greeting" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about/About.vue"),
    children: [
      {
        path: "greeting",
        name: "Greeting",
        component: () =>
          import("../views/about/Greeting.vue"),
      },
      {
        path: "history",
        name: "History",
        component: () =>
          import("../views/about/History.vue"),
      },
      {
        path: "introduce",
        name: "Introduce",
        component: () =>
          import("../views/about/Introduce.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
