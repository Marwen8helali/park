const Vehicule = require(__dirname + "/../models/vehicule.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Vehicule
  const vehicule = new Vehicule({
    matricule: req.body.matricule,
  });

  // Save Vehicule in the database
  Vehicule.create(vehicule, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Vehicule."
      });
    else res.send(data);
  });
};

// Retrieve all Vehicule from the database.
exports.findAll = (req, res) => {
  Vehicule.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vehicules."
      });
    else res.send(data);
  });
};

// Find a single Vehicule with a VehiculeId
exports.findOne = (req, res) => {
  Vehicule.findById(req.params.vehiculeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found vehicules with id ${req.params.vehiculeId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving vehicules with id " + req.params.vehiculeId
        });
      }
    } else res.send(data);
  });
};

// Update a Vehicule identified by the VehiculeId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Vehicule.updateById(
    req.params.vehiculeId,
    new Vehicule(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found vehicules with id ${req.params.vehiculeId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating vehicules with id " + req.params.vehiculeId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Vehicule.remove(req.params.vehiculeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Vehicule with id ${req.params.vehiculeId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Vehicule with id " + req.params.vehiculeId
        });
      }
    } else res.send({ message: `Vehicule was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Vehicule.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Vehicules."
      });
    else res.send({ message: `All Vehicules were deleted successfully!` });
  });
};