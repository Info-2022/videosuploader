import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    return (
        <>
            <nav>
                <div>
                    <h2 className="knl">
                        <span className="cap">K</span>
                        <span className="small">n</span>
                        <span className="cap">O</span>
                        <span className="small">wl</span>
                        <span className="cap">E</span>
                        <span className="small">d</span>
                        <span className="cap">GE</span>
                    </h2>
                </div>

                <div id="navlinks">
                    <NavLink className="anchor" to="/">
                        Login
                    </NavLink>

                    <NavLink className="anchor" to="/signup">
                        Signup
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
