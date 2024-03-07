import { Navigate, useLocation } from "react-router-dom";
const RedirectRoute = ({ redirect }) => {
    const location = useLocation();

    return (
        <Navigate to={redirect} state={{ from: location }} replace />
    );
};

export default RedirectRoute;
