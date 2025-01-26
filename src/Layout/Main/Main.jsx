// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import LeftSidebar from "../../Pages/Shared/LeftSidebar/LeftSidebar";
import Sidebar from "../../Pages/Shared/Sidebar/Sidebar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Sidebar></Sidebar>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;