import React, {useState} from 'react';
import './App.css';
import YearLogo from "./components/YearLogo/YearLogo";
import MonthsContainer from "./components/MonthsContainer/MonthsContainer";
import YearSelect from "./components/YearSelect/YearSelect";
import {createMuiTheme} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';
import yearConfig from './config.json';
import {getCurrentYear} from "./services/year.service";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  let customStyle = {};
  let customHrStyle = {};

  const [year, setYear] = useState(getCurrentYear().toString());

  if ((yearConfig as any)[year] && (yearConfig as any)[year].style) {
    customStyle = (yearConfig as any)[year].style;
  }

  if ((yearConfig as any)[year] && (yearConfig as any)[year].hrStyle) {
    customHrStyle = (yearConfig as any)[year].hrStyle;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={customStyle} className="app">
        <YearSelect year={year} onYearChange={(event: any) => setYear(event.target.value)}/>
        <div className="app-content">
          <YearLogo year={year}/>
          <hr style={customHrStyle}/>
          <MonthsContainer year={year}/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
