const {DataTypes} = require ("sequelize")
module.exports = (sequelize) => {
  sequelize.define("activity", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      allowNull: false,
      validate: {
        isIn: {
          args: [["1", "2", "3", "4", "5"]],
          msg: "El valor difficulty debe estar entre los valores 1 y 5",
        },
      },
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: {
          args: /^[0-9]+:[0-5][0-9]$/,
          msg: "Por favor, ingrese una hora especifica en formato H:M, de cuanto durara el evento (ej.El evento dura 2:00, Dos horas en este caso)"
        }
      }
    },
    season: {
      type: DataTypes.ENUM('VERANO', 'OTOÑO', 'INVIERNO', 'PRIMAVERA'),
      allowNull: false,
      validate: {
        isIn: {
          args: [['VERANO', 'OTOÑO', 'INVIERNO', 'PRIMAVERA']],
          msg: 'Por favor, ingrese un valor correcto de temporada: Verano, Otoño, Invierno o Primavera',
        },
      },
    },
  }, { timestamps: false });}
