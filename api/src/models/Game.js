const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('game', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stadium: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    local: {
      type: DataTypes.STRING,
    //   allowNull: false
    },
    away: {
      type: DataTypes.STRING,
    //   allowNull: false
    },
    localResult: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    awayResult: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    position: {
        type: DataTypes.ENUM('game1', 'game2', 'game3', 'Octavos de Final', 'Cuartos de Final', 'Semifinales', 'Final y Tercer Puesto')
    },
    group: {
      type: DataTypes.STRING,
    }
  });
};

