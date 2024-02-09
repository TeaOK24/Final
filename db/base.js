import {DataTypes} from 'sequelize';
import db from '../db.js';


const russian_cuisine = db.define("russiancuisine", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  ingredients: {
    type: DataTypes.STRING,
  },
  photo: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

export default {
  russian_cuisine,

}