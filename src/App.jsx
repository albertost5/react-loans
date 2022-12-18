import { useState } from "react";
import Header from "./components/Header";

function App() {

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;
  
  const [quantity, setQuantity] = useState(MAX/2);
  
  function handleChange(e) {
    setQuantity(+e.target.value);
  } 
  
  return (
    <div className="my-20 mx-w-lg mx-auto bg-white shadow p-10">
      <Header />
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
        {quantity}  
      </p>
    </div>
  )
}

export default App
