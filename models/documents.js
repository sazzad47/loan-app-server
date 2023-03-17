const Sequelize = require("sequelize");
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  class Documents extends Sequelize.Model {}
  Documents.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
        allowNull: true,
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
      boompay: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      kikoff: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      self: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      creditstrong: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      experian: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      credit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      innovice: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      clarityservices: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      checksystems: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      sagestreamilc: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      smartcredit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { sequelize }
  );

  return Documents;
};
