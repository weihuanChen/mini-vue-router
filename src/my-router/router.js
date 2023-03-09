import RouterLink from "./RouterLink.js";
import RouterView from "./RouterView.js";
import { ref } from "vue";
/**
 *
 * @param {*} options 接收可选配置生成新的router实例
 * @return {*} router实例
 */
export function createRouter(options) {
  const router = {
    options, //保存配置项
    current: ref(window.location.hash.slice(1) || "/"), //把hash井号前的地址切下来做响应式
    //安装方法
    //由于要在全局上挂$router以供用户使用，因此要接收一个app实例
    install(app) {
      //不用this引用也行，反正向上找也是router
      const router = this;
      //Vue3版本的注册
      //app.config.globalProperties.$router = this
      app.config.globalProperties.$router = router;

      //注册并实现router-link和router-view两个组件
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
    },
  };
  //监听事件
  window.addEventListener("hashchange", () => {
    router.current.value = window.location.hash.slice(1);
    console.log(router.current.value);
  });
  return router;
}
