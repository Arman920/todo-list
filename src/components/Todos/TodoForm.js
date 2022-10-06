import { useState } from "react";

import Button from "../UI/Button";

import styles from './TodoForm.module.css';

const TodoForm = ({ handleAddTodo }) => {

    const [text, setText] = useState('');

    const onSubmitHandler = event => {
        event.preventDefault();
        handleAddTodo(text);
        setText('');
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder='Введите текст...'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <Button type='submit' title='Submit'>
                    Добавить
                </Button>
            </form>
        </div>
    )
};

export default TodoForm;
