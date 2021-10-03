import React from 'react';
import './YearSelect.css';
import { NativeSelect} from "@material-ui/core";
import {getListOfYears} from "../../services/year.service";
import yearConfig from "../../config.json";

type YearSelectProps = {
  onYearChange: Function
  year: string
}


const YearSelect = ({ onYearChange, year }: YearSelectProps) => {

  const listYears: string[] | JSX.Element[] =
    getListOfYears()
      .map((year) => <option key={year} value={year}>{year}</option>)

  let customStyle: any = {};

  if ((yearConfig as any)[year] && (yearConfig as any)[year].selectStyle) {
    customStyle = (yearConfig as any)[year].selectStyle;
  }

  return (
    <div className="YearSelect" data-testid="YearSelect">
      <NativeSelect style={customStyle} value={year} onChange={(year) => onYearChange(year)} className="Select" id="select">
        {listYears}
      </NativeSelect>
    </div>
  );
};

export default YearSelect;
