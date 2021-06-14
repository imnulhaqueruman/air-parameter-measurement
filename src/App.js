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
export const UserContext = createContext()
function App() {
  const[location, setLocation] = useState()
  const[value,setValue] = useState()
  const[dateTime,setDateTime] = useState()

  return (
    <UserContext.Provider value={[location,setLocation,value,setValue,dateTime,setDateTime]}>
      <Router>
        <Switch>
          <Route path="/location">
            <SelectSensorLocation></SelectSensorLocation>
          </Route>
          <Route path="/value">
           <ValueOfLocation location={location} value={value} date={dateTime}></ValueOfLocation>
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
