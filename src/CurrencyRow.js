import React from 'react';
import style from './CurrencyRow.module.css';

function CurrencyRow(props) {
  const { currencyOption } = props;
  return (
    <div>
      <input type='number' className={style.input} />
      <select>
        {currencyOption.map((option, id) => (
          <option key={id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
