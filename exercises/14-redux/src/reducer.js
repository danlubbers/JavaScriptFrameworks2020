import * as types from "./constants/actionTypes";

const reducer = (
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    count: 0,
    todos: ["Finish this assignment", "Read a book"],
    isVisible: false,
    color: '',
    todoInput: ''
  },
  action
) => {
  // console.log("action", action);
  switch (action.type) {
    case types.INCREASE_COUNT:
      return {...state, count: state.count + 1};
    /**
     * Add additional case statements here
     */
    case types.DECREASE_COUNT:
      return {...state, count: state.count - 1};
    
    case types.TOGGLE_TEXT:
      return {...state, isVisible: !state.isVisible};

    case types.PROPS_COLOR:
      return {...state, color: action.color};
    
    case types.TODO_INPUT:
      return {...state, todoInput: action.todoInput};

    case types.ADD_TODO:
      let newTodo = state.todos.push(state.todoInput)
      console.log(newTodo)
      return {...state, todos: [...state.todos], newTodo}

    default:
      return state;
  }
};

export default reducer;
