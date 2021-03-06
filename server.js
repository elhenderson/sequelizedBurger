var express = require("express");
var exphbs = require('express-handlebars');


var app = express();
var burgerRoutes = require('./controllers/burgers_controller');
var customerRoutes = require('./controllers/customers_controller')
var PORT = process.env.PORT || 3000
var db = require("./models")

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static('public/assets'));
app.use(burgerRoutes);
app.use(customerRoutes);



app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

db.sequelize.sync({force: true}).then(() => {
  app.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    // console.log(`Connected on port ${PORT}`)
  })
})