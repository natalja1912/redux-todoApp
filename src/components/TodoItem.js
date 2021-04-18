function TodoItem({todo, onTodoClick}) {
    return (
        <li
            className="todoItem"
            key={todo.id}
            style={{
                textDecoration: todo.completed ? "line-through" : "none"
            }}
            onClick={() => onTodoClick(todo.id)}
        >
            {todo.text}
        </li>
    )
};

export default TodoItem;