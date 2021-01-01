import React from 'react';
import './App.css';
import YearLogo from "./components/YearLogo/YearLogo";
import MonthsContainer from "./components/MonthsContainer/MonthsContainer";

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <YearLogo/>
        <hr/>
        <MonthsContainer/>
      </div>
    </div>
  );
}

export default App;
