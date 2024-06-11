import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";

const Dashboard = () => {
    const{user} = useContext(AuthContext)

    const isAdmin = true;
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-row items-start justify-start">
                    {/* Page content here */}

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    
                 <h1>User name : {user?.displayName}</h1>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-white ">
                    {/* Sidebar content here */}

                     {
                        isAdmin?
                        <>
                            <li className='bg-none'><NavLink to="/dashboard"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/additem"><FaCalendarAlt></FaCalendarAlt>AddItem</NavLink></li>
                            <li><NavLink to="/dashboard/manageitem"><FaWallet></FaWallet>Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>Manage Bookings</NavLink></li>
                            <li ><NavLink to='/dashboard/alluser'><FaHome></FaHome>All User</NavLink> </li>
                            
                        </> : <>
                        <li className="my-2"><Link to='/dashboard'><FaHome></FaHome>User Home</Link></li>
                            <li><Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</Link></li>
                            <li><Link to='/dashboard/paymenthistory'><FaWallet></FaWallet>Payment History</Link></li> 
                            
                            

                        </>
                    } 
                  
                           
                </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;