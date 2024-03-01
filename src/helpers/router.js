export default class RouterHelper {
    static routeInterface = {
        name: string,
        path: string,
        component: () => { },
        exact: true,
        middleware: [],
        redirect: null
    };

    static isAuth = (route) => {
        return route.middleware.includes("auth");
    };

    static getRoutePath = (routes, name) => {
        return routes.find((route) => route.name === name).path;
    };

    static getRouteByPath = (routes, path) => {
        return routes.find((route) => route.path === path);
    };

    static routeExits = (routes, name) => {
        return routes.some((route) => route.name === name);
    };

    static makeRoutes = (routes, prefix = null, defaultValues = {}) => {
        return routes.map((route) => {
            const _route = {
                ...this.routeInterface,
                ...defaultValues,
                ...route,
            };

            if (prefix) {
                _route.path = `${prefix}${_route.path}`;
            }

            return _route;
        });
    };
}
