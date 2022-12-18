import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatMoney } from "./helpers";

function App() {

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;
  
  const [quantity, setQuantity] = useState(MAX/2);
  
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
    <div className="my-20 mx-w-lg mx-auto bg-white shadow p-10">
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
    </div>
  )
}

export default App
