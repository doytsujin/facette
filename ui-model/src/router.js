import vue from "vue";
import vueRouter from "vue-router";

vue.use(vueRouter);

import layout from "./layout";
import {adminRoutes} from "./modules/admin";
import {browseRoutes} from "./modules/browse";
import {showRoutes} from "./modules/show";
import {defaultRoutes} from "./modules/default";

const router = new vueRouter({
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    mode: "history",
    routes: [
        {
            path: "/",
            component: layout,
            children: [].concat(
                adminRoutes,
                browseRoutes,
                showRoutes,
                defaultRoutes,
            ),
        },
    ],
    scrollBehavior(to) {
        if (to.hash && to.hash.startsWith("#")) {
            let el = document.getElementById(to.hash.substr(1));
            if (el) {
                el.scrollIntoView();
            }
        }

        return false;
    },
});

export default router;

function setQueryParam(router, key, value, condition = true) {
    let q = Object.assign({}, router.currentRoute.query);

    if (condition) {
        q[key] = value;
    } else {
        delete q[key];
    }

    router.replace({query: q});
}

export {setQueryParam};
