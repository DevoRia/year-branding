import React, {useState} from 'react';
import './App.css';
import YearLogo from "./components/YearLogo/YearLogo";
import MonthsContainer from "./components/MonthsContainer/MonthsContainer";
import YearSelect from "./components/YearSelect/YearSelect";
import {createMuiTheme} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {

  const [year, setYear] = useState('2021');

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="app">
        <YearSelect onYearChange={(event: any) => setYear(event.target.value)}/>
        <div className="app-content">
          <YearLogo year={year}/>
          <hr/>
          <MonthsContainer year={year}/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
