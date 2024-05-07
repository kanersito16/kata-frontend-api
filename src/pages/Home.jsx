import React from 'react';
import TOP_ARTISTAS from '../assets/top_artistas.json';
import TOP_PLAYLIST from '../assets/top_playlist.json';
import ListaArtista from '../components/ListaArtista';
import Carrucel from '../layouts/Carrusel';

const Home = () => {
  return (
    <div>
      <div>
        <Carrucel />
      </div>
      <div className="bg-black">
        <div className='container p-4'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 style={{ color: 'white', textAlign: 'center' }}>Top Artistas Escuchados</h1>
            </div>
          </div>
          <div className='row'>
            <ListaArtista>
              {TOP_ARTISTAS.top_artistas_mexicanos.map((artista, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card">
                    <img src={artista.url_imagen} className="card-img-top" alt={artista.nombre} />
                    <div className="card-body">
                      <h5 className="card-title">{artista.nombre}</h5>
                      <p className="card-text">{artista.genero}</p>
                      <p className="card-text">Reproducciones: {artista.numero_reproducciones}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ListaArtista>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h1 style={{ color: 'white', textAlign: 'center' }}>Top Playlist México</h1>
            </div>
          </div>
          <div className='row'>
            <ListaArtista>
              {TOP_PLAYLIST.top_playlist_mexico.map((playlist, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card">
                    <img src={playlist.url_imagen} className="card-img-top" alt={playlist.nombre} />
                    <div className="card-body">
                      <h5 className="card-title">{playlist.nombre}</h5>
                      <p className="card-text">Segidores: {playlist.seguidores}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ListaArtista>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
