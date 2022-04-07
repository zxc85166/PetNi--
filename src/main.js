import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersist);

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

app.use(router);
app.use(pinia);
app.mount("#app");
