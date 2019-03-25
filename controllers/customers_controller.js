var express = require('express');
var db = require("../models")
// var Sequelize = require('sequelize')
var router = express.Router();

router.post("/api/customers", (req, res) => {

  function isCustomerUnique(customer_name) {
    return db.Customer.count({where: {"customer_name": req.body.customer_name}})
      .then(count => {
        if (count != 0) {
          // router.put("/api/customers", (req, res) => {
          //   db.Customer.update({
          //     "burgers_eaten": 4
          //   },
          //   {
          //     where: {"customer_name": req.body.customer_name}
          //   }).then((result) => {
          //      res.json(result);
               
          //   })

          // })
          return false;
        }
        return true;
      });
  }

  isCustomerUnique(req.body.customer_name).then(isUnique => {
    // if (err) throw err;
    let burgersEaten;
    if (isUnique) {
      db.Customer.create({
        "customer_name": req.body.customer_name,
        "burgers_eaten": 1
      }).then((result) => {
        res.redirect("/api/burgers");
      })
    } else {
      db.Customer.findOne({
        where: {"customer_name": req.body.customer_name}
      }).then((result) => {
        burgersEaten = result.dataValues.burgers_eaten;
        burgersEaten += 1;
        db.Customer.update({
          "burgers_eaten": burgersEaten
        },
        {
          where: {"customer_name": req.body.customer_name}
        }).then(() => {
          console.log(burgersEaten)
          res.redirect("/api/burgers")
        })
      })
    }
  })


  // db.Customer.create({
  //   "customer_name": req.body.customer_name,
  //   "burgers_eaten": 1
  // }).then((result) => {
  //   console.log("hello")
  //   res.redirect("/api/burgers");
  // })
})

module.exports = router;