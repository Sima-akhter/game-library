
import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import GameDetails from "../Pages/GameDetails";
import AboutDeveloper from "../Pages/AboutDeveloper";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Components/AuthLayout";
import PrivateRoute from "../Pages/PrivateRoute";
import Loading from "../Pages/Loading";
import MyProfile from "../Pages/MyProfile";
import EditProfile from "../Pages/EditProfile";
import ForgotPassword from "../Pages/ForgotPassword";
import ErrorPages from "../Pages/ErrorPages";


const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                index: true,
                element:<Home></Home>,
            },
            {
                path: '/about',
                element:<AboutDeveloper></AboutDeveloper>,
            },
            {
                path: '/games/:id',
                element:<PrivateRoute>
                    <GameDetails></GameDetails>
                </PrivateRoute>,
                loader:() => fetch('../GameData.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            },
            {
                path: '/updateInformation',
                element: <PrivateRoute>
                    <EditProfile></EditProfile>
                </PrivateRoute>
            },
            {
                path: '/forgotPassword',
                element: <ForgotPassword></ForgotPassword>
            }
        ]
    },
    {
        path:'/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
             {
                path: '/auth/login',
                element:<Login></Login>,
            },

             {
                path: '/auth/register',
                element:<Register></Register>,
            },

        ]
    },
    {
        path:'/*',
        element: <ErrorPages></ErrorPages>,
    },

]);
export default router;