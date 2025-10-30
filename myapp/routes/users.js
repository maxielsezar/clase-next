var express = require('express');
var router = express.Router();

const Usuario = require('../models/Usuario');
const { json } = require('stream/consumers');

/* GET users listing. */
router.get('/', async (req, res,) => {
  const usuarios = await Usuario.find();
  res.json(usuarios)
});
router.post('/', async function(req, res, next) {
  const {nombre, apellido} = req.body
  const nuevoUsuario = await Usuario.create({nombre, apellido})
  res.status(201).json(nuevoUsuario)
});
router.put('/', function(req, res, next) {
  res.send('update job');
});
router.delete('/', function(req, res, next) {
  res.send('deleta job');
});

module.exports = router;
