const config = require("../config/config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

const db = {
  tanant: sequelize["import"]("./tanant.js")
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
