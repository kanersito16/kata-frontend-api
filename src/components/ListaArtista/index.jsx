import React from 'react';

const ListaArtista = ({ children }) => {
  return (
    <div className='container'>
      <div className="row">
          {children}
      </div>



    </div>
  );
};

export default ListaArtista;
