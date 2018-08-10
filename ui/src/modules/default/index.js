import notFound from "./not-found";
import notFoundSidebar from "./sidebar";

const defaultRoutes = [
    {
        name: "root",
        path: "/",
        redirect: {
            name: "browse-root",
        },
    },
    {
        name: "not-found",
        path: "*",
        components: {
            default: notFound,
            sidebar: notFoundSidebar,
        },
    },
];

export {defaultRoutes};
