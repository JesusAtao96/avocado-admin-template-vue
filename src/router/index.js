import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/Layout.vue";

const routes = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue")
      },
      {
        path: "dashboard",
        name: "Dashboard",
        // route level code-splitting
        // this generates a separate chunk (dashboard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
      },
      {
        path: "table",
        name: "Table",
        // route level code-splitting
        // this generates a separate chunk (table.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "table" */ "../views/Table.vue")
      }
    ]
  }
];

const router = createRouter({
  linkExactActiveClass: "c-nav__link--active",
  history: createWebHashHistory(),
  routes
});

export default router;
