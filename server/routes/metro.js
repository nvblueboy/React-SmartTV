var express = require('express');
var router = express.Router();
require('dotenv').config();
const axios = require("axios");

/* GET home page. */
router.get('/', function(req, res, next) {
  var apiKey = axios.get('https://api.goswift.ly/real-time/lametro-rail/predictions', {
    params: {
        "stop" : "80201",
        "route" : "802"
    },
    headers : {
        "Authorization" : process.env.LAMETRO_SWIFTLY_KEY,
        "Accept" : "application/json" 
    }
  }).then(function(response) {
    // console.log(response);
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
