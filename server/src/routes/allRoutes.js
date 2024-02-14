const { Router } = require("express");
const allCountries = require("../controllers/allCountries");
const addCountriesBDD = require("../controllers/addCountriesBDD");
const countrieById = require("../controllers/countrieById");
const createActivity = require("../controllers/createActivity");
const allActivities = require("../controllers/allActivities");

const allRoutes = Router();

// Ruta para agregar paises a la base de datos
allRoutes.post('/add', addCountriesBDD);

// Rutas generales:
allRoutes.get('/', allCountries);
allRoutes.get('/:id', countrieById);
allRoutes.post('/post_activity', createActivity);
allRoutes.get('/all_actvities', allActivities);



module.exports = allRoutes;