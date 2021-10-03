import React, {useEffect, useState} from 'react';
import './MonthsContainer.css';
import MonthLogo from "../MonthLogo/MonthLogo";
import Loader from "../Loader/Loader";
import {getImageUrl, monthPath} from "../../services/storage.service";

type MonthsContainerProps = {
  year: string;
}

const MonthsContainer = ({ year }: MonthsContainerProps) => {
  const [monthsList] = useState(['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']);
  const [monthLogos, setMonthLogos] = useState<JSX.Element[]>([]);
  const [preYear, setYear] = useState('year');
  const [loading, setLoading] = useState(true);
  let content = null;
  const monthLogosTemp: JSX.Element[] = [];
  const promises: Promise<any>[] = [];

  useEffect(() => {
    if (year !== preYear) {
      setYear(year);
      setLoading(true);

      for (let i = 0; i < monthsList.length; i++) {
        promises.push(getImageUrl(monthPath(year, monthsList[i])))
      }

      Promise.all(promises)
        .then(done => {
          done.map((url, i) => monthLogosTemp.push(<MonthLogo key={i} imageUrl={url}/>));
          setLoading(false);
          setMonthLogos(monthLogosTemp);
        });
    }
  })

  if (!loading) {
    content =
      <div className="content">
        { monthLogos }
      </div>
  }

  return (
    <div className="MonthsContainer" data-testid="MonthsContainer">
      <Loader loading={loading} year={year}/>
      { content }
    </div>
  );
};

export default MonthsContainer;
