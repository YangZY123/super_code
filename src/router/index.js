import Vue from "vue"
import VueRouter from "vue-router"
import me from "../views/MyMe/Me.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/me",
    name: "我的",
    component: me,
    meta: {
      keep: true,
    },
  },
  {
    path: "/task",
    name: "任务页面",
    component: () => import("../views/MyMe/Task.vue"),
    meta: {
      show: 0,
    },
  },
  {
    path: "/site",
    name: "地址列表",
    component: () => import("../views/MyMe/Site.vue"),
    meta: {
      show: 0,
    },
  },
  {
    path: "/edit",
    name: "修改地址",
    component: () => import("../views/MyMe/EditSite.vue"),
    meta: {
      show: 0,
    },
  },
  {
    path: "/coupon",
    name: "优惠券",
    component: () => import("../views/MyMe/Coupon.vue"),
    meta: {
      show: 0,
    },
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
