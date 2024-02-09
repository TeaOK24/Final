const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define("Russian_cuisine", {
    id: {
      type: Sequelize.STRING(100),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(100),
      primaryKey: false
    },
    ingredients: {
      type: Sequelize.STRING(1000),
      primaryKey: false
    },
    photo: {
      type: Sequelize.STRING(100),
      primaryKey: false
    },
    manual: {
      type: Sequelize.STRING(1000),
      primaryKey: false
    },
    estimation: {
      type: Sequelize.FLOAT.UNSIGNED,
      primaryKey: false
    },
  },
  {
    timestamps: false,
    tableName: 'russian_cuisine'
  });
}