import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Formulario from "./FormText";

const Tarea = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  return (
    <ul className="list-group">
      {todos.map((todo, index) =>
        edit.id && todo.id === edit.id ? (
          <Formulario
            onSubmit={submitUpdate}
            key={index}
            initial={todo.text}
            placeholder="Editar tarea"
          />
        ) : (
          <li
            className={`list-group-item list-group-item-action ${
              todo?.isComplete
                ? "list-group-item-success"
                : "list-group-item-light"
            }`}
            key={index}
          >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>
            <div className="icons">
              <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
              <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
              />
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default Tarea;
