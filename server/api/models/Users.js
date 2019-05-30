module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define("User", {
    fname: { type: Datatypes.STRING, allowNull: false },
    lname: { type: Datatypes.STRING, allowNull: false },
    email: { type: Datatypes.STRING, unique: true, allowNull: false },
    password: { type: Datatypes.STRING, allowNull: false },
    phone: { type: Datatypes.STRING, allowNull: false },
    isHouseProvider: { type: Datatypes.BOOLEAN, defaultValue: false }
  });

  return User;
};
