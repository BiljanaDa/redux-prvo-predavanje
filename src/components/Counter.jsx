import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../store/counter/selectors";
import { addAmount, decrement, increment, reset } from "../store/counter/slice";

export default function Counter() {
  //   const [counterValue, setCounterValue] = useState(0);
  const dispatch = useDispatch();
  const counterValue = useSelector(counterSelector);
  const [amountToAdd, setAmountToAdd] = useState(0);

  //   const handleIncrement = () => {
  //     setCounterValue(counterValue + amountToAdd);
  //   };
  return (
    <div>
      <div>
        <h2>Counter: {counterValue}</h2>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          reset
        </button>
      </div>
      <div>
        <input
          type="number"
          value={amountToAdd}
          onChange={(e) => {
            setAmountToAdd(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch(addAmount(amountToAdd));
          }}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
