var express = require('express');
var db = require("../models")

var router = express.Router();

router.get('/', (req, res) => {
  var hbsObj;
  var custObj;
  db.Burger.findAll().then((results) => {  
    // hbsObj = {
    //   burgers: results
    // };  

    db.Customer.findAll().then((data) => {
      
      hbsObj = {
        burgers: results,
        customers: data
      };
    res.render("index", hbsObj);
    })
  })
})

router.post("/api/burgers", (req, res) => {
  console.log(req.body)
  db.Burger.create({
    "burger_name": req.body.burger_name,
    devoured: req.body.devoured
  }).then((result) => {
    res.redirect("/");
  })
})

router.put("/api/burgers/:id", (req, res, next) => {
  db.Burger.update({
    devoured: req.body.devoured
  }, 
  {
    where: {id: req.params.id}
  } 
  ).then((result) => {
      res.redirect("/");
  }).catch(next)
})

router.post("/api/customers", (req, res) => {
  db.Customer.create({
    "customer_name": req.body.customer_name,
    "burgers_eaten": 1
  })
})

module.exports = router;