  import "./index.css";
  import React from 'react';

  const TarjetaAlbum = ({ album}) => {


    return (
      <>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card-container" style={{ padding: '10px' }}>
            <div className="card">
              <img src={album.images.length > 0 ? album.images[0].url : 'https://via.placeholder.com/160'} className="card-img-top" alt={album.name} />

              <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
                <p className="card-text">{album.release_date} - Álbum</p>
              </div>
            </div>
          </div>
        </div>
      </>


    );
  };

  export default TarjetaAlbum;
