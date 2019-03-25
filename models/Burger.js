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



































// var orm = require("../config/orm");



// //Create code to call orm functions using burger specific input for the orm
// var burger = {
//   selectAll: (cb) => {
//     orm.selectAll("burgers", (res) => {
//       cb(res);
//     })
//   },
//   insertOne: (itemToAdd, cb) => {
//     orm.insertOne("burgers", `${itemToAdd}`, (data) => {
//       cb(data);
//     })
//   },
//   updateOne: (id, cb) => {
//     orm.updateOne("burgers", `${id}`, (data) => {
//       cb(data);
//     })
//   }
// }


// module.exports = burger