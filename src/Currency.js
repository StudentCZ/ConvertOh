import React from 'react';
import CurrencyRow from './CurrencyRow';

function Currency() {
  return (
    <>
      <CurrencyRow />
      <div>=</div>
      <CurrencyRow />
    </>
  );
}

export default Currency;
