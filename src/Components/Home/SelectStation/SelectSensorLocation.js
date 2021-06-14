import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DateTimePicker from 'react-datetime-picker';
import { Link, useHistory } from 'react-router-dom';

const SelectSensorLocation = () => {
    const [option,setOption] = useState('Type Your location')
    const[locations,setLocations] = useState([])
    const[parameter,setParameter] = useState()
    const [date, setDate] = useState(new Date());
    const history = useHistory()
    const[location,setLocation,value,setValue,dateTime,setDateTime] = useContext(UserContext)
   
    useEffect(() =>{
        fetch('https://api.openaq.org/v1/measurements?city=London&locations')
        .then(res => res.json())
        .then(data => setLocations(data.results))
    },[])

    //console.log(locations)
    const handleChange=(e) =>{
        const value = e.target.value;
        setOption(value)
       
    }
    const handleSubmit = (e) =>{ 
        setDateTime(date)
        setLocation(option)
        setValue(parameter)
        console.log(dateTime,location,value)  
      
    }
    const handleParameter = (e) =>{
        const value = e.target.value;
        setParameter(value)
       
    }
    const handleDateTime = () =>{
        //const todayDate= today()
       
        setDate(date)
        
    }
   
  

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
               <div className="col-md-8 row">
                     <form className="d-flex" onSubmit={handleSubmit}>
                        <div className="col-md-5 mx-3">
                            <label className="px-3 text-warning form-label">Pick the sensor location of London: </label>
                            <select className="form-select" value={option} onChange={handleChange}>
                                {
                                    locations.map((location) => (
                                        <option value={location.location}>{location.location}</option>
                                    ))
                                }
                            </select>
                         
                         </div>
                         <div className='col-md-5 mx-3 '>
                             <label className="px-3 form-label">
                                 Select Parameter:
                              </label>
                                 <select className="form-select" value={parameter} onChange={handleParameter}>
                                        <option value="no">no</option>
                                        <option value="no2">no2</option>
                                        <option value="o3">o3</option>
                                 </select>     
                         </div>
                        
                         <Link to="/value">
                             <input className="btn btn-primary rounded-pill" type="submit" value="submit" onClick={handleSubmit}/> 
                          </Link>  
                    </form>
                       <div className='my-3 mx-3'>
                                <DateTimePicker
                                    onChange={handleDateTime}
                                    value={date}
                                    format="yyyy-MM-dd h:mm:ss a"
                                />
                        </div>
                </div>
            </div>
           

            
        </div>
    );
};

export default SelectSensorLocation;