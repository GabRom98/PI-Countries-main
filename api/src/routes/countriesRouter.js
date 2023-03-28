const {Router} = require("express")
const {
    getallCountriesHandler,
    getCountryPerIdHandler } = require("../handlers/countryHandlers")

const countriesRouter = Router()

const validateId = (req, res, next) => {
    const { id } = req.params;
  
    if (id.length !== 3) {
      return res.status(400).json({ error: "El ID debe tener 3 letras." });
    }

    next();
  };

countriesRouter.get("/", getallCountriesHandler)
countriesRouter.get("/:id",validateId,getCountryPerIdHandler)


module.exports = countriesRouter