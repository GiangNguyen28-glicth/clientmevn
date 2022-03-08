import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/404.vue";

const requireAuth = (to, from, next) => {
  const attoken = localStorage.getItem('at-token');
  console.log("Before Enter Router")
  if (!attoken) {
    next({ name: "login-router", param: {} })
  }
  else {
    next();
  }

}
const routes = [
  {
    path: "/",
    name: "home-layout",
    meta: {
      layout: "home"
    },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login-router",
    meta: {
      layout: "auth"
    },
    component: () => import(/* webpackChunkName: "home" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register-router",
    meta: {
      layout: "auth"
    },
    component: () => import(/* webpackChunkName: "home" */ "../views/Register.vue"),
  },
  {
    path: "/profile",
    name: "profile-router",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Profile.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/products/:id",
    name: "productdetail-router",
    meta: {
      layout: "home"
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/ProductDetail.vue"),
    // beforeEnter:requireAuth
  },
  {
    path: "/admin/products",
    name: "admin-product-router",

    component: () =>
      import(/* webpackChunkName: "home" */ "../views/AdminProduct.vue"),
    beforeEnter: requireAuth
  },

  {
    path: "/chat",
    name: "chat-router",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Chat.vue"),
    beforeEnter: requireAuth
  },

  {
    path: "/cart",
    name: "cart-router",
    meta: {
      layout: "home"
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Cart.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/:pathMath(.*)*",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
