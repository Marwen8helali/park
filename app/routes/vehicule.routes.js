module.exports = app => {
    const vehicules = require(__dirname + "/../controllers/vehicule.controller.js");
  
    // Create a new Customer
    app.post("/vehicules", vehicules.create);
  
    // Retrieve all Customers
    app.get("/vehicules", vehicules.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/vehicules/:vehiculeId", vehicules.findOne);
  
    // Update a Customer with customerId
    app.put("/vehicules/:vehiculeId", vehicules.update);
  
    // Delete a Customer with customerId
    app.delete("/vehicules/:vehiculeId", vehicules.delete);
  
    // Create a new Customer
    app.delete("/vehicules", vehicules.deleteAll);
  };