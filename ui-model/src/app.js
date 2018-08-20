import vue from "vue";

import i18n from "./i18n";
import router from "./router";
import store from "./store";

import "./components";
import "./eventbus";
import "./extend";
import "./filters";
import "./resource";

new vue({
    el: "router-view",
    i18n,
    router,
    store,
});
