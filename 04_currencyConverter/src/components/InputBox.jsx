import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-4 rounded-lg text-white text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-gray-800 mb-2 block font-semibold">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-2.5 border-b border-gray-300 placeholder-gray-400 text-gray-800"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          // value={amount}
          value={amount === 0 ? '' : amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          onFocus={(e) => e.target.select()}
          
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-gray-800 mb-2 w-full font-semibold">Currency Type</p>
        <select
          className="rounded-lg px-2 py-2 bg-white cursor-pointer outline-none text-gray-800"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="text-gray-800">
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
