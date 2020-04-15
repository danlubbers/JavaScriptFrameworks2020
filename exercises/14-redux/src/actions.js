import * as types from "./constants/actionTypes";

export const increaseCount = () => {
  return {
    type: types.INCREASE_COUNT
  };
};

export const decreaseCount = () => {
  return {
    type: types.DECREASE_COUNT
  }
};

export const toggle = () => {
  return {
    type: types.TOGGLE_TEXT
  }
};

export const pickColor = color => {
  console.log(color)
  return {
    type: types.PROPS_COLOR, color 
  }
  
};

export const setInput = todoInput => {
  return {
    type: types.TODO_INPUT, todoInput
  }
};

export const addTodo = () => {
  return {
    type: types.ADD_TODO
  }
  
};
