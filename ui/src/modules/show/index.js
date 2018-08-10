import showCollection from "./collection";

const showRoutes = [
    {
        name: "show-collections",
        path: "/show/collections/:id/:index",
        pathToRegexpOptions: {strict: true},
        components: {
            default: showCollection,
        },
        props: {
            default: true,
        },
    },
    {
        name: "show-graphs",
        path: "/show/graphs/:id",
        pathToRegexpOptions: {strict: true},
        components: {
            default: showCollection,
        },
        props: {
            default: true,
        },
    },
];

export {showRoutes};
