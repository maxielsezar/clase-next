const mongoose = require('mongoose');

const TrabajosSchema = new mongoose.Schema({
  descripcion: String,
  estilo: String,
  habilidades: String,
  fechaDeNacimiento: String,
})

const Trabajos = mongoose.model('Trabajos', TrabajosSchema);
module.exports = Trabajos