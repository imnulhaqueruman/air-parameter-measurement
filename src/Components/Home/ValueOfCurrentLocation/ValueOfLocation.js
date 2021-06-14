import React, { useEffect } from 'react';
import { useState } from 'react';


const ValueOfLocation = ({location,value, date}) => {
    const y= date.getFullYear();
    const m = (date.getMonth() +1);
    const d = date.getDate();
    const todayDate  = y+'-'+m+'-'+d;
    console.log(location,value,date,todayDate)
    
    const[results,setResults] = useState([])

    const url = `https://api.openaq.org/v2/measurements?city=London&location=${location}&parameter=${value}&date_form=${todayDate}`;
    console.log(url)
    useEffect(() =>{
       fetch(url)
       .then((res) =>  res.json())
       .then(data => setResults(data.results))
    },[location,value,date])
    return (
        <div>
            <h1>Show thw value of No2,O3</h1>
        </div>
    );
};

export default ValueOfLocation;