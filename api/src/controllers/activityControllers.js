const {Activity}= require("../db")

const getAllActivities = async () => {
    const tableActivities = await Activity.findAll()
    return tableActivities
}

const createNewActivity = async (name,difficulty,duration,season) => await Activity.create({name,difficulty,duration,season})


module.exports={
    getAllActivities,
    createNewActivity
}