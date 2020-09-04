const sql = require("./db.js");

// constructor
const Vehicule = function(vehicule) {
  this.id = vehicule.id;
  this.matricule = vehicule.matricule;
};

Vehicule.create = (newVehicule, result) => {
  sql.query("INSERT INTO vehicules SET ?", newVehicule, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created vehicule: ", { id: res.insertId, ...newVehicule });
    result(null, { id: res.insertId, ...newVehicule });
  });
};

Vehicule.findById = (vehiculeId, result) => {
  sql.query(`SELECT * FROM vehicules WHERE id = ${vehiculeId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found vehicule: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Vehicule.getAll = result => {
  sql.query("SELECT * FROM vehicules", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("vehicules: ", res);
    result(null, res);
  });
};

Vehicule.updateById = (id, vehicule, result) => {
  sql.query(
    "UPDATE vehicules SET matricule = ? WHERE id = ?",
    [vehicule.matricule, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated vehicule: ", { id: id, ...vehicule });
      result(null, { id: id, ...vehicule });
    }
  );
};

Vehicule.remove = (id, result) => {
  sql.query("DELETE FROM vehicules WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted vehicule with id: ", id);
    result(null, res);
  });
};

Vehicule.removeAll = result => {
  sql.query("DELETE FROM vehicules", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} vehicules`);
    result(null, res);
  });
};

module.exports = Vehicule;