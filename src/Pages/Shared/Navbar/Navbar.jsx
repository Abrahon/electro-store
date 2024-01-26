import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
    
    const { user,logOut} = useContext(AuthContext);
    console.log(user?.displayName)

    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }

    const NavSections = <>

        <li className="font-semibold"><Link to='/'>Home</Link></li>
        <li className="font-semibold"><Link to='/'>About</Link></li>
        <li className="font-semibold"><Link to='/'>Blog</Link></li>
        {
            user?.email? <>
            <div className="ms-10">
            {user?.email && <span>Welcome, {user?.displayName}</span>}
                 
            </div>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>

            </> : <>

                <li className="font-semibold"><Link to='/login'>SignIn</Link></li>
            </>
        }
    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {NavSections}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl text-upercase  font-bold text-blue-700"><i>ELECTRO</i></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-4 ">
                        {NavSections}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;