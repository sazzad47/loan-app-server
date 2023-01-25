const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Dispute extends Sequelize.Model {}
  Dispute.init(
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
      credit_report: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      letter_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      letter_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      equifax: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      trans_union: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      experian: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    { sequelize }
  );
  return Dispute;
};
