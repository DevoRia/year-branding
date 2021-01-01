import React from 'react';
import './YearSelect.css';
import { NativeSelect} from "@material-ui/core";
import {getListOfYears} from "../../services/year.service";

type YearSelectProps = {
  onYearChange: Function
}


const YearSelect = ({ onYearChange }: YearSelectProps) => {

  const listYears: string[] | JSX.Element[] =
    getListOfYears()
      .map((year) => <option key={year} value={year}>{year}</option>)

  return (
    <div className="YearSelect" data-testid="YearSelect">
      <NativeSelect onChange={(year) => onYearChange(year)} className="Select" id="select">
        {listYears}
      </NativeSelect>
    </div>
  );
};

export default YearSelect;
