import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    // 首页
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        redirect: '/index'
      },
      { // 首页
        path: '/index',
        name: 'index',
        component: () => import('../views/home/index.vue')
      },
      { // 总榜,题榜，个人榜
        path: '/generalList/:id',
        name: 'generalList',
        component: () => import('../views/List/generalList.vue')
      },
      { // 赛事指南
        path: '/guide',
        name: 'guide',
        component: () => import('../views/guide/guide.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
