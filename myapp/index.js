const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 4000

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://naticayul_db_user:Diseñador@cluster0.lnaccnw.mongodb.net/?appName=Cluster0');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get('/', (req, res) => {
  res.send ('Hello World!' )
})

app.get('/usuario', (req, res) => {
  res.send ({nombre:'usuario1', apellido: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})