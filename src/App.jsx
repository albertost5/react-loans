import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatMoney, calculateTotalToPay } from "./helpers";

function App() {

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;
  
  const [quantity, setQuantity] = useState(MAX/2);
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);

  useEffect(()=> {
    setTotal(calculateTotalToPay(quantity, months));
  }, [quantity, months]);
  
  function handleChange(e) {
    setQuantity(+e.target.value);
  } 

  function handleClickDecrement() {
    const value = quantity - STEP;

    if( value < MIN ) {
      alert('Reached min value allowed.');
      return;
    }

    setQuantity(value);
  }
  
  function handleClickIncrease() {
    const value = quantity + STEP;

    if( value > MAX ) {
      alert('Reached max value allowed.');
      return;
    }

    setQuantity(value);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Button 
          operator="-"
          fn={handleClickDecrement}
        />
        <Button 
          operator="+"
          fn={handleClickIncrease}
        />
      </div>
      <input 
        type="range"
        className="w-full h-5 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatMoney(quantity)}  
      </p>
      
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Choose a <span className="text-indigo-600">month</span> to pay
      </h2>

      <select 
        className="mt-5 w-full p-2 bg-white border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={months}
        onChange={ e => setMonths(+e.target.value) }
      >
        <option value="6">6 Months</option>
        <option value="12">12 Months</option>
        <option value="24">24 Months</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center uppercase">
          Total <span className="text-indigo-600">to pay</span>
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">{months} Months</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatMoney(total)} Total </p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatMoney(total/months)} / month</p>
      </div>

    </div>
  )
}

export default App
