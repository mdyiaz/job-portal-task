import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Experienced from "../components/Categories/Experienced";
import Fresher from "../components/Categories/Fresher";
import ItCompany from "../components/Categories/ItCompany";
import Contact from "../components/Contact/Contact";
import Main from "../Layout/Main/Main";
import ApplyNow from "../Page/ApplyNow/ApplyNow";
import Home from '../Page/Home/Home';
import Login from "../Page/Login/Login";
import Register from '../Page/Register/Register';
import PrivateRoute from "./PrivateRoute";

 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/fresher',
                element:<Fresher></Fresher>
            },
            {
                path:'/experienced',
                element:<Experienced></Experienced>
            },
            {
                path:'/itcompany',
                element:<ItCompany></ItCompany>
            },
            {
                path:'/applynow',
                element:<PrivateRoute><ApplyNow></ApplyNow></PrivateRoute>
            }
        ]
    }
])

export default router;