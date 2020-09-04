const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
//const jade = require('jade');
const bodyParser = require('body-parser');

const port = process.env.PORT || 9000;

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to park application." });
});

require(__dirname + "/../routes/vehicule.routes.js")(app);

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});