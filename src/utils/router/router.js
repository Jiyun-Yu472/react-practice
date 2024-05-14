import { createBrowserRouter } from "react-router-dom";
import appRoute from "utils/router/routes/AppRoutes";
import counterRoute from "utils/router/routes/counterRoute";
import postRoute from "utils/router/routes/postRoute";

export const router = createBrowserRouter([
    appRoute,
    counterRoute,
    postRoute,
]);