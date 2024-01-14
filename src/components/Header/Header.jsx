import { Link, NavLink } from "react-router-dom";
import { FaBuilding } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Header = () => {


    const { user, logOut } = useAuth();
    console.log(user);

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res)
                toast.success('Logged Out Successfully!')
            })
            .catch(err => console.log(err))
    }

    const navLinks =
        <>
            <NavLink to={'/'}><li><a>Home</a></li></NavLink>
            <NavLink to={'/rooms'}><li><a>Rooms</a></li></NavLink>
            <NavLink to={'/about'}><li><a>About Us</a></li></NavLink>
            <NavLink to={'/bookings'}><li><a>My Bookings</a></li></NavLink>
            <NavLink to={'/faq'}><li><a>FAQ</a></li></NavLink>
            <NavLink to={'/contact'}><li><a>Contact Us</a></li></NavLink>
            {/* {
                user ? (
                    <>
                        <button onClick={handleLogout}><li><a>Logout</a></li></button>
                    </>
                ) : (
                    <NavLink to={'/login'}><li><a>Login</a></li></NavLink>
                )
            } */}
        </>

    return (<>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/"><a className="btn btn-ghost normal-case text-xl">
                    <FaBuilding></FaBuilding>
                    ResoNest</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li className="mb-2">
                                    <a className="justify-between">
                                        {user.displayName}
                                    </a>
                                </li>
                                <hr />
                                <li onClick={handleLogout}><a>Logout</a></li>
                            </ul>
                        </div>
                    </>

                        :
                        <Link to={'/login'}><button className="btn btn-ghost normal-case">Login</button></Link>
                }
            </div>
        </div>
    </>
    );
};

export default Header;