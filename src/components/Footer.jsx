import {FaHome, FaLayerGroup, FaInfoCircle, FaPlusSquare} from 'react-icons/fa';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="btm-nav">
                {/* <Router>
                    <NavLink
                        to="/"
                        end
                        className=""
                        activeClassName=""

                        MAYBE THIS?
                        className={(navData) => 
                            navData.isActive
                            ? // CLASS NAMES FOR ACTIVE 
                            : // CLASS NAMES FOR ACTIVE
                        }
                    > */}
                        <NavLink as="button" to="/" className="text-secondary">
                                <FaHome />
                                <span className="btm-nav-label">Home</span>
                        </NavLink>
                        {/* <NavLink as="button" to="/recipes" end className="text-secondary">
                                <FaLayerGroup />
                                <span className="btm-nav-label">Recipes</span>
                        </NavLink> */}
                        <NavLink as="button" to="/recipes/new" className="text-secondary">
                                <FaPlusSquare />
                                <span className="btm-nav-label">Add</span>
                        </NavLink>
                        <NavLink as="button" to="/about" className="text-secondary">
                                <FaInfoCircle />
                                <span className="btm-nav-label">About</span>
                        </NavLink>
            </div>
        </>
    );
}

export default Footer;
