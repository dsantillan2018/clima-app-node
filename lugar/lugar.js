const axios = require('axios');

const getLugarLatLon = async(dir) => {
    // Formatear la url para identificar caracteres especiales
    const encodedUrl = encodeURI(dir);
    // Llamada a la api de latitud y longitud
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        // timeout: 1000,
        headers: { 'x-rapidapi-key': '5471490533msh99b63841b436a0ap11ed02jsn31b0d82b29fc' }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLon
}