import { FaCheck } from 'react-icons/fa';
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';

import styles from './Todo.module.css';

const Todo = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
    return (
        <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`} >
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>
                {todo.text}
            </div>
            <RiDeleteBin2Line
                className={styles.deleteIcon}
                onClick={() => handleDeleteTodo(todo.id)}
            />
            <FaCheck
                className={styles.checkIcon}
                onClick={() => handleToggleTodo(todo.id)}
            />
        </div>
    )
}

export default Todo;
