var express = require('express');
var router = express.Router();

const Usuario = require ("../modelo/usuario")

/* GET users listing. */
router.get('/', async(req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios)
});
router.post('/', async function(req, res, next) {
  const {nombre, apellido}= req.body
  const NuevoUsuario= await Usuario.create({nombre, apellido})
  res.status(201).json(NuevoUsuario)
});
router.put('/', function(req, res, next) {
  res.send('actualizar usuario');
});
router.delete('/', function(req, res, next) {
  res.send('eliminar usuario');
});

module.exports = router;
