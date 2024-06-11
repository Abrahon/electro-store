import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { SidebarContext } from "../../../context/SidebarProvider";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../context/CartProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount, cart } = useContext(CartContext);
  console.log(cart);

  console.log(user?.displayName);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const NavSections = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/aboutus">About</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="font-semibold">
        <Link to="/dashboard/mycart">DASBOARD</Link>
      </li>
      {user?.email ? (
        <>
          <div className="ms-10">
            {user?.email && (
              <span className="text-green-600">{user?.displayName}</span>
            )}
          </div>
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li className="font-semibold">
            <Link to="/login">SignIn</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {NavSections}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-upercase  font-bold text-blue-700">
            <i>ELECTRO</i>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4 ">{NavSections}</ul>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-end cursor-pointer text-2xl text-yellow-200 mr-2"
        >
          <FaShoppingCart></FaShoppingCart>
          {cart ? (
            <><span className="text-sm">{itemAmount}</span></>
          ) : (
            <>
              <span>0</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
