import React from 'react';

function Filtros({ filtrarTareas }) {
    return (
        <div>
          <button className="btn btn-secondary mr-2" onClick={() => filtrarTareas("Todas")} style={{marginRight: 10, marginBottom: 20}}>
            Todas
          </button>
          
          <button className="btn btn-secondary mr-2" onClick={() => filtrarTareas("Pendientes")} style={{marginRight: 10, marginBottom: 20}}>
            Pendientes
          </button>
          <button className="btn btn-secondary" onClick={() => filtrarTareas("Completadas")} style={{marginRight: 10, marginBottom: 20}}>        
            Completadas
          </button>
        </div>
      );
}

export default Filtros;
