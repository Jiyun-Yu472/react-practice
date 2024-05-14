import App from "App";
import Socket from "components/pages/socket/Socket"

const appRoute = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/socket',
        element: <Socket />
    },

];

export default appRoute;