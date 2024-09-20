var express = require('express');
var router = express.Router();
require('dotenv').config();
const axios = require("axios");

/* GET home page. */
router.get('/', function(req, res, next) {
  var apiKey = axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${process.env.WEATHER_LATITUDE}&longitude=${process.env.WEATHER_LONGITUDE}&current=temperature_2m,relative_humidity_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=${process.env.TIMEZONE}`
  ).then(function(response) {
    console.log(response);
    res.send(response.data);
  }).catch(function (error) {
    console.log(error)
    res.send({
        "success" : false,
        "error" : error
    });
  });
});

module.exports = router;
