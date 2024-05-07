import "./index.css";
import React from 'react';

const TarjetaArtista = ({ artista , abrirModal, setModalOpen}) => {

  const handleClick = () => {
    abrirModal(artista);
  };

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div className="card-container" style={{ padding: '10px' }}>
          <div className="card">
            <img src={artista.images.length > 0 ? artista.images[0].url : 'https://via.placeholder.com/160'} className="card-img-top" alt={artista.name} />
            <div className="card-body">
              <h5 className="card-title">{artista.name}</h5>
              <p className="card-text">Artista</p>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={handleClick}
              >
                Ver Albúms
              </button>
            </div>
          </div>
        </div>
      </div>
    </>


  );
};

export default TarjetaArtista;
