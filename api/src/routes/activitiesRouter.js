const {Router} = require("express")
const {
    getAllActivitiesHandler,
    createNewActivityHandler } = require("../handlers/activityHandlers")

const activitiesRouter = Router()

activitiesRouter.get("/",getAllActivitiesHandler)
activitiesRouter.post("/",createNewActivityHandler)


module.exports = activitiesRouter