import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import SelectSensorLocation from './Components/Home/SelectStation/SelectSensorLocation';

function App() {
  return (
    <div>
     <Home></Home>
     <SelectSensorLocation></SelectSensorLocation>
    </div>
  );
}

export default App;
