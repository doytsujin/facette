import browseCollection from "./collection";
import browseSearch from "./search";
import browseSidebar from "./sidebar";

const browseRoutes = [
    {
        name: "browse-root",
        path: "/browse/",
        pathToRegexpOptions: {strict: true},
        components: {
            default: browseSearch,
            sidebar: browseSidebar,
        },
    },
    {
        name: "browse-collections",
        path: "/browse/collections/:id",
        pathToRegexpOptions: {strict: true},
        components: {
            default: browseCollection,
            sidebar: browseSidebar,
        },
        props: {
            default: true,
            sidebar: true,
        },
    },
    {
        name: "browse-graphs",
        path: "/browse/graphs/:id",
        pathToRegexpOptions: {strict: true},
        components: {
            default: browseCollection,
            sidebar: browseSidebar,
        },
        props: {
            default: true,
            sidebar: true,
        },
    },
];

export {browseRoutes};
