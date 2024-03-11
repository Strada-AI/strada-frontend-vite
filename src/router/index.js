import generalRoutes from "./routes/general";
import authRoutes from "./routes/auth";

const routes = [
    ...generalRoutes,
    ...authRoutes
];

export default routes;
