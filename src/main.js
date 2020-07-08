import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");

export default router;
