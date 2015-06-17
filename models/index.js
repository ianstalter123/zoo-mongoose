var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/zoo-associations");

module.exports.Animal = require("./animal");
module.exports.Zoo = require("./zoo");