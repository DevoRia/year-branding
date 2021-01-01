import React, {useEffect, useState} from 'react';
import './MonthsContainer.css';
import MonthLogo from "../MonthLogo/MonthLogo";
import Loader from "../Loader/Loader";


const MonthsContainer: React.FC = () => {
  const [monthsList] = useState(['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']);
  const [monthLogos, setMonthLogos] = useState<JSX.Element[]>([]);
  const [loading, setLoading] = useState(true);
  let content = null;
  const monthLogosTemp: JSX.Element[] = [];
  const promises: Promise<any>[] = [];

  useEffect(() => {
    if (loading) {
      for (let i = 0; i < monthsList.length; i++) {
        promises.push(import(`../../assets/${monthsList[i]}.png`))
      }

      Promise.all(promises)
        .then(done => {
          done.map((image, i) => monthLogosTemp.push(<MonthLogo key={i} imageUrl={image.default}/>));
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
      <Loader loading={loading}/>
      { content }
    </div>
  );
};

export default MonthsContainer;
