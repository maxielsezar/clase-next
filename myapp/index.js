const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 3000

app.get('/usuario', (req, res) => {
  res.send('Hello mother fuckers')
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://gabrielarganaraz16_db_user:blHpzJFl5yemLFwS@cluster0.prugzym.mongodb.net/?appName=Cluster0');
 }
app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
  .delete((req, res) => {
    res.send('Eliminando libro')
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

