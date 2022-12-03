// src/redux/modules/counter.js

//App.js로 넘기기위해서 counter.js에서 먼저 작성 후 보내기

// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";
const MULTIPLE_NUMBER = "MULTIPLE_NUMBER";
const DIVISION_NUMBER = "DIVISION_NUMBER";

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};

export const multipleNumber = (payload) => {
  return {
    type: MULTIPLE_NUMBER,
    payload,
  };
};

export const divisionNumber = (payload) => {
  return {
    type: DIVISION_NUMBER,
    payload,
  };
};

//InitialState
const initialState = {
  number: 0,
};
//Reducer
const counter = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  console.log(action.payload);
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        number: state.number + action.payload,
      };
    }
    case MINUS_NUMBER: {
      return {
        number: state.number - action.payload,
      };
    }
    case MULTIPLE_NUMBER: {
      return {
        number: state.number * action.payload,
      };
    }
    case DIVISION_NUMBER: {
      return {
        number: state.number / action.payload,
      };
    }

    default:
      return state;
  }
};
// export default reducer
export default counter;
