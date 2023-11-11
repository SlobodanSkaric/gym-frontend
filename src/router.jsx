import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import VisitorLayout from "./components/VisitorLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>
    },
    {
        path: "/visitor",
        element: <VisitorLayout/>
    }
]);

export default router;