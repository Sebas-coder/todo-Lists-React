import React, { useState, useEffect, useRef } from "react";

const Formulario = ({
  onSubmit: submit,
  initial = "",
  success,
  placeholder,
}) => {
  const [input, setInput] = useState(initial);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit({
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="form-group mb-1">
        <label className="form-label mt-3">{placeholder}</label>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
          ref={inputRef}
        />
      </div>
      {success ? (
        <button className="btn btn-success mt-2">Agregar tarea</button>
      ) : (
        <button className="btn btn-warning mt-2 mb-3">Editar tarea</button>
      )}
    </form>
  );
};

export default Formulario;
