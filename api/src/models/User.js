const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    sub: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.TEXT,
      defaultValue: "imgvacia",
    },
    statusAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    statusBanned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    statusDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    totalPoints: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    points: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null],
    },
    userResults: {
      type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.INTEGER)),
      // defaultValue: [],
      defaultValue: [[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
      [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
      [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
      [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
      [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
      [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null]]
    },
    myPosition: {
      type: DataTypes.INTEGER,
    },
    octavos:{
      type: DataTypes.ARRAY(DataTypes.STRING),     
      defaultValue: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
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
    bestPlayer: {
      type: DataTypes.STRING,
    },
  });
};


