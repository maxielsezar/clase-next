const mongoose = require('mongoose');

const TrabajoSchema = new mongoose.Schema({
  Titulo: String,
  Inicio: String,
  Nota: Number
});

const Trabajo = mongoose.model('Trabajo', TrabajoSchema);
module.exports=Trabajo