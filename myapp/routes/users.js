var express = require('express');
var router = express.Router();

const Usuario = require('../models/Usuario');
const { json } = require('stream/consumers');

/* GET users listing. */

router.get('/', async (req, res,) => {
  const usuarios = await Usuario.find();
  res.json(usuarios)
});
router.get('/:id', async (req, res,) => {
  const usuarios = await Usuario.findById(req.params.id);
  res.json(usuarios)
});
router.post('/', async function(req, res, next) {
  const {nombre, apellido} = req.body
  const nuevoUsuario = await Usuario.create({nombre, apellido})
  res.status(201).json(nuevoUsuario)
});
router.put('/:id', async (req, res) => {
  const usuarioCambiado = await Usuario.findByIdAndUpdate(req.params.id, req.body , {new: true});
  res.json(usuarioCambiado);
});
router.delete('/:id', async (req, res) => {
  const usuarios = await Usuario.findByIdAndDelete(req.params.id);
  res.send({mensaje:'usuario eliminado'});
});

module.exports = router;
