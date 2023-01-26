const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Documents extends Sequelize.Model {}
  Documents.init(
    {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      photo_ID: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      proof_of_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_agreement_freeze: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      consumer_office_freeze: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      lexis_nexis_freeze: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      teletrack_freeze: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      positive_account: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { sequelize }
  );
  return Documents;
};
