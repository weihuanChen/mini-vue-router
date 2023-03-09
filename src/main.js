import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//导入路由插件
// import router from "./router";
import router from "./my-router";
createApp(App).use(router).mount("#app");
