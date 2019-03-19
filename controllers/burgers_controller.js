var express = require('express');
var db = require("../models")

var router = express.Router();

router.get('/', (req, res) => {
  console.log(req.body);
  db.Burger.findAll().then((results) => {  
    console.log(results);
    var hbsObj = {
      burgers: results
    };  
    res.render("index", hbsObj);
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

router.put("/api/burgers/:id", (req, res) => {
  db.Burger.update({
    devoured: req.body.devoured
  }, 
  {
    where: {id: req.params.id}
  } 
  ).then((result) => {
    res.json(result);
  })
})

module.exports = router;