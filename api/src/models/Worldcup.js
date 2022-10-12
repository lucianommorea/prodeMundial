const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('worldcup', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first: {
      type: DataTypes.STRING,
    },
    second: {
      type: DataTypes.STRING,
    },
    third: {
      type: DataTypes.STRING,
    },
    octavos: {
      type: DataTypes.ARRAY(DataTypes.STRING),     
      defaultValue: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    },
    bestPlayer: {
      type: DataTypes.STRING,
    },
  });
};