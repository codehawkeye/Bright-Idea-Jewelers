const db = require("../models");

// Defining methods for the productController
module.exports = {
    findAll: function(req, res) {
        db.Book
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
  findById: function (req, res) {
    db.Product.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

};
