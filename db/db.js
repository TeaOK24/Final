const Sequelize = require('sequelize');

const sequelize = new Sequelize("food", "root", "", {
  dialect: "mysql",
  host: "127.0.0.1",
  logging: false
});

const Russian_cuisine = require('./base')(sequelize);

module.exports ={
    sequelize: sequelize,
    russian_cuisine : Russian_cuisine
}