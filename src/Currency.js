import React from 'react';
import CurrencyRow from './CurrencyRow';

function Currency() {
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div>=</div>
      <CurrencyRow />
    </>
  );
}

export default Currency;
