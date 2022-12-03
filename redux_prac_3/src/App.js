// src/App.js

import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNumber,
  minusNumber,
  multipleNumber,
  divisionNumber,
} from "./redux/modules/counter";

const App = () => {
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNumber(+value);
  };
  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  };
  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  };
  const onClickMultipleNumberHandler = () => {
    dispatch(multipleNumber(number));
  };
  const onClickDivisionNumberHandler = () => {
    dispatch(divisionNumber(number));
  };
  console.log(number);
  return (
    <div>
      {globalNumber}
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
      <button onClick={onClickMultipleNumberHandler}>곱하기</button>
      <button onClick={onClickDivisionNumberHandler}>나누기</button>
    </div>
  );
};
export default App;
