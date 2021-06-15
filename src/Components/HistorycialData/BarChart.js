import React, { useState } from 'react';
import { useEffect } from 'react';
import Nav from '../Nav/Nav';
import BarC from '../../Components/HistorycialData/BarC';
const BarChart = ({historyDateFrom,historyDateTo,location}) => {
    //console.log('dateForm',historyDateFrom)
    //console.log('dateTo',historyDateTo)
    const dateFrom = historyDateFrom;
    const dateTo= historyDateTo
    const From = () =>{
        const y= dateFrom.getUTCFullYear();
        const m = (dateFrom.getUTCMonth() +1);
        const d = dateFrom.getUTCDate();
        const Date_from  = y+'-'+((m <10)?'0':"")+m+'-'+((d<10)?'0':"")+d;
        return Date_from;
    }
    const To = () =>{
        const y= dateTo.getUTCFullYear();
        const m = (dateTo.getUTCMonth() +1);
        const d = dateTo.getUTCDate();
        const Date_To  = y+'-'+((m <10)?'0':"")+m+'-'+((d<10)?'0':"")+d;
        return Date_To;
    }
   // console.log(props)
   const[data,setData] = useState([])
   const url =`https://api.openaq.org/v2/measurements?city=London&location=${location}&parameter=no2&parameter=o3&date_from=${From()}&date_to=${To()}`;
   useEffect(() =>{
       fetch(url)
       .then(res =>res.json())
       .then(data => setData(data.results))
   },[])
    return (
        <div>
            <div>
                <h3>Historical Data visualizaton</h3>
                <Nav></Nav>
            </div>
           
            {
                <BarC data={data} location={location}></BarC>
            }
            
        </div>
    );
};

export default BarChart;