// setup-test-db.js
// Script to setup a test database for integration tests
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

(async () => {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
  console.log('Test database setup at', mongoUri);
  // You can add more setup logic here
  await mongoose.disconnect();
  await mongoServer.stop();
})();
