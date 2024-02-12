const axios = require('axios');
require('dotenv').config();
const { END_POINT } = process.env;
const { Country } = require('../db');

const addCountriesBDD = async()=>{
    try {
        const { data } = await axios.get(`${END_POINT}`);
        const response = await data.map(async(country)=>{
            return await Country.create({
                id:country.cca3,
                name:country.name.common.toLowerCase(),
                flag:country.flags.png,
                continents:country.continents,
                capital:country.capital,
                subregion:country.subregion,
                area:country.area,
                population:country.population
            });
        });
        return response;
    } catch (error) {
        return res.send(error.message)
    }
};
module.exports = addCountriesBDD;