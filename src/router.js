import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/main",
      name: "main",
      meta: {
        title: "viola-ui"
      }
    },
    {
      path: "/main",
      name: "main",
      component: resolve => require(["./views/main"], resolve),
      meta: {
        title: "ViolaUI 组件"
      }
    },
    {
      path: "/testUrl",
      name: "testUrl",
      meta: {
        title: "测试路由"
      }
    },
    {
      path: "/BaseUI/Button",
      name: "Button",
      component: resolve =>
        require(["./views/otherPage/base-ui/button.vue"], resolve),
      meta: {
        title: "Button 按钮"
      }
    },
    {
      path: "/BaseUI/Cell",
      name: "Button",
      component: resolve =>
        require(["./views/otherPage/base-ui/cell.vue"], resolve),
      meta: {
        title: "Cell 单元格"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
router.afterEach((to, from) => {});
export default router;
