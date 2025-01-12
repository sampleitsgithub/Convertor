import React, { useId } from 'react';

function InputBar({ label, amount, onAmountChange, currencyOption=[], onCurrencyChange, selectCurrency }) {
 
 const labelId=useId();
    return (
    <div className='w-3/5 h-5/6 bg-gray-200 backdrop-blur-2xl opacity-60 relative z-0 pt-10 pl-10 pr-10 flex flex-col'>
      <h2 className='text-blue-700 text-xl font-bold z-10  ' >{label}</h2>
      <input
        className='w-4/5 h-12 mt-4 bg-white text-black px-4 py-2 border border-gray-300 rounded-md'
        type="number" 
        value={amount}
        onChange={(e) => onAmountChange(Number(e.target.value))}
        placeholder='Amount'
      />
      <select
        className='w-4/5 h-12 mt-4 bg-white text-black px-4 py-2 border border-gray-300 rounded-md'
        value={selectCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencyOption.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBar;
