'use strict';

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let db;

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
  db = client.db('test');
  console.log('Connected to MongoDB');
});

function getServerCollection() {
  return db.collection('servers');
}

function createServer(server) {
  return getServerCollection().insertOne(server);
}

function getServer(id) {
  return getServerCollection().findOne({
    id
  });
}

function getAllServers() {
  return getServerCollection().find().toArray();
}

function deleteServer(id) {
  return getServerCollection().deleteOne({
    id
  });
}

function findServersByName(name) {
  return getServerCollection().find({
    name: {
      $regex: name,
      $options: 'i'
    }
  }).toArray();
}

/**
 * Deletes a server object.
 *
 * id String ID of the server to delete.
 * no response value expected for this operation
 **/
exports.serversDELETE = function (id) {
  return deleteServer(id)
    .then(() => {});
};


/**
 * Finds servers by name. The parameter is a string. Must check if a server name contains this string and return one or more servers found. Returns 404 if nothing is found.
 *
 * name String Name of the server(s) to retrieve.
 * returns List
 **/
exports.serversFindGET = function (name) {
  return findServersByName(name)
    .then((servers) => {
      if (servers.length === 0) {
        throw new Error(`No servers found with name ${name}`);
      }
      return servers;
    });
};


/**
 * Returns all servers if no parameters are passed. Returns a single server or 404 if there's no such a server when server id is passed as a parameter.
 *
 * id String ID of the server to retrieve. (optional)
 * returns List
 **/
exports.serversGET = function (id) {
  if (id) {
    return getServer(id)
      .then((server) => {
        if (!server) {
          throw new Error(`Server with id ${id} not found`);
        }
        return [server];
      });
  } else {
    return getAllServers();
  }
};


/**
 * Creates a server object. The server object is passed as a json-encoded message body.
 *
 * server Server Server object to create.
 * no response value expected for this operation
 **/
exports.serversPUT = function (server) {
  return createServer(server)
    .then((result) => {
      console.log(`Server created with id ${result.insertedId}`);
    });
};