module.exports = (sequelize, Datatypes) => {
  const singleRoom = sequelize.define("singleRoom", {
    bathroom_no: {
      type: Datatypes.STRING,
      allowNull: false,
      defaultValue: 0
    },
    kitchen_no: {
      type: Datatypes.STRING,
      allowNull: true
    },
    dimension: {
      type: Datatypes.STRING,
      allowNull: true
    },
    location: {
      type: Datatypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: Datatypes.STRING,
      allowNull: false
    },
    description: {
      type: Datatypes.TEXT,
      allowNull: false
    }
  });

  return singleRoom;
};
