import TodoItem from './TodoItem';


function TodoList({ todos, onTodoClick }) {

  return (
    <div>
      <ul className="todosList">
        {todos.map((todo) => {
          return (
            <TodoItem todo={todo} onTodoClick={onTodoClick}></TodoItem>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
