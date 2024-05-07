import React from 'react';
import ListaArtista from '../../components/ListaArtista';
import TarjetaAlbum from '../TarjetaAlbum';

const ModalAlbums = ({ card, closeModal, albums }) => {

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content bg-black">
                    <div className="modal-header">
                        <h5  style={{ color: 'white', textAlign: 'center' }} className="modal-title" id="exampleModalLabel">{card.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        {/* <p>{card.name}</p> */
                        <ListaArtista>
         
                        {albums.map((album, index) => (
                          <TarjetaAlbum album={album} key={index}/>
                        ))}
                      </ListaArtista>}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Cerrar</button>
                        {/* Agrega aquí cualquier otro botón o funcionalidad que desees */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ModalAlbums;
