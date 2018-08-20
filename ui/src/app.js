import vue from "vue";
import vueResource from "vue-resource";

import "element-qsa-scope";

import i18n from "./i18n";
import router from "./router";
import store from "./store";

import "./components";
import "./events";

vue.use(vueResource);

new vue({
    el: "router-view",
    i18n,
    router,
    store,
});
