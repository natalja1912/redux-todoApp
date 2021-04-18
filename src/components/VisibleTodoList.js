import { connect } from "react-redux";
import { toggleTodo } from "../redux/ActionCreators";
import TodoList from "./TodoList";

function mapStateToProps(state) {
    return { todos: getVisibleTodos(state.todos, state.visibilityFilter) };
}

const mapDispatchToProps = (dispatch) => {
    return {
      todoOnClick: (id) => dispatch(toggleTodo(id))
    }
  }

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_ACTIVE":
            return todos.filter((todo) => !todo.completed);
        case "SHOW_COMPLETED":
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    }
}

function VisibleTodoList(props) {
    return (
        <TodoList
            todos={props.todos}
            onTodoClick={props.todoOnClick}
        />
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);