import vue from "vue";
import vueRouter from "vue-router";

import layout from "@/views/layout";
import {browseRoutes} from "@/views/browse";

vue.use(vueRouter);

export default new vueRouter({
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    mode: "history",
    routes: [
        {
            name: "root",
            path: "/",
            component: layout,
            children: [].concat(
                browseRoutes,
            ),
        },
    ],
});
