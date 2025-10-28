const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 4005

//b6bbEnULzcbXunO//

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://mongodb+srv://ibanezenzo18_db_user:<b6bbEnULzcbXunO>@cluster0.xpflumw.mongodb.net/?appName=Cluster0');
 }

 app.get('/', (req, res) => {
  res.send('Hello World holaa!')
})

 app.get('/usuario', (req, res) => {
  res.send({nombre :'usuario1'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
