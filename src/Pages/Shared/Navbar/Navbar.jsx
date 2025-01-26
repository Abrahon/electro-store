import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { SidebarContext } from "../../../context/SidebarProvider";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../context/CartProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount, cart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([])
  console.log(cart);

  console.log(user?.displayName);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  // search
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const filteredItems = items.filter(item =>
  //   item?.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // useEffect(()=>{
  //   fetch('products.json')
  //   .then(res=>res.json())
  //   .then(data=>setItems(data))

  // },[])

  const NavSections = (
    <>
      <li className="uppercase">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/collection">Collection</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/aboutus">About</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/dashboard">DASBOARD</NavLink>
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
          <li className="uppercase">
            <NavLink to="/login">SignIn</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="flex items-center gap-6">
     
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
            <Link to='/'><i>ELECTRO</i></Link>
          </a>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4 ">{NavSections}</ul>
        </div>
        
          {/* search */}
        
        <div className="navbar-end cursor-pointer text-2xl flex float-end items-center space-x-4 ">
        {/* <p>{0}</p> */}
        <FaSearch className="text-2xl "></FaSearch>
          <FaHeart className="text-none"></FaHeart>
          
          
          <div onClick={() => setIsOpen(!isOpen)} className="space-y-0 flex items-center">
          <FaShoppingCart ></FaShoppingCart>
          {cart ? (
            <>
              <span className="text-sm bg-green-500 w-[20px] rounded-full text-center -ml-1 ">{itemAmount}</span>
            </>
          ) : (
            <>
              <span>0</span>
            </>
          )}
          </div>
        </div>
        </div>
      
    </div>
  );
};

export default Navbar;
