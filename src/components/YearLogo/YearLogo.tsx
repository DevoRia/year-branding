import React from 'react';
import './YearLogo.css';
import yearLogo from '../../assets/2021.png'

const YearLogo: React.FC = () => (
  <div className="YearLogo" data-testid="YearLogo">
    <img className="image" width="200px" src={yearLogo} alt="year"/>
  </div>
);

export default YearLogo;
