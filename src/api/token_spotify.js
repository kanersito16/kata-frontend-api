import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';
let ACCESS_TOKEN = null;
let TOKEN_EXPIRATION_TIME = null;

const refreshToken = async () => {
    try {
        // Make a POST request to Spotify's token endpoint
        const response = await axios.post('https://accounts.spotify.com/api/token', {
            grant_type: 'client_credentials',
            client_id: 'd9d84212d9394d9488ccb5415a8d0514',
            client_secret: 'ab253c51c7264c819ad7485c368e77f3'
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        // Update the ACCESS_TOKEN and TOKEN_EXPIRATION_TIME variables with the new token and expiration time
        ACCESS_TOKEN = response.data.access_token;
        TOKEN_EXPIRATION_TIME = Date.now() + (response.data.expires_in * 1000); // Convert expiration time to milliseconds

        console.log('Token refreshed successfully.');
    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
};

const buscar_artista = async (nombre) => {
    // Check if the token is expired or not yet obtained
    if (!ACCESS_TOKEN || Date.now() >= TOKEN_EXPIRATION_TIME) {
        await refreshToken(); // Refresh the token
    }

    // Parámetros de la búsqueda
    console.log("Buscar artista: ", nombre);
    const params = {
        q: nombre,
        type: 'artist'
    };

    const config = {
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        },
        params: params
    };

    try {
        // Envía la solicitud GET utilizando Axios con async / await
        const response = await axios.get(`${BASE_URL}/search`, config);
        return response;
    } catch (error) {
        // Handle errors here
        throw error;
    }
};

const buscar_albums = async (id) => {
    // Check if the token is expired or not yet obtained
    if (!ACCESS_TOKEN || Date.now() >= TOKEN_EXPIRATION_TIME) {
        await refreshToken(); // Refresh the token
    }

    // Parámetros de la búsqueda
    console.log("Buscar Albums: ", id);
    // const params = {
    //     q: nombre,
    //     type: 'artist'
    // };

    const config = {
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
        // params: params
    };

    try {
        // Envía la solicitud GET utilizando Axios con async / await
        const response = await axios.get(`${BASE_URL}/artists/${id}/albums?market=MX`, config);
        return response;
    } catch (error) {
        // Handle errors here
        throw error;
    }
};

export { buscar_artista, buscar_albums };
