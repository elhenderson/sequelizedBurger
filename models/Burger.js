module.exports = (sequelize, DataTypes) => {
  var Burger = sequelize.define("Burger", {
    burger_name: {
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
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Burger.associate = (models) => {
    Burger.belongsTo(models.Customer, {

    });
  }
  
  return Burger;
}