var express = require('express');
var router = express.Router();

const Usuario = require('../modelos/Usuario')

/* GET users listing. */
router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios)
});

router.post('/',async function(req, res, next) {
  const {nombre, apellido} = req.body
  const nuevoUsuario= await Usuario.create({nombre, apellido})
  res.status(201).json(nuevoUsuario)
});

router.put('/', function(req, res, next) {
  res.send('update user');
});

router.delete('/', function(req, res, next) {
  res.send('delete user');
});


module.exports = router;
