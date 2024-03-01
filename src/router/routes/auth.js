import RouterHelper from "@/helpers/router";

const routes = {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
};

const authRoutes = RouterHelper.makeRoutes([
    {
        name: "auth.login",
        path: routes.login,
        component: () => import("@/pages/Authentication/Login"),
    },
    {
        name: "auth.register",
        path: routes.register,
        component: () => import("@/pages/Authentication/Register"),
    },
    {
        name: "auth.forgot-password",
        path: routes.forgotPassword,
        component: () => import("@/pages/Authentication/ForgotPassword"),
    },
    {
        name: "auth.reset-password",
        path: routes.resetPassword,
        component: () => import("@/pages/Authentication/ResetPassword"),
    },
], "/auth", { middleware: ["guest"] });

export const getRoute = (name) => {
    return RouterHelper.getRoutePath(authRoutes, name);
};

export default authRoutes;
