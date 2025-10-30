const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 4005

//b6bbEnULzcbXunO//

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://ibanezenzo18_db_user:gLuAtWEhflxU6i5I@cluster0.xpflumw.mongodb.net/?appName=Cluster0");
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
    res.send('delete the book')
  })

.put((req, res) => {
    res.send('actualizar usuario')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
