const mongoose = require('mongoose');


const usuarioSchema = new mongoose.Schema({
  name: String, 
  apellido: String,
    fechaDeNacimiento: Date,
    email: String,
    genero: String

});

export default mongoose.model('Usuario', usuarioSchema);