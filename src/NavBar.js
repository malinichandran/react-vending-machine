import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
             
           
             <NavLink exact to = "/chips">
                Chips
             </NavLink>
            <NavLink exact to="/cookies">
                Cookies
            </NavLink>
            <NavLink exact to="/candies">
                Candies
            </NavLink>
        </nav>
       
    );
}

export default NavBar;