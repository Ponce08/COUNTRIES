const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Country', {
    id: {
      primaryKey:true,
      type: DataTypes.STRING,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    flag:{
      type: DataTypes.STRING,
      allowNull: false
    },

    continents:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },

    capital:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },

    subregion:{
      type: DataTypes.STRING,
      allowNull: true
    },

    area:{
      type: DataTypes.FLOAT,
      allowNull: false
    },

    population:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
    
  }, { timestamps: false });
};