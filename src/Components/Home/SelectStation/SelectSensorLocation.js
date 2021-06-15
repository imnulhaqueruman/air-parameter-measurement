import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DateTimePicker from 'react-datetime-picker';
import { Link} from 'react-router-dom';
import Nav from '../../Nav/Nav';

const SelectSensorLocation = () => {
    const [option,setOption] = useState('Type Your location')
    const[locations,setLocations] = useState([])
    //const[parameter,setParameter] = useState()
    const [date, setDate] = useState(new Date());
    const[dateFrom,setDateFrom] = useState(new Date())
    const[dateTo,setDateTo] = useState(new Date())
    //const history = useHistory()
    const[location,setLocation,dateTime,setDateTime,historyDateFrom,setHistoryDateFrom,historyDateTo,setHistoryDateTo] = useContext(UserContext)
   
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
        setHistoryDateFrom(dateFrom)
        setHistoryDateTo(dateTo)
        //setValue(parameter)
        console.log(dateTime,location,historyDateFrom,historyDateTo)  
      
    }
    /*const handleParameter = (e) =>{
        const value = e.target.value;
        setParameter(value)
       
    }*/
    const handleDateTime = () =>{
        //const todayDate= today()
       
        setDate(date)
        
    }
    const handleDateFrom = () =>{
        setDateFrom(dateFrom)
    }
    const handleDateTo = () =>{
        setDateTo(dateTo)
    }
    return (
        <div className="container mb-5 my-5">
            <div className="row d-flex flex-column">
                <div className="mb-5">
                    <Nav></Nav>
                </div>
               <div className="col-md-4">
                  <form>
                      <label className="px-3 text-primary form-label">Select The city:</label>
                      <select className="form-select" value="London">
                         <option value="london">London</option>
                      </select>
                  </form>
               </div>
               <div className='col-md-5 my-3 pt-3'>
                    <label className="text-secondary mx-1">Pick the Time : </label>
                                <DateTimePicker
                                    onChange={handleDateTime}
                                    value={date}
                                    format="yyyy-MM-dd h:mm:ss a"
                                />
                </div>
                
               <div className="col-md-12 row">
                     <form className="d-flex" onSubmit={handleSubmit}>
                        <div className="col-md-5 ">
                            <label className=" text-warning form-label">Pick the sensor location of London: </label>
                            <select className="form-select" value={option} onChange={handleChange}>
                                {
                                    locations.map((location) => (
                                        <option value={location.location}>{location.location}</option>
                                    ))
                                }
                            </select> 
                         </div>
                         <div className="col-md-5 mx-3 my-4 py-2">
                            <Link to="/value">
                                <input className="btn btn-success rounded-pill" type="submit" value="submit" onClick={handleSubmit}/> 
                            </Link>  
                         </div>
                    </form>      
                </div>
                
            </div>
            <div className='col-md-5 my-3 pt-3'>
                    <label className="text-secondary mx-1">Pick the Time of History : </label>
                                <DateTimePicker
                                    onChange={handleDateFrom}
                                    value={dateFrom}
                                    format="yyyy-MM-dd h:mm:ss a"
                                />
            </div>
            <div className='col-md-5 my-3 pt-3'>
                    <label className="text-secondary mx-1">Pick the Time of History : </label>
                                <DateTimePicker
                                    onChange={handleDateTo}
                                    value={dateTo}
                                    format="yyyy-MM-dd h:mm:ss a"
                                />
            </div>
             
        </div>
    );
};

export default SelectSensorLocation;