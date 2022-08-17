import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><a className="active-nav" href="#home">Home</a></li>
                <li><a href="#home">Photos</a></li>
            </ul>
        </div>
    )
}

export default Navbar;