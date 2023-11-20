import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import VisitorLayout from "./components/VisitorLayout";
import UserLayout from "./components/UserLayout";
import CoachLayout from "./components/CoachLayout";
import AdministratorLayout from "./components/AdministratorLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children:[
            {
                path: "/visitor",
                element: <VisitorLayout/>
            },
            {
                path: "/user",
                element: <UserLayout/>
            },
            {
                path: "/coach",
                element: <CoachLayout/>
            },
            {
                path: "/admin",
                element: <AdministratorLayout/>
            }
        ]
    },
    
]);

export default router;