//routerview是路由出口，渲染匹配路由对应的组件
//1.先找到当前组件，再从route路由表里查找出匹配的项
//2.匹配的项通过h函数渲染
import { defineComponent, h, getCurrentInstance, unref } from "vue";
export default defineComponent({
  setup() {
    return () => {
      //解构上下文的实例
      const {
        proxy: { $router },
      } = getCurrentInstance();
      //动态获取对应组件
      let component;
      const route = $router.options.routes.find(
        (route) => route.path === unref($router.current)
      );
      //匹配到了就通过h函数渲染
      if (route) {
        component = route.component;
        return h(component);
      } else {
        console.warn("no match");
        return h("div", "");
      }
    };
  },
});
