//routerview是路由出口，渲染匹配路由对应的组件
//1.先找到当前组件，再从route路由表里查找出匹配的项
//2.匹配的项通过h函数渲染
import { defineComponent, h } from "vue";
export default defineComponent({
  setup() {
    //占位元素
    return () => h("div", "router-view");
  },
});
