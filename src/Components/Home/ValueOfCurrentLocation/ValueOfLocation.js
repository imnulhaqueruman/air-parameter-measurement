import React, { useEffect } from 'react';
import { useState } from 'react';
import Nav from '../../Nav/Nav';
import './ValueOfLocation.css';


const ValueOfLocation = ({location, date}) => {
    const todayDate = () =>{
        const y= date.getUTCFullYear();
        const m = (date.getUTCMonth() +1);
        const d = date.getUTCDate();
        const Date  = y+'-'+((m <10)?'0':'')+m+'-'+((d<10)?'0':"")+d;
        return Date;
    }
    /*const y= date.getUTCFullYear();
    const m = (date.getUTCMonth() +1);
    const d = date.getUTCDate();
    const todayDate  = y+'-'+((m <10)?'0':'')+m+'-'+((d<10)?'0':"")+d;*/
     const Time = () =>{
        const h = date.getUTCHours()
        const mi = date.getUTCMinutes()
        const s = date.getUTCSeconds()
        const time = +((h<10)?'0':'')+h-3+":" + "00" + ":" + "00";
        console.log(time)
        return time;
     }
    /*const h = date.getUTCHours()
    const mi = date.getUTCMinutes()
    const s = date.getUTCSeconds()
    const Time = +((h<10)?'0':'')+h-3+":" + "00" + ":" + "00";
    console.log('Time',Time)*/
    
    const dateTime= todayDate() + "T" + Time() +'+' + '00:00';
    console.log(dateTime)
   //console.log(location,date,todayDate)
    
    const[results,setResults] = useState([])
   
  

    const url =`https://api.openaq.org/v2/measurements?city=London&location=${location}&parameter=no2&parameter=o3&date_form=${todayDate()}`;
    //console.log(url)
    useEffect(() =>{
        fetch(url)
       .then((res) =>  res.json())
       .then(data => {
           setResults(data.results)
           console.log('apiDate', data.results[3].date.utc)
    })
    },[location,date])

   
    return (
        <div className="background">
            <div className="container">
               <div>
                   <Nav></Nav>
               </div>
               <div>
                   {
                     results.map((result) => (
                         (result.date.utc === dateTime) && <ul>
                             <li>{result.parameter}</li>
                         </ul>
                     ))
                   }
               </div>

            </div>
        
        </div>
    );
};

export default ValueOfLocation;