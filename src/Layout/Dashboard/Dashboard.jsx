import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";

const Dashboard = () => {
    const{user} = useContext(AuthContext)
    console.log(user)
    const isAdmin = true;

    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-row items-start justify-start my-8 mx-6">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side shadow-xl">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 space-y-2">
                    {/* Sidebar content here */}

                     {
                        isAdmin?
                        <>
                            <li className='font-semibold'><NavLink to="/dashboard/admin-home"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li className="font-semibold "><NavLink to="/dashboard/add-product"><FaCalendarAlt></FaCalendarAlt>AddItem</NavLink></li>
                            <li className="font-semibold"><NavLink to="/dashboard/manage-product"><FaWallet></FaWallet>Manage Items</NavLink></li>
                            {/* <li className="font-semibold"><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>Manage Bookings</NavLink></li> */}
                            <li className="font-semibold"><NavLink to='/dashboard/all-user'><FaHome></FaHome>All User</NavLink> </li>
                            
                        </> : <>
                        <li className="my-2"><NavLink to='/dashboard/user-home'><FaHome></FaHome>User Home</NavLink></li>
                            <li className='font-semibold'><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                            <li className='font-semibold'><NavLink  to='/dashboard/payment'><FaWallet></FaWallet>Payment History</NavLink></li> 
                            <li className='font-semibold'><NavLink  to='/dashboard/order-list'><FaWallet></FaWallet>Orders</NavLink></li> 
                            <li className='font-semibold'><NavLink  to='/dashboard/review'><FaWallet></FaWallet>Reviews</NavLink></li> 
                            
                        </>
                    } 
                  
                           
                </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;