const express = require('express');
const fs = require('fs');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var imgPath = 

const surrenderAnimalSchema = new Schema({
  name: { type: String, required: true },
  image: {}
  about: String,
  date: { type: Date, default: Date.now }
});

const surrenderAnimal = mongoose.model("Animals", surrenderAnimalSchema);

module.exports = surrenderAnimal;
