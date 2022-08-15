import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue"
import Laptop from "../components/Laptop.vue"
import SignUp from "../components/SignUp.vue"



const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/laptop",
    name: "laptop",
    component: Laptop,
  },

  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },

];


const router  = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;