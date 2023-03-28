//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios= require("axios");
const {Country} = require("./src/db")

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(3001, 
    async () => {
      const count = await Country.count();
      
      if (count === 0) {
    const apiResraw = await axios.get("https://restcountries.com/v3/all");
    const apiCleanData = apiResraw.data.map((res)=>{
      return{
        id : res.cca3,
        name : res.name.common,
        imageFlag : res.flags[0],
        continent : res.continents[0],
        capital: res.capital ? res.capital[0] : 'Not found',
        subregion : res.subregion,
        area : res.area,
        population : res.population,
      }})
      await Country.bulkCreate(apiCleanData,{ignoreDuplicates:true});
      console.log("Se ha obtenido la informacion de Countries")
   }
    
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  }
  );
});

//\encoding UTF8 //USARLO EN BD, ya que shell esta en otra codificacion de caracteres
