import RouterHelper from "@/helpers/router";

const routes = {
    playground: "/playground"
};

export const generalRoutes = RouterHelper.makeRoutes([
    {
        name: "playground",
        path: routes.playground,
        component: () => import("@/Playground"),
    },
]);
