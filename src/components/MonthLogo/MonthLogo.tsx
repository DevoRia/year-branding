import React from 'react';
import './MonthLogo.css';

type MonthLogoProps = {
  imageUrl: any
}

const MonthLogo: ({imageUrl}: MonthLogoProps) => JSX.Element = ({ imageUrl }: MonthLogoProps) => (
  <div className="MonthLogo" data-testid="MonthLogo" >
    <div className="holder">
      <img src={imageUrl} alt="month"/>
    </div>
  </div>
);

export default MonthLogo;
