const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

module.exports = router;    


const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("users");

  // Update all documents with age less than 30 to have age 30
  collection.updateMany(
    { age: { $lt: 30 } },
    { $set: { age: 30 } },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.result.nModified} documents updated`);
      client.close();
    }
  );
});
