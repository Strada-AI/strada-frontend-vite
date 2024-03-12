import React from "react";
import { BrowserRouter, Router } from "react-router-dom";

import routes from "./router/index";

function App() {
    return (
        <BrowserRouter>
            {routes.map((route) => (
                <Router key={route.name} {...route} />
            ))}
        </BrowserRouter>
    );
}
export default App;
