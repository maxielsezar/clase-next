const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://tomiiletelier_db_user:UddtHIxfTxzXoguV@cluster0.0hamyrb.mongodb.net/?appName=Cluster0');


app.get('/usuario', (req, res) => {
  res.send({nombre:'usuario1'})
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

}