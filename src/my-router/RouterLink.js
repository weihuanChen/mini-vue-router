//RouterLink.js作为路由的入口
//纯js的写法，相比模板语法更灵活,更适合基础库
import { defineComponent, h, unref } from "vue";
export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    //这个地址可能是动态的（不一定是纯字符串)，需要解套
    const to = unref(props.to);
    //这里需要一个默认插槽来作为a标签
    return () => h("a", { href: "#" + to }, slots.default());
  },
});
