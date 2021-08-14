import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.config.globalProperties.$axios = axios; //全局配置axios
app.use(store).use(router).use(ElementPlus).mount("#app");
