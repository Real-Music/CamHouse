module.exports = (sequelize, Datatypes) => {
  const singleRoom = sequelize.define(
    "singleRoom",
    {
      title: {
        type: Datatypes.STRING,
        allowNull: true,
        defaultValue: "Single Room"
      },
      slug: { type: Datatypes.STRING, allowNull: false },
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
      price: {
        type: Datatypes.STRING,
        allowNull: false
      },
      duration: {
        type: Datatypes.STRING,
        allowNull: false
      },
      description: {
        type: Datatypes.TEXT,
        allowNull: false
      },
      imageUrl1: {
        type: Datatypes.STRING,
        allowNull: false
      },
      imageUrl2: {
        type: Datatypes.STRING,
        allowNull: false
      },
      imageUrl3: {
        type: Datatypes.STRING,
        allowNull: false
      }
    },
    {
      // underscored: true,
      sequelize,
      freezeTableName: true
    }
  );
  // singleRoom.associate = models => {
  //   singleRoom.belongsTo(models.User);
  // };
  return singleRoom;
};
