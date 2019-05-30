const config = require("../config/config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

const db = {
  Users: sequelize["import"]("./Users.js"),
  House: sequelize["import"]("./House.js"),
  Apartment: sequelize["import"]("./Apartment.js"),
  Studio: sequelize["import"]("./Studio.js"),
  singleRooms: sequelize["import"]("./singleRooms.js")
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
