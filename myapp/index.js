<<<<<<< HEAD
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 4000

=======
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 3000

app.get('/usuario', (req, res) => {
  res.send('Hello mother fuckers')
})
>>>>>>> 0a57b9782e0db1d8478d2d927267820517e6444e

main().catch(err => console.log(err));

async function main() {
<<<<<<< HEAD
  await mongoose.connect('mongodb+srv://tacs69yolo_db_user:TukOPEnN9teDYLR3@cluster0.sf46chv.mongodb.net/?appName=Cluster0');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
=======
  await mongoose.connect('mongodb+srv://gabrielarganaraz16_db_user:blHpzJFl5yemLFwS@cluster0.prugzym.mongodb.net/?appName=Cluster0');
 }
>>>>>>> 0a57b9782e0db1d8478d2d927267820517e6444e
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
<<<<<<< HEAD
    res.send('Delete the book')
  })
  GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
=======
    res.send('Eliminando libro')
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

>>>>>>> 0a57b9782e0db1d8478d2d927267820517e6444e
