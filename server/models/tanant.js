module.exports = (sequelize, Datatypes) => {
  sequelize.define("Tanant", {
    email: { type: Datatypes.STRING },
    name: Datatypes.STRING
  });
};
