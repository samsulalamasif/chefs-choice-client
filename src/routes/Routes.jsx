import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Error from '../components/Error/Error';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Blogs from '../pages/Blogs/Blogs';
import ChefDetails from '../pages/ChefDetails/ChefDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "chefs/:id",
                element: <ChefDetails></ChefDetails>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "blog",
                element: <Blogs></Blogs>
            },
        ]
    }
])

export default router;