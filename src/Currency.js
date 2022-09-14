import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';
import style from './Currency.module.css';

const EXCHANGE_URL = `https://api.exchangerate.host/latest`;

function Currency() {
  const [currencyOption, setCurrencyOption] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(0);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    fromAmount = amount / exchangeRate;
    toAmount = amount;
  }

  useEffect(() => {
    fetch(EXCHANGE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[149];
        setCurrencyOption([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(Object.keys(data.rates)[149]);
        setToCurrency(data.base);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
        currencyOption={currencyOption}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
      />
      <div className={style.equals}>=</div>
      <CurrencyRow
        currencyOption={currencyOption}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
      />
    </>
  );
}

export default Currency;
