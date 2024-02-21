const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Activity', {
    id: {
      primaryKey:true,
      type: DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    dificulty:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    duration:{
      type: DataTypes.DATE,
      allowNull: false
    },

    season:{
      type: DataTypes.STRING,
      allowNull: false
    }
    
  }, { timestamps: false });
};