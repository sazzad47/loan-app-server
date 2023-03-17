const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Provider extends Sequelize.Model {}
  Provider.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      security_word: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      report_provider: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { sequelize }
  );

  return Provider;
};
