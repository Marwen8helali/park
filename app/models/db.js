const mysql = require('mysql');
const { Sequelize } = require('sequelize');
//const dbConfig = require("../config/db.config.js");




/*const connection=mysql.createConnection({
    host:'mysql',
    user:'root',
    password:'admin',
    database:'admin'

});
*/
const sequelize = new Sequelize('admin', 'root', 'admin', {
    host: 'mysql',
    dialect: 'mysql' 
});


//module.exports = connection;
module.exports = sequelize;