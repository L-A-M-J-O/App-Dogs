const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define( "dog", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maxHeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minHeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maxWeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minWeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
  );
};