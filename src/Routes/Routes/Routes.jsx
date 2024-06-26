import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import MyCart from "../../Pages/Dashboard/MyCart/MyCart";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import ManageProduct from "../../Pages/Dashboard/ManageProduct/ManageProduct";
import Blog from "../../Pages/Blog/Blog"
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Sidebar from "../../Pages/Shared/Sidebar/Sidebar";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/productdetails/:_id',
                element: <ProductDetails></ProductDetails>,
                // loader:({params})=>fetch(`http://localhost:5173/productdetails/${params._id}`)
            },
            {
                path: '/signup' ,
                element: <SignUp></SignUp> 
            },
            {
                path: '/login',
                element :<Login></Login>
            },
            {
                path:'/blog',
                element :<Blog></Blog>
            },
            {
                path: '/aboutus',
                element:<AboutUs></AboutUs>
            },
            {
                path: '/',
                element:<Sidebar></Sidebar>
            }

        ]
    },

    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'adduser',
                element:<AllUser></AllUser>
            },
            {
                path:'manageproduct',
                element:<ManageProduct></ManageProduct>

            }
        ]
    }
])