import React, { useState } from "react";
import Formulario from "./FormText";
import Tarea from "./Todo";

const ListaTareas = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    todo["id"] = Math.floor(Math.random() * 1000);
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === todoId) {
          todo.text = newValue.text;
        }
        return todo;
      })
    );
  };

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  return (
    <div>
      <h1>Tareas para hoy</h1>
      <Formulario onSubmit={addTodo} success placeholder="Nueva tarea" />
      <hr />
      <Tarea
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default ListaTareas;
