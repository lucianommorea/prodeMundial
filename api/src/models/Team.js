const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('team', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    group: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    game1: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    game2: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    game3: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    totalGames: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    goalsF: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    goalsC: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    difGoals:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
      // get(){
      //   return `${this.goalsF} - ${this.goalsC}`
      // }
    },
    wins: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    draws: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    loses: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  });
};



