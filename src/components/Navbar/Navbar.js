import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-cstm">
            <ul className="navbar-list">
                <li>
                    <h1>Clicky!</h1>
                </li>
                <li className="navbar-item">
                    Messages to the user
                </li>
                <li className="navbar-item">
                    Scores here!
                </li>
            </ul>
        </div>
    )
}

export default Navbar;