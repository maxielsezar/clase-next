const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 4000


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://tacs69yolo_db_user:TukOPEnN9teDYLR3@cluster0.sf46chv.mongodb.net/?appName=Cluster0');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
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
    res.send('Delete the book')
  })
  GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
