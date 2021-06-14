import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <div className="col-md-6  px-5">
                <h1 className="text-center text-white  py-5">Monitor the Air Quality parameters at various locations in
                London</h1>
                <Link to="/location"><button className="btn btn-secondary">SelectSensorLocation</button></Link>
            </div>
           
        </div>
    );
};

export default Home;