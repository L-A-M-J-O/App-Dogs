const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {

  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};