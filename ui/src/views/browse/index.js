import collection from "./collection";
import search from "./search";
import sidebar from "./sidebar";
import toolbar from "./toolbar";

const browseRoutes = [
    {
        name: "browse-root",
        path: "/browse/",
        components: {
            default: search,
            sidebar: sidebar,
            toolbar: toolbar,
        },
    },
    {
        name: "browse-collections",
        path: "/browse/collections/:id",
        components: {
            default: collection,
            sidebar: sidebar,
            toolbar: toolbar,
        },
        props: {
            default: route => defineParams(route, {type: "collections"}),
        },
    },
    {
        name: "browse-graphs",
        path: "/browse/graphs/:id",
        components: {
            default: collection,
            sidebar: sidebar,
            toolbar: toolbar,
        },
        props: route => defineParams(route, {type: "graphs"}),
    },
];

export {browseRoutes};

function defineParams(route, params) {
    Object.assign(route.params, params);
}
