const { Country, Activity } = require('../db');

const countrieById = async(req, res)=>{
    try {
        const { id } = req.params;

        const idCountry = await Country.findByPk(id.toUpperCase(), {include:{model:Activity}});
        return res.json(idCountry);

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = countrieById;