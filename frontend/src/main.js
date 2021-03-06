import Vue from "vue";
import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";
import VueRouter from "vue-router";

import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(VueRouter);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      components: require("./containers/Articles.vue")
    },
    {
      path: "/article/:id",
      name: "Article",
      components: require("./containers/Article.vue")
    },
    {
      path: "/category/:id",
      name: "Category",
      components: require("./containers/Category.vue")
    }
  ]
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");
