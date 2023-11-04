import { NavLink } from "react-router-dom";

const NavLinks = () => {

    return (
        <div>
            <NavLink to={'/'}><li><a>Home</a></li></NavLink>
            <NavLink to={'/rooms'}><li><a>Rooms</a></li></NavLink>
            <NavLink to={'/bookings'}><li><a>My Bookings</a></li></NavLink>
        </div>
    );
};

export default NavLinks;