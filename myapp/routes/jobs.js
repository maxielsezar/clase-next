var express = require('express');
var router = express.Router();

const Trabajos = require('../models/Trabajos');
const { json } = require('stream/consumers');

/* GET users listing. */
router.get('/', async (req, res,) => {
  const Trabajos = await Trabajos.find();
  res.json(Trabajos)
});
router.post('/', async function(req, res, next) {
  const {descripcion, estilo, habilidades, fechaDeNacimiento} = req.body
  const nuevoTrabajos = await Trabajos.create({descripcion, estilo, habilidades, fechaDeNacimiento })
  res.status(201).json(nuevoTrabajos)
});
router.put('/', function(req, res, next) {
  res.send('update job');
});
router.delete('/', function(req, res, next) {
  res.send('deleta job');
});

module.exports = router;
