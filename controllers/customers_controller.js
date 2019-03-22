var express = require('express');
var db = require("../models")

var router = express.Router();

router.post("/api/customers", (req, res) => {
  db.Customer.create(req.body).then((result) => {
    console.log("hello")
    res.json(result);
  })
})

module.exports = router;