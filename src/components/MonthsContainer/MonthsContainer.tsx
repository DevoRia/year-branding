import React, {useEffect, useState} from 'react';
import './MonthsContainer.css';
import MonthLogo from "../MonthLogo/MonthLogo";


const MonthsContainer: React.FC = () => {
  const [monthsList] = useState(['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']);
  const [monthLogos, setMonthLogos] = useState<JSX.Element[]>([]);
  const [refresh, setRefresh] = useState(false);
  const monthLogosTemp: JSX.Element[] = [];
  const promises: Promise<any>[] = [];

  useEffect(() => {
    if (!refresh) {
      for (let i = 0; i < monthsList.length; i++) {
        promises.push(import(`../../assets/${monthsList[i]}.png`))
      }

      Promise.all(promises)
        .then(done => {
          done.map((image, i) => monthLogosTemp.push(<MonthLogo key={i} imageUrl={image.default}/>));
          setRefresh(true);
          setMonthLogos(monthLogosTemp);
        });
    }
  })

  return (
    <div className="MonthsContainer" data-testid="MonthsContainer">
      { monthLogos }
    </div>
  );
};

export default MonthsContainer;
