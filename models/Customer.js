module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define("Customer", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        customValidator: function(value) {
          if (value === "") {
            throw new Error("This cannot be blank!")
          }
        }
      }
    },
    burgers_eaten: {
      type: DataTypes.INTEGER
    }
  });

  Customer.associate = (models) => {
    Customer.hasMany(models.Burger, {
      onDelete: "cascade",
      onUpdate: "cascade"
    })
    // Customer.belongsTo(models.Burger, {
    //   constraints: false
    // });
  }

  return Customer;
}