const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5e77b56f8f76971cb595931c8aa1f99a&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}