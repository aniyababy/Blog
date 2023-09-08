import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Index from "../views/Index.vue";
import Archives from "../views/article/Archives.vue"
import Links from "../views/Link.vue"

const routes: Array<RouteRecordRaw> = [
  {
    name: "home",
    path: "/",
    component: Index,
    meta: {
      title: "首页",
    },
  },
  {
    name: "archives",
    path: "/archives",
    component: Archives,
    meta: {
      title: "文章详情",
    },
  },
  {
    name: "links",
    path: "/links",
    component: Links,
    meta: {
      title: "友情链接",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//路由器安置守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

router.afterEach(() => {
  window.scrollTo({
    top: 0,
  });
  NProgress.done();
});

export default router;
