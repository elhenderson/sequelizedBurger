module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define("Customer", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    burgers_eaten: {
      type: DataTypes.INTEGER,
      defaultValue: false
    }
  });
  return Customer;
}