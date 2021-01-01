import React from 'react';
import './Loader.css';

type LoaderProps = {
  loading: boolean,
}

const Loader = ({loading}: LoaderProps) => {
  let loader = null;
  if (loading) {
    loader = (<div className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>)
  }

  return (
    <div className="Loader" data-testid="Loader">
      {loader}
    </div>
  );

};

export default Loader;
