import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    //{window.location.href === 'http://localhost:3000/value'&& <li className="nav-item my-2"> for localhost
    return (
    <div>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >
                    <button className="btn btn-primary ">Home</button>
                </Link>
            </li>
            {window.location.href === 'https://air-parameter-measurement.web.app/value'&& <li className="nav-item my-2">
               <Link to="/barChat">
                       <button className="btn btn-warning">checkHistory</button>
                </Link>
            </li>}
            
        </ul>
    </div>
    );
};

export default Nav;