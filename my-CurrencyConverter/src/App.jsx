import { useState } from 'react';
import useCurrencyConverter from './Hook/useCurrencyConverster';
import InputBar from './Component/InputBar';
import SwapButton from'./Component/SwapButton';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyConverter(from);

  const options = Object.keys(currencyInfo);

  const swap = (e) => {
    e.preventDefault();
  
    setAmount(convertedAmount);
    setConvertedAmount(amount);
      
   
    setFrom(to);
    setTo(from);
  };

  const convert = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <form action=" ">
      <div className="flex flex-col justify-center items-center w-full h-screen bg-[url('https://images.pexels.com/photos/28210169/pexels-photo-28210169/free-photo-of-a-small-house-on-a-hillside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')]"
      >
        <div className=' flex flex-col justify-center items-center w-4/6 h-5/6 relative z-0'>
          <InputBar
            label="from"
            amount={amount}
            onAmountChange={(newAmount) => setAmount(newAmount)}
            currencyOption={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
          />
           <div>
      <button className='bg-blue-600 text-white rounded-md  w-24 h-12 mt-8 mb-8 font-bold'  onClick={swap}>SWAP</button>
    </div>
          <InputBar
            label="to"
            amount={convertedAmount}
            onAmountChange={() => {}} // No need to change the converted amount directly
            currencyOption={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
          />
          <button
            type="submit"
            onClick={convert}
            className='bg-blue-600 w-44 rounded-lg text-white font-extrabold p-1 mt-6 drop-shadow-md'
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </form>
  );
}

export default App;
