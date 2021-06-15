import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import SelectSensorLocation from './Components/Home/SelectStation/SelectSensorLocation';
import ValueOfLocation from './Components/Home/ValueOfCurrentLocation/ValueOfLocation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BarChart from './Components/HistorycialData/BarChart';


export const UserContext = createContext()
function App() {
  const[location, setLocation] = useState()
  //const[value,setValue] = useState()
  const[dateTime,setDateTime] = useState()

  const[historyDateFrom,setHistoryDateFrom] = useState()
  const[historyDateTo,setHistoryDateTo] = useState()
  console.log(historyDateFrom)
  return (
    <UserContext.Provider value={[location,setLocation,dateTime,setDateTime,historyDateFrom,setHistoryDateFrom,historyDateTo,setHistoryDateTo]}>
      <Router>
        <Switch>
          <Route path="/location">
            <SelectSensorLocation></SelectSensorLocation>
          </Route>
          <Route path="/value">
           <ValueOfLocation location={location}  date={dateTime}></ValueOfLocation>
          </Route>
          <Route path='/barChat'>
            <BarChart historyDateFrom={historyDateFrom} historyDateTo={historyDateTo} location={location}></BarChart>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
