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

      // reports
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

      // account nos
      account_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      equifax_account: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      experian_account: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      transUnion_account: {
        type: Sequelize.STRING,
        allowNull: true,
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

      // dispute 2

      account_number_d2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      equifax_account_d2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      experian_account_d2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      transUnion_account_d2: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      equifax_d2: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      trans_union_d2: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      experian_d2: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },

      reason_d2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      credit_furnisher_d2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      instruction_d2: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      // dispute 3

      account_number_d3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      equifax_account_d3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      experian_account_d3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      transUnion_account_d3: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      equifax_d3: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      trans_union_d3: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      experian_d3: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },

      reason_d3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      credit_furnisher_d3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      instruction_d3: {
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
