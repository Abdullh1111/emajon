import { NavLink } from "react-router-dom";
import './nav.css'

const Nav = () => {
    return (
        <div>
           <ul className="md:flex justify-between p-8 text-2xl shadow-md">
                <p>emazon</p>
                <li className="flex gap-4">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/product"}>Product</NavLink>
                    <NavLink to={"/dashboard"}>Dashboard</NavLink>
                </li>
           </ul>
        </div>
    );
};

export default Nav;