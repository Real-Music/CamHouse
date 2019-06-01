module.exports = (sequelize, Datatypes) => {
  const House = sequelize.define(
    "House",
    {
      floor_no: {
        type: Datatypes.STRING,
        allowNull: false,
        defaultValue: 1
      },
      rooms_no: {
        type: Datatypes.STRING,
        allowNull: false,
        defaultValue: 1
      },
      bathroom_no: {
        type: Datatypes.STRING,
        allowNull: false,
        defaultValue: 1
      },
      palors_no: {
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
      imageUrl: {
        type: Datatypes.STRING,
        allowNull: false
      },
      description: {
        type: Datatypes.TEXT,
        allowNull: false
      }
    },
    {
      // underscored: true,
      sequelize,
      freezeTableName: true
    }
  );
  // House.associate = models => {
  //   House.belongsTo(models.User);
  // };
  return House;
};
