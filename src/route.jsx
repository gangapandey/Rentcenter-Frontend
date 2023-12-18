import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/auth/register/Register";
import Loginn from "./pages/auth/login/Loginn";

const router = createBrowserRouter ([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "/about",
        element : <h1>This is about page</h1>
    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/login",
        element : <Loginn />
    }
    
])

export default router