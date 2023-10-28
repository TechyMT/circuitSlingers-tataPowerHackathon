const express = require('express');
const weatherData = require("../constants/data.json");

const weatherApiRouter = express.Router();

weatherApiRouter.get("/", (req, res) =>
{
    try
    {
        const randomIndex = Math.floor(Math.random() * weatherData.length);
        const randomWeather = weatherData[randomIndex];
        randomWeather.forEach(((value, index) =>
        {
            if (value[index] > 0)
            {
                value[index] -= 1;
            }
        }));
        res.status(200).json(randomWeather);
    }
    catch (error)
    {
        res.status(500).json({ message: "Error retrieving weather data" });

    }

});

module.exports = weatherApiRouter;