import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import TodosActions from './components/Todos/TodosActions';

import { wordCorrectHandler } from './helpers';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const resetTodosHandler = () => setTodos([]);

  const completedTodosCount = todos.filter(({ isCompleted }) => !isCompleted).length;

  const deleteComplitedTodos = () => setTodos(todos.filter(({ isCompleted }) => !isCompleted));

  const deleteTodoHandler = deletedTodoId => setTodos(todos.filter(({ id }) => id !== deletedTodoId));

  const addTodoHandler = text => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodoHandler = id => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : { ...todo }
    )
    )
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm handleAddTodo={addTodoHandler} />
      {!!todos.length &&
        <TodosActions
          isCompletedTodosExist={!!completedTodosCount}
          handleResetTodos={resetTodosHandler}
          handleDeleteComplitedTodos={deleteComplitedTodos}
        />
      }
      <TodoList
        todos={todos}
        handleDeleteTodo={deleteTodoHandler}
        handleToggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && wordCorrectHandler(completedTodosCount)}
    </div>
  );
}

export default App;
