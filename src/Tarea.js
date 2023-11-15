import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
  <li className="list-group-item d-flex align-items-center">
    <input type="checkbox" className="form-check-input" checked={completada} onChange={onToggleCompletada}/>
    {isEditing ? (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          style={{marginRight: 10}}
        />
        <div className="input-group-append">
          <button
            className="btn btn-success"
            onClick={handleSaveClick}
          >
            Guardar
          </button>
        </div>
      </div>
    ) : (
      <div className="d-flex align-items-center">
        <span className={`flex-grow-1 ${completada ? 'text-decoration-line-through' : ''}`} style={{marginRight: 10}}>
          {tarea}
          
        </span>
        <button
          className="btn btn-danger mr-2"
          onClick={onDelete}
          style={{marginRight: 10}}
        >
          Eliminar
        </button>
        <button
          className="btn btn-primary"
          onClick={handleEditClick}
        >
          Editar
        </button>
      </div>
    )}
  </li>
);

}

export default Tarea;
