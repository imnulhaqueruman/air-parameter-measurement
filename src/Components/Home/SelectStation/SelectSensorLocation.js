import React, { useState } from 'react';

const SelectSensorLocation = () => {
    const [option,setOption] = useState()
    const[locations,setLocations] = useState()
    return (
        <div className="container mb-5 my-5">
            <div className="row d-flex">
               <div className="col-md-4">
                  <form>
                      <label className="px-3 text-primary form-label">Select The city:</label>
                      <select className="form-select" value="London">
                         <option value="london">London</option>
                      </select>
                  </form>
               </div>
               <div className="col-md-4">
                     <form>
                         <label className="px-3 text-warning form-label">Pick the sensor location of London:</label>
                         <select className="form-select" value="Type your location">
                             <option value="eastlondon">East London</option>
                         </select>
                     </form>
               </div>
               <div className="col-md-4">

               </div>
            </div>
            
        </div>
    );
};

export default SelectSensorLocation;