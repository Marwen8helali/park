  
const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('admin', 'root', 'admin', {
  host: 'mysql',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.user = require(__dirname + "/User.model.js")(sequelize, Sequelize);
db.role = require(__dirname + "/Role.model.js")(sequelize, Sequelize);
 
db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});
 
module.exports = db;





//const mysql = require('mysql');
//const { Sequelize } = require('sequelize');
//const dbConfig = require("../config/db.config.js");




/*const connection=mysql.createConnection({
    host:'mysql',
    user:'root',
    password:'admin',
    database:'admin'

});*/

/*const sequelize = new Sequelize('admin', 'root', 'admin', {
    host: 'mysql',
    dialect: 'mysql' 
});
*/

//module.exports = connection;
//module.exports = sequelize;

