import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./Header";
import Home from "./Home";

export const Router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/favorities',
                element:<Header/>
            },
        ],
    },
])