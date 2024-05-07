import React from 'react'
import { useEffect, useState } from "react";
import { buscar_artista, buscar_albums } from '../api/token_spotify'
import ListaArtista from '../components/ListaArtista';
import TarjetaArtista from '../components/TarjetaArtista';
import SearchBar from "../components/SearchBar";
import ModalAlbums from '../components/ModalAlbums/Index';

const Artistas = () => {

  const [artistas, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("Maluma");
  const [selectedCard, setSelectedCard] = useState([]);
  const [albums, setAlbums] = useState([]);


  const openModal = (card) => {
    console.log("abrir modal");
    setSelectedCard(card);
    console.log(card.id);
    obtenerAlbums(card.id);

  };

  const obtenerAlbums = async (id) => {
    try {
      // Hace la petición a la API y obtiene los datos con los estados de busqueda y página
      const { data } = await buscar_albums(id);
      const { items } = data;
      setAlbums(items);
      console.log(items);
    } catch (error) {
      // Si falla la petición, muestra un alert con el mensaje de error
      alert("Algo fallo en la petición");
    }
  };



  const getInitialData = async () => {
    try {
      // Hace la petición a la API y obtiene los datos con los estados de busqueda y página
      const { data } = await buscar_artista(busqueda);
      // // Extrae los resultados de la data, contiene la información de los artistas
      const { artists } = data;
      const { items } = artists;
      // // Actualiza el estado de artistas con los resultados obtenidos
      setPersonajes(items);
      console.log(items);
    } catch (error) {
      // Si falla la petición, muestra un alert con el mensaje de error
      alert("Algo fallo en la petición");
    }
  };


  useEffect(() => {
    // Al cargar el componente, se ejecuta la función getInitialData, que hace la petición a la API
    getInitialData();
    // Cuando cambie el valor de 'page', se ejecuta la función getInitialData
  }, []);


  return (
    <div>
      <div className="bg-black">
        <div className='container p-4'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 style={{ color: 'white', textAlign: 'center' }}>Artistas</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <SearchBar
                text={busqueda}
                setText={setBusqueda}
                search={() => {
                  getInitialData();
                }}
              />
            </div>
          </div>
          <ListaArtista>

            {artistas.map((artista, index) => (
              <TarjetaArtista key={index} artista={artista} abrirModal={openModal} />
            ))}
          </ListaArtista>
          <ModalAlbums card={selectedCard} albums={albums} />

        </div>
      </div>
    </div>
  );

}

export default Artistas

