import React, { useState } from 'react';
import { validarTarea } from './mensaje'; // Asegúrate de proporcionar la ruta correcta al archivo mensaje.js

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validarTarea(texto);
    if (validationError) {
      setError(validationError);
      return;
    }

    // Obtener la fecha actual
    const fechaCreacion = new Date();

    // Crear un objeto de tarea que incluye el texto y la fecha de creación
    const nuevaTarea = {
      texto: texto,
      completada: false,
      fechaCreacion: fechaCreacion,
    };

    agregarTarea(nuevaTarea);
    setTexto("");
    setError(null); // Reiniciar el estado de error
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <div className="form-group mr-2">
        <input
          type="text"
          className={`form-control ${error ? 'is-invalid' : ''}`}
          placeholder="Añadir tarea..."
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value);
            setError(null); // Reiniciar el estado de error al cambiar el texto
          }}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
      <button type="submit" className="btn btn-primary" style={{ marginTop: 10 }}>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaForm;
