const express = require("express");
const router = express.Router();
const axios = require("axios");
const { fetchWeatherByCity, fetchCityList } = require("./api");

router.get("/", (req, res) => {
    res.send("Hello! This is the Weather App backend 😎");
});

//route to get list of cities
router.get("/cities/:query", async (req, res) => {
    try {
        const { query } = req.params;
        const cityList = await fetchCityList(query);
        res.json(cityList);
    } catch (error) {
        res.status(500).json({
            errorMsg: "Failed to fetch city list data",
            message: error,
        });
    }
});

//route to get weather data for a city
router.get("/weather/:city", async (req, res) => {
    try {
        const { city } = req.params;
        const forcastData = await fetchWeatherByCity(city);
        res.json(forcastData);
    } catch (error) {
        res.status(500).json({
            errorMsg: "Failed to fetch weather data",
            message: error,
        });
    }
});

router.get("/about", (req, res) => {
    res.send("This is the about page.");
});

router.get("/contact", (req, res) => {
    res.send("This is the contact page.");
});

router.use("*", (req, res) => {
    res.status(404).json({ error: "URL Not found" });
});

module.exports = (app) => {
    app.use(router);
};
