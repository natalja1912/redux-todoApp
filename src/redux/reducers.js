export const todos = (state = [], action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      case "TOGGLE_TODO":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else return todo;
        });
      default:
        return state;
    }
  };
  
  export const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
      case "SET_VISIBILITY_FILTER":
        return action.filter;
      default:
        return state;
    }
  };