module.exports = (sequelize, Datatypes) => {
  const Studio = sequelize.define(
    "Studio",
    {
      slug: { type: Datatypes.STRING, allowNull: false },
      bathroom_no: {
        type: Datatypes.STRING,
        allowNull: false,
        defaultValue: 1
      },
      kitchen_no: {
        type: Datatypes.STRING,
        allowNull: false,
        defaultValue: 1
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
  // Studio.associate = models => {
  //   Studio.belongsTo(models.User);
  // };
  return Studio;
};
