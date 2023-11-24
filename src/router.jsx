import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import VisitorLayout from "./components/VisitorLayout";
import UserLayout from "./components/UserLayout";
import CoachLayout from "./components/CoachLayout";
import AdministratorLayout from "./components/AdministratorLayout";
import HomeLayout from "./components/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/gym",
        element: <DefaultLayout/>,
        children:[
            {
                path: "user",
                element: <UserLayout/>
            },
            {
                path: "coach",
                element: <CoachLayout/>
            },
            {
                path: "admin",
                element: <AdministratorLayout/>
            }
        ],
        
        
    },
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
           { 
                path: "/",
                element: <VisitorLayout/>
            }
        ]
    }
    
]);

export default router;