const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surrenderAnimalSchema = new Schema({
  name: { type: String, required: true },
  image: { data: Buffer, contentType: String, required: true },
  about: String,
  date: { type: Date, default: Date.now }
});

const surrenderAnimal = mongoose.model("Animals", surrenderAnimalSchema);

module.exports = surrenderAnimal;
