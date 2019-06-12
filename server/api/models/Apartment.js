module.exports = (sequelize, Datatypes) => {
  const Apartment = sequelize.define(
    "Apartment",
    {
      slug: { type: Datatypes.STRING, allowNull: false },
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
      price: {
        type: Datatypes.STRING,
        allowNull: false
      },
      duration: {
        type: Datatypes.STRING,
        allowNull: false
      },
      location: {
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
  // Apartment.associate = models => {
  //   Apartment.belongsTo(models.User);
  // };
  return Apartment;
};
