var express = require('express');
var db = require("../models")

var router = express.Router();


// router.get("/api/burgers", (req, res) => {
//   db.Burger.findAll().then((result) => {
//     var hbsObj = {
//       burgers: result,
//       // customers: result
//     }
//     res.render("index", hbsObj);
//   })
// })

// router.post("/api/burgers", (req, res) => {
//   db.Burger.create({
//    "burger_name": req.body.burger_name,
//     devoured: req.body.devoured
//   }).then((result) => {
//     res.redirect("/api/burgers")
//   });
// })

// router.put("/api/burgers/:id", (req, res) => {
//   db.Burger.update({
//     "burger_name": req.body.burger_name,
//     devoured: req.body.devoured
//   },
//     {
//       where: {
//         id: req.params.id
//       }
//     }).then((result) => {
//       res.redirect("/api/burgers");
//     })
// })










































router.get('/api/burgers', (req, res) => {
  var hbsObj;
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
    res.redirect("/api/burgers");
  })
})



router.put("/api/burgers/:id", (req, res, next) => {
  // if (err) throw err;
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

// router.get("/api/burgers/:id", (req, res) => {
//   db.Burger.findOne({
//     include: [
//       {model:db.Customer, required: true}
//     ],
//     where: {
//       id: req.params.id
//     }
//   }).then((result) => {
//     res.json(result)
//   })
// })

// router.post("/api/burgers", (req, res) => {

//   function isCustomerUnique(customer_name) {
//     return db.Customer.count({where: {"customer_name": req.body.customer_name}})
//       .then(count => {
//         if (count != 0) {
//           router.put("/api/customers", (req, res) => {
//             db.Customer.update({
//               "burgers_eaten": 4
//             },
//             {
//               where: {"customer_name": req.body.customer_name}
//             }).then((result) => {
//                res.json(result);
              
//             })
//           })
//           return false;
//         }
//         return true;
//       });
//   }

//   isCustomerUnique(req.body.customer_name).then(isUnique => {
//     // if (err) throw err;
//     if (isUnique) {
//       db.Customer.create({
//         "customer_name": req.body.customer_name,
//         "burgers_eaten": 1
//       }).then((result) => {
//         res.json(result);
//       })
//     } else {
//       console.log("not unique")
//     }
//   })

// })

module.exports = router;