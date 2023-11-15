import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada, ordenarTareas }) {
  const ordenarPorFechaCreacion = (orden) => {
    const tareasOrdenadas = [...tareas];
    tareasOrdenadas.sort((a, b) => {
      return orden === 'asc' ? a.fechaCreacion - b.fechaCreacion : b.fechaCreacion - a.fechaCreacion;
    });
    ordenarTareas(tareasOrdenadas);
  };

  const ordenarAlfabeticamente = () => {
    const tareasOrdenadas = [...tareas];
    tareasOrdenadas.sort((a, b) => {
      const textA = a.texto.toLowerCase();
      const textB = b.texto.toLowerCase();
      return textA.localeCompare(textB);
    });
    ordenarTareas(tareasOrdenadas);
  };

  return (
    <div className="list-group">
      <div className="d-flex justify-content-between mb-3">
      <div>
          <label htmlFor="ordenSelect">Ordenar por Fecha: </label> 
          <select id="ordenSelect" className="custom-select" onChange={(e) => ordenarPorFechaCreacion(e.target.value)}>
            <option value="asc">Fecha (Ascendente)</option>
            <option value="desc">Fecha (Descendente)</option>
          </select>
        </div>
        <div>
        <button className="btn btn-danger mr-2" onClick={() => ordenarAlfabeticamente()}>
            Ordenar Alfabeticamente
          </button>
        </div>
        
      </div>
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea.texto}
          completada={tarea.completada}
          onDelete={() => eliminarTarea(index)}
          onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
          onToggleCompletada={() => toggleCompletada(index)}
        />
      ))}
    </div>
  );
}

export default ListaTareas;
