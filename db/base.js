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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const africa_cuisine = db.define("africacuisine", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const america_cuisine = db.define("americacuisine", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const china_cuisine = db.define("chinacuisine", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const europa_cuisine = db.define("europacuisine", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const japan_cuisine = db.define("japancuisine", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const korea_cuisine = db.define("koreacuisine", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const mexico_cuisine = db.define("mexicocuisine", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const breadpastries = db.define("breadpastries", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const salads = db.define("salads", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const side_dishes = db.define("sidedishes", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const soups = db.define("soups", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const spicies = db.define("spicies", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const vegetarian = db.define("vegetarian", {
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
  photo_manual: {
    type: DataTypes.STRING,

  },
  manual: {
    type: DataTypes.STRING,

  },
  estimation: {
    type: DataTypes.FLOAT.UNSIGNED,

  },
})

const User = db.define("user", {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email:{
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  role:{
    type: DataTypes.STRING,
    defaultValue: "USER"
  }
})

export default {
  russian_cuisine,
  africa_cuisine,
  america_cuisine,
  china_cuisine,
  europa_cuisine,
  japan_cuisine,
  korea_cuisine,
  mexico_cuisine,
  breadpastries,
  salads,
  side_dishes,
  soups,
  spicies,
  vegetarian,
  User
}