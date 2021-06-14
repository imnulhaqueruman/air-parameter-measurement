import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
    <div>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >
                    <button className="btn btn-primary ">Home</button>
                </Link>
            </li>
            
        </ul>
    </div>
    );
};

export default Nav;