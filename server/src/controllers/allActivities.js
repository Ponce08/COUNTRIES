const { Activity } = require('../db');

const allActivities = async(req, res)=>{
    try {
        const { name } = req.query;

        if(name){
            const nameActivity = await Activity.findOne({where:{name:name.toLowerCase()}})
            return res.json(nameActivity)
        };

        const getActivities = await Activity.findAll();
        return res.json(getActivities)

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = allActivities;