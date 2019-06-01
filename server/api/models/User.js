const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"));

// Hash Password
function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  if (!user.changed("password")) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue("password", hash);
    });
}

module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define(
    "User",
    {
      firstname: {
        type: Datatypes.STRING,
        allowNull: false
      },
      lastname: {
        type: Datatypes.STRING,
        allowNull: false
      },
      phone: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Datatypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Datatypes.STRING,
        allowNull: false
      },
      imageUrl: {
        type: Datatypes.STRING,
        allowNull: false,
        defaultValue: "path goes here"
      },
      isHouseProvider: {
        type: Datatypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword
      },
      underscored: true,
      sequelize,
      freezeTableName: true
    }
  );
  //  Comparing Password
  User.prototype.comparePassword = function(password) {
    return bcrypt.compareAsync(password, this.password);
  };

  User.associate = models => {
    User.hasMany(models.House, {
      foreignKey: "userId"
    });

    User.hasMany(models.Apartment, {
      foreignKey: "userId"
    });

    User.hasMany(models.singleRoom, {
      foreignKey: "userId"
    });

    User.hasMany(models.Studio, {
      foreignKey: "userId"
    });
  };
  return User;
};
