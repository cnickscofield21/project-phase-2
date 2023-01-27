import { useState } from "react";
import {Link} from "react-router-dom";
import { FaBars, FaCheck } from 'react-icons/fa';
import { MdDinnerDining } from 'react-icons/md';

function ThemesList({handleClick, currentTheme}) {
    const themes = ["acid", "aqua", "autumn", "black", "bumblebee", "business", 
                    "coffee", "corporate", "cupcake", "dark", "dracula",
                    "emerald", "fantasy", "forest", "garden", "halloween",
                    "lemonade", "light", "lofi", "luxury", "night", "pastel",
                    "retro", "synthwave", "valentine", "winter", "wireframe"];
    
    const themeItems = themes.map(themeItem => {
        const selected = (themeItem === currentTheme) ? <FaCheck /> : null;
        return(
            <li
                data-theme-value={themeItem}
                onClick={handleClick}
                key={themeItem}
            >
                <a data-theme-value={themeItem}>
                    {themeItem}&nbsp;{selected}
                </a>
            </li>
        );
    });
    
    return(
        <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
            <li><h3>Select Theme:</h3></li>
            {themeItems}
        </ul>
    );
}

function Header({onChangeTheme, currentTheme}) {
    const [searchQuery, setSearchQuery] = useState("");
    
    const handleClick = (e) => {
        onChangeTheme(e.target.dataset.themeValue);
    }

    // TODO: Add search functionality if time permits
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                <MdDinnerDining /> Mobile Chef</Link>
            </div>
            <div className="flex-none gap-2">
                {/* <div className="form-control">
                    <input
                        type="text"
                        placeholder="Recipe Search"
                        className="input input-bordered"
                    />
                </div> */}
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost "
                    >
                        <div className="w-10">
                            <FaBars />
                        </div>
                    </label>
                    <ThemesList handleClick={handleClick} currentTheme={currentTheme}/>
                </div>
            </div>
        </div>
    );
}

export default Header;
