import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Landing from "../Pages/Landing/Landing";
import Board1 from "../Pages/Board1/Board1"
import DevGuide from "Pages/DevGuide/DevGuide";

/**
 * To add a new page, make a new element in the Pages folder and add a
 * new Route below linking that element to the corresponding URL path.
 */
export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landing />,
        },
        {
            path: "/dev-guide",
            element: <DevGuide />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path : "/board1",
            element: <Board1 />,
        },
    ]);
    return <RouterProvider router={router} />;          
}
