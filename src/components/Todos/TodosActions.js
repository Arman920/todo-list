import Button from "../UI/Button";

import { RiDeleteBin2Fill, RiRefreshLine } from "react-icons/ri";

import styles from './TodosActions.module.css';

const TodosActions = ({ handleResetTodos, handleDeleteComplitedTodos, isCompletedTodosExist }) => {
    return (
        <div className={styles.todosActionsContainer}>
            <Button
                title='Сбросить'
                onClick={handleResetTodos}
            >
                <RiRefreshLine />
            </Button>
            <Button
                title='Удалить'
                onClick={handleDeleteComplitedTodos}
                disabled={!isCompletedTodosExist}
            >
                <RiDeleteBin2Fill />
            </Button>
        </div>
    )
};

export default TodosActions;
