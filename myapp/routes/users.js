var express = require('express');
var router = express.Router();

const Usuario = require('../modelos/usuario');

/* GET users listing. */
router.get('/',async (req, res, ) => {
  const usuarios = await Usuario.find();
  res.json(usuarios)
});
router.post('/', async function(req, res, next) {
  const {nombre, apellido} = req.body
  const nuevousuario = await Usuario.create({nombre, apellido})
  res.status(201).json(nuevousuario)
});
router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
