const {Country,Activity}= require("../db")
const {Op}= require("sequelize")


// const getallCountries = async () => {
//   const tableCountries = await Country.findAll({
//     include: {
//       model: Activity,
//       attributes: ["name"],
//       through: {
//         attributes: []
//       }
//     }
//   });
//   return tableCountries
// }

const getallCountries = () => {
  return Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: []
      }
    }
  });
};



const searchCountryByName = async (name) => {
   const tableCountries = await Country.findAll( { where: { name : {[Op.iLike]: `%${name}%` }} } ) 
   return tableCountries
}


const getCountryById = async (id) => {
  const tableCountries = await Country.findByPk(id,{
    include : {
      model : Activity,
      attributes : ["name","difficulty","duration","season"],
      through:{
        attributes:[]
      }
    }
  })
  return tableCountries
}

module.exports={
    searchCountryByName,
    getallCountries,
    getCountryById
}