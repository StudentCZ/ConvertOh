import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';
import style from './Currency.module.css';

const EXCHANGE_URL = `https://api.exchangerate.host/latest`;

function Currency() {
  const [currencyOption, setCurrencyOption] = useState([]);
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);

  useEffect(() => {
    fetch(EXCHANGE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[149];
        setCurrencyOption([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(Object.keys(data.rates)[149]);
        setToCurrency(data.base);
      });
  }, []);

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
        currencyOption={currencyOption}
        selectedCurrency={fromCurrency}
      />
      <div className={style.equals}>=</div>
      <CurrencyRow
        currencyOption={currencyOption}
        selectedCurrency={toCurrency}
      />
    </>
  );
}

export default Currency;
