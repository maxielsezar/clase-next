const mongoose = require('mongoose');


const trabajoSchema = new mongoose.Schema({
  empleo: String, 
  lugar: String,
});

const Trabajo= mongoose.model('Trabajo', trabajoSchema);
module.exports = Trabajo;