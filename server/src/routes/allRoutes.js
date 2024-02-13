const { Router } = require("express");
const allCountries = require("../controllers/allCountries");
const addCountriesBDD = require("../controllers/addCountriesBDD");
const countrieById = require("../controllers/countrieById");
const createActivity = require("../controllers/createActivity");

const allRoutes = Router();

// Ruta para agregar paises a la base de datos
allRoutes.get('/add', addCountriesBDD);

// Rutas generales:
allRoutes.get('/', allCountries);
allRoutes.get('/:id', countrieById);
allRoutes.post('/activities', createActivity);

module.exports = allRoutes;