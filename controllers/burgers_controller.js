var express = require('express');
var db = require("../models")

var router = express.Router();

router.get('/api/burgers', (req, res) => {
  var hbsObj;
  db.Burger.findAll().then((results) => {  

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
    res.redirect("/api/burgers");
  })
})

router.put("/api/burgers/:id", (req, res, next) => {
  db.Burger.update({
    include: [
      {model: db.Customer, required: true}
    ],
    devoured: req.body.devoured
  }, 
  {
    where: {id: req.params.id}
  } 
  ).then((result) => {
    router.get("/api/burgers/:id", (req, res) => {
      db.Burger.findOne({
        include: [
          {model:db.Customer, required: true}
        ],
        where: {
          id: req.params.id
        }
      }).then((result) => {
        res.json(result)
      })
    })
    
  })
})

module.exports = router;