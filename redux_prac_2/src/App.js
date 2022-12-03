// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.
import { minusOne, plusOne } from "./redux/modules/counter";

// const App = () => {
//   const counterStore = useSelector((state) => state);
//const counterStore = useSelector(function(store){
//return state
//}); 이 3줄 코드와 7번의 코드는 같은 내용
//해석 : 우리는 function을 받을 것이고 그 안에 state가 들어가고
//이 안의 인자는 return state

//const number = useSelector((state) => state.cpimter.number)
//state안에 counter안에 number를 가져와라
//  {type:"PLUS_ONE"}
//   return <div></div>;
// };
//이렇게 화살표함수에서 꺼낸 state 인자는
//"현재 프로젝트에서 존재하는 redux module의 state를 가져와라"라는 뜻

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);
  console.log(number);
  return (
    <div>
      {number}
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -1
      </button>
    </div>
  );
};
//이 버튼을 누르면 dispatch를 통해서 +1 이라는 action을 실행해라
//위 코드를 통해 action객체를 reducer로 보낼 수 있다.

export default App;
