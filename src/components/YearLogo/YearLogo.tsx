import React, {useEffect, useState} from 'react';
import './YearLogo.css';
import {getImageUrl, yearPath} from "../../services/storage.service";
import Loader from "../Loader/Loader";

type YearLogoProps = {
  year: string;
}

const YearLogo = ({year}: YearLogoProps) => {
  const [loading, setLoading] = useState(true);
  const [preYear, setYear] = useState('year');
  const [url, setUrl] = useState('year');
  let image = null;

  useEffect(() => {
    if (year !== preYear) {
      setYear(year);
      setLoading(true);
      getImageUrl(yearPath(year))
        .then((url: string) => {
          setUrl(url);
          setLoading(false);
        })
    }
  });

  if (!loading) {
    image = <img className="image" width="200px" src={url} alt="year"/>
  }

  return (
    <div className="YearLogo" data-testid="YearLogo">
      <Loader loading={loading} year={year} />
      {image}
    </div>
  );
};

export default YearLogo;
