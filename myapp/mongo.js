
const { MongoClient, ServerApiVersion } = require('mongodb');
<<<<<<< HEAD
const uri = "mongodb+srv://tacs69yolo_db_user:TukOPEnN9teDYLR3-@cluster0.sf46chv.mongodb.net/?appName=Cluster0";
=======
const uri = "mongodb+srv://gabrielarganaraz16_db_user:@cluster0.prugzym.mongodb.net/?appName=Cluster0";
>>>>>>> 0a57b9782e0db1d8478d2d927267820517e6444e

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
<<<<<<< HEAD

=======
//mongodb+srv://gabrielarganaraz16_db_user:<db_password>@cluster0.prugzym.mongodb.net/?appName=Cluster0
>>>>>>> 0a57b9782e0db1d8478d2d927267820517e6444e
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
