import React from 'react';
import Tarjeta from './Tarjeta';

function Lista() {
  const listaStyle = {
    backgroundColor: '#feb870', // Fondo de color #feb870
    padding: '20px', // Espacio interior para separar las tarjetas del borde
  };

  return (
    <div style={listaStyle}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div className="col mx-2 mx-auto"> {/* Aplicar mx-auto para centrar horizontalmente */}
          <Tarjeta />
        </div>
        <div className="col mx-2 mx-auto"> {/* Aplicar mx-auto para centrar horizontalmente */}
          <Tarjeta />
        </div>
        <div className="col mx-2 mx-auto"> {/* Aplicar mx-auto para centrar horizontalmente */}
          <Tarjeta />
        </div>
      </div>
    </div>
  );
}

export default Lista;
