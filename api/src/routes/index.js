const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require("./countriesRouter")
const activitiesRouter = require("./activitiesRouter")

const mainRouter = Router();

// Configurar los routers
mainRouter.use("/countries",countriesRouter);
mainRouter.use("/activities",activitiesRouter)

// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
