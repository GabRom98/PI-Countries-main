const {getAllActivities,createNewActivity} = require ("../controllers/activityControllers")

const getAllActivitiesHandler = async (req,res) => {
    try{
        const activitiesRes = await getAllActivities();
        res.status(200).json(activitiesRes)
    } catch (error){
        res.status(400).json( { error : error.message } )
    }
}

const createNewActivityHandler = async (req,res) => {
    const {name ,difficulty,duration,season,countries} = req.body;
    try{
      const newActivity = await createNewActivity(name,difficulty,duration,season.toUpperCase())
      await newActivity.addCountries(countries)
      res.status(201).json(newActivity)
    } catch (error){
        res.status(400).json( { error : error.message } )
    }
}


module.exports= {
    getAllActivitiesHandler,
    createNewActivityHandler }