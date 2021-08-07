import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/home/Home'
import Category from "../views/category/Category";
import Cart from "../views/cart/Cart";
import Profile from "../views/profile/Profile";
import ProductDetail from "../views/detail/ProductDetail";

// 路由配置
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/category", name: "category", component: Category },
  { path: "/cart", name: "cart", component: Cart },
  { path: "/profile", name: "profile", component: Profile },
  { path: "/detail/:id", name: "detail", component: ProductDetail },
  { path: "*", redirect: "/" }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router