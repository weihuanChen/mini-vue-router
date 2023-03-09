//1。导入页面组件
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import { createRouter, createWebHashHistory } from "vue-router";
//2.定义路由,每个路由对应一个组件
//本质上是path和component的映射关系

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];
//通过一个创建函数生成一个实例
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
