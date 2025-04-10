import { DataTypes } from "sequelize";

const payment = (sequelize) => {
  const Payment = sequelize.define(
    "payment",
    {
      order_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      signature: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "INR",
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  return Payment;
};

export default payment;
