const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://tomiiletelier_db_user:UddtHIxfTxzXoguV@cluster0.0hamyrb.mongodb.net/?appName=Cluster0');


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

  .delete((req,res) => {
    res.send ('Borrar libro')
  })

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

}