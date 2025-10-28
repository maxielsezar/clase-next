const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  name: String,
  apellido: String,
  fechadenacimiento: Date,
  email: String,
  genero: String,
});

export default mongoose.model('usuario', usuarioSchema);