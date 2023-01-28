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
      equifax_report: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      experian_report: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transUnion_report: {
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
      reason: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      credit_furnisher: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      instruction: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      experian_letter: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
      },
      trans_union_letter: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
      },
      equifax_letter: {
        type: Sequelize.TEXT("long"),
        allowNull: true,
      },
      letter_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { sequelize }
  );
  // Dispute.belongsTo(User, {
  //   foreignKey: "user_id",
  //   as: "user",
  // });
  return Dispute;
};
