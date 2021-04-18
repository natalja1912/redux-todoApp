import { useState } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../redux/ActionCreators';

const AddTodo = (props) => {
  const [newTodoValue, setNewTodoValue] = useState("");

  function submitValue() {
    props.dispatch(addTodo(newTodoValue));
    setNewTodoValue("");
  }

  return (
    <div>
      <input
        className="todoInputValue"
        type="text"
        value={newTodoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
      />
      <button onClick={() => submitValue()} className="todoInputButton">
        Add task
      </button>
    </div>
  );
};

export default connect(null, null)(AddTodo);
