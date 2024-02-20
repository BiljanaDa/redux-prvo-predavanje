import React, { useState } from "react";

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState(0);

  const handleIncrement = () => {
    setCounterValue(counterValue + amountToAdd);
  };
  return (
    <div>
      <div>
        <h2>Counter: {counterValue}</h2>
        <button onClick={() => setCounterValue(counterValue + 1)}>
          Increment
        </button>
        <button onClick={() => setCounterValue(counterValue - 1)}>
          Decrement
        </button>
        <button onClick={() => setCounterValue(0)}>reset</button>
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => {
            setAmountToAdd(Number(e.target.value));
          }}
        />
        <button onClick={() => setCounterValue(handleIncrement)}>
          Add Amount
        </button>
      </div>
    </div>
  );
}
