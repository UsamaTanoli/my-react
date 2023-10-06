
import React, { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './customHooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('pkr');
  const [convertedAmount, setConvertedAmount] = useState(1);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    const rate = currencyInfo[to];
    setConvertedAmount(amount * rate);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="w-full max-w-md mx-auto bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-5">
        <h1 className="text-3xl text-center font-extrabold text-white mb-4 font-serif">Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-2">
            <InputBox
              label={`From:  ${from.toUpperCase()}`}
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="flex items-center justify-center mb-2">
            <button
              type="button"
              className="border-2 border-white rounded-md bg-blue-600 text-white px-3 py-2"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="mb-4">
            <InputBox
              label={`To: ${to.toUpperCase()}`} 
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg mt-2"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
