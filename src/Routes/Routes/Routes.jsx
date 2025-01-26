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
import Collection from "../../Pages/Collection/Collection";
import Contact from "../../Pages/Contact/Contact";
import Checkout from "../../Pages/Checkout/Checkout";
import CartItem from "../../Pages/CartItem/CartItem";
import ViewCart from "../../Pages/ViewCart/ViewCart";
import Order from "../../Pages/Order/Order";
import OrderList from "../../Pages/Dashboard/OrderList/OrderList";
import AdminHome from "../../Pages/Dashboard/AdminHome/AdminHome";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import UserHome from "../../Pages/Dashboard/UserHome/UserHome";

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
                path: '/collection',
                element:<Collection></Collection>
            },
            {
                path: '/productdetails/:_id',
                element: <ProductDetails ></ProductDetails>,
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
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path: '/',
                element:<Sidebar></Sidebar>
            },
            {
                path: '/checkout',
                element:<Checkout></Checkout>
            },
            {
                path: '/viewcart',
                element:<ViewCart></ViewCart>
            },
            {
                path: '/order-recive',
                element: <Order></Order>
            }

        ]
    },

    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'admin-home',
                element:<AdminHome></AdminHome>
            },
            {
                path:'add-product',
                element:<AddProduct></AddProduct>
            },
            {
                path:'mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'add-user',
                element:<AllUser></AllUser>
            },
            {
                path:'manage-product',
                element:<ManageProduct></ManageProduct>

            },
            {
                path:'order-list',
                element:<OrderList></OrderList>

            },
            {
                path:'all-user',
                element:<AllUser></AllUser>
            },
            {
                path:"payment",
                element:<Payment></Payment>
            },
            {
                path:"user-home",
                element:<UserHome></UserHome>
            }
        ]
    }
])