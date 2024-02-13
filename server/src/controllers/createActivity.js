const { Activity, Country } = require('../db');

const createActivity = async(req, res)=>{
    try {

        const { name, dificulty, duration, season, countries } = req.body;

        if(name && dificulty && duration && season){
            const newActivity = await Activity.create({
                name:name.toLowerCase(),
                dificulty,
                duration,
                season
            })
           
            for (let i = 0; i < countries.length; i++) {
                let countryName = countries[i];
                let countryBD = await Country.findAll({where:{ name:countryName.toLowerCase()}});
                if(countryBD){
                    await newActivity.addCountry(countryBD)
                }
            }
            return res.send('Actividad creada con exito');
        }
        
        const activitiesAll = await Activity.findAll({include:{model:Country, attributes:['name']}});
        return res.json(activitiesAll)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = createActivity;