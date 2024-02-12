const { Router } = require("express");
const allCountries = require("../controllers/allCountries");
const addCountriesBDD = require("../controllers/addCountriesBDD");
const getRout = Router();

getRout.get('/', allCountries);
getRout.get('/add_countries', addCountriesBDD);

// getRout.get('/:id', countrieById);
// getRout.get('/activities', allActivities)

module.exports = getRout;