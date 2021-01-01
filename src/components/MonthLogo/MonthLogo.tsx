import React from 'react';
import './MonthLogo.css';

type MonthLogoProps = {
  imageUrl: any
}

const MonthLogo: ({imageUrl}: MonthLogoProps) => JSX.Element = ({ imageUrl }: MonthLogoProps) => (
  <div className="MonthLogo" data-testid="MonthLogo" >
    <img width="100px" src={imageUrl} alt="month"/>
  </div>
);

export default MonthLogo;
