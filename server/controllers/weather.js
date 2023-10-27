const client = require("../db/connect");


const getWeather = async (req, res) => {
  try {
    const weather = await client.query("SELECT * FROM weather");
    res.json(weather.rows);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { getWeather };