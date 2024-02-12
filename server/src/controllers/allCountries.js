const axios = require('axios');
require('dotenv').config();
const { END_POINT } = process.env;
const { Country } = require('../db');
const addCountriesBDD = require('./addCountriesBDD');

const allCountries = async(req, res)=>{
    
    try {
        const countriesBDD = await Country.findAll();       
        
        if(!countriesBDD){
            const response = await addCountriesBDD();
            if(response){
                const countriesBDD2 = await Country.findAll();
                return res.json(countriesBDD2);
            }
        }else{
            const { name } = req.query;
            if(name){
                const nameCountry = await Country.findAll({where:{name:name.toLowerCase()}})
                return res.json(nameCountry)
            };
            return res.json(countriesBDD);
        }
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = allCountries;
