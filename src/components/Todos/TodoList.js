import Todo from './Todo';

import styles from './TodoList.module.css';

const TodoList = ({ todos, handleDeleteTodo, handleToggleTodo }) => {
    return (
        <div className={styles.todolistContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleToggleTodo={handleToggleTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;
