const { Country, Activity } = require('../db');
const { Op } = require("sequelize");

const allCountries = async(req, res)=>{
    try {
        const { name } = req.query;
        if(name){
            const nameCountry = await Country.findAll({ 
                where: { 
                    name: {
                        [Op.like]: `${name}%`
                    }
                }, include: { model: Activity}
            })
            return res.json(nameCountry)
        };

        const countriesBDD = await Country.findAll({ include:{model:Activity}}); 
        return res.json(countriesBDD);

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = allCountries;
