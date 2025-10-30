var express = require('express');
var router = express.Router();

/* GET users listing. */
const Schema = new mongoose.Schema({
  nombre: String,
  apellido: String,
});

module.exports = router;