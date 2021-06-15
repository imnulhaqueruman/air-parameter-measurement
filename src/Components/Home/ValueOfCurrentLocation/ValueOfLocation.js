import React, { useEffect } from 'react';
import { useState } from 'react';
import Nav from '../../Nav/Nav';
import './ValueOfLocation.css';


const ValueOfLocation = ({location, date}) => {
    console.log('date',date)
    // For taking the Date from date props i called a todayDate arrow function
    const todayDate = () =>{
        const y= date.getUTCFullYear();
        const m = (date.getUTCMonth() +1);
        const d = date.getUTCDate();
        const Date  = y+'-'+((m <10)?'0':"")+m+'-'+((d<10)?'0':"")+d;
        return Date;
    }
    /*const y= date.getUTCFullYear();
    const m = (date.getUTCMonth() +1);
    const d = date.getUTCDate();
    const todayDate  = y+'-'+((m <10)?'0':'')+m+'-'+((d<10)?'0':"")+d;*/
     /*const Time = () =>{
        const h = date.getUTCHours()
        const mi = date.getUTCMinutes()
        const s = date.getUTCSeconds()
        const time = +((h<10)?'0':"")+h-2+":" + "00" + ":" + "00";
        console.log(time)
        return time;
     }*/
    // take current Time from date props 
    const h = date.getUTCHours()
    const mi = date.getUTCMinutes()
    const s = date.getUTCSeconds()
    const Time = +((h<10)?(h-1):(h-2))+":" + "00" + ":" + "00";
    const time = +((h>10)&&(h-3))+":" + "00" + ":" + "00";
    console.log('Time',Time)
    console.log(time)

    
    const dateTime= todayDate() + "T" +((h-3<10)?'0':'')+ ((h<10)?Time:time) +'+' +'01:00';
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
           console.log('apiDate', data.results[0].date.local)
    })
    },[location,url,date])

   
    return (
        <div className="background">
            <div className="container bg-highlight">
               <div>
                   <Nav></Nav>
                   
               </div>
               <div>
                   {
                     results.map((result) => (
                         (result.date.local === dateTime) && <div className="card mb-5 bg-secondary bg-gradient" style={{width:'25rem'}}>
                             <div class="card-header">
                                    {result.location} 
                             </div>
                         <ul className="list-group bg-default list-group-flush">
                           <li className="list-group-item bg-default">{result.parameter}</li>
                           <li className="list-group-item bg-default">{result.value} {result.unit}</li>
                         </ul>
                       </div>
                     ))
                   }
               </div>

            </div>
        
        </div>
    );
};

export default ValueOfLocation;