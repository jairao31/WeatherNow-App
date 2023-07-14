const axios = require("axios");

const fetchCityList = async (city) => {
    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const cityListApiUrl = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}`;

        const { data: cityList } = await axios.get(cityListApiUrl);

        return cityList;
    } catch (error) {
        throw new Error("Failed to fetch city list data");
    }
};

const fetchWeatherByCity = async (city) => {
    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const forcastApiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=10&aqi=yes&alerts=yes`;

        const { data: forcastData } = await axios.get(forcastApiUrl);

        return forcastData;
    } catch (error) {
        throw new Error("Failed to fetch weather data");
    }
};

module.exports = {
    fetchCityList,
    fetchWeatherByCity,
};
