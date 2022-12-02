// src/modules/counter.js

// 초기 상태값(객체, 배열, 원시데이터 0,1,2도 가능)
const initialState = {
  number: 0, //깩체로 변수에 값을 할당해주었음, 여러개도 가능
};

// reducer(리듀서) : 변화를 일으키는 함수
const counter = (state = initialState, action) => {
  //state는 initialState고 action을 넘겨준다.
  switch (action.type) {
    case "PLUS_ONE":
      return { number: state.number + 1 };
    case "MINUS_ONE":
      return { number: state.number - 1 };
    default:
      return state; //??없어져도 실행됨, 콘솔은안되는데 콘솔문제인가?
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
