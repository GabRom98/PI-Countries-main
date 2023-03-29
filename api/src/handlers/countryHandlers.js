const {searchCountryByName,getallCountries,getCountryById} = require("../controllers/countryControllers")

// const getallCountriesHandler = async (req,res) => {
//   const {name} = req.query;
//   try{
//     const countriesRes = name ? await searchCountryByName(name) : await getallCountries()
//     res.status(200).json(countriesRes)
//   } catch(error){
//     res.status(400).json( {error: error.message} )
//   }
// }

const getallCountriesHandler = (req, res) => {
  const { name } = req.query;
  let promise;
  if (name) {
    promise = searchCountryByName(name);
  } else {
    promise = getallCountries();
  }

  promise
    .then((countriesRes) => {
      res.status(200).json(countriesRes);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

const getCountryPerIdHandler = async (req,res) => {
  const {id} = req.params
  try{
    const countryRes= await getCountryById (id.toUpperCase());
    res.status(200).json(countryRes)
  } catch(error){
    res.status(400).json( { error: error.message } )
  }
}

module.exports={
    getallCountriesHandler,
    getCountryPerIdHandler }