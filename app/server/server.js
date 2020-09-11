const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
//const jade = require('jade');
const bodyParser = require('body-parser');
var cors = require('cors')

const port = process.env.PORT || 9000;


app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to park application." });
});

//require(__dirname + "/../routes/vehicule.routes.js")(app);

//require(__dirname + "/../routes/Users.routes.js")(app);

require(__dirname + "/../routes/router.js")(app);
 
const db = require(__dirname + "/../models/db.js");
 
const Role = db.role;

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});



app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});

function initial(){
  Role.create({
    id: 1,
    name: "USER"
  });
  
  Role.create({
    id: 2,
    name: "ADMIN"
  });
  
  Role.create({
    id: 3,
    name: "PM"
  });
}