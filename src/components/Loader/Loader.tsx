import React from 'react';
import './Loader.css';
import yearConfig from '../../config.json';
import Spinner from 'react-bootstrap/Spinner'

type LoaderProps = {
  loading: boolean,
  year: string
}

type SpinnerMode = {
  animation: "grow" | "border",
  variant: string
}

const Loader = ({loading, year}: LoaderProps) => {

  let customStyle: SpinnerMode = {
    animation: 'border',
    variant: 'light'
  };

  if ((yearConfig as any)[year] && (yearConfig as any)[year].spinnerMode) {
    customStyle = (yearConfig as any)[year].spinnerMode;
  }

  let loader = null;

  if (loading) {
    loader = (<Spinner animation={customStyle.animation} variant={customStyle.variant} />)
  }

  return (
    <div className="Loader" data-testid="Loader">
      {loader}
    </div>
  );

};

export default Loader;
