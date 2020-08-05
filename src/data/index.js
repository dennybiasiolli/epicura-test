const { MongoClient } = require('mongodb');

const writeDataArrayWithoutException = async (collectionName, dataArray) => {
  const client = new MongoClient(
    process.env.MONGODB_URI, { useUnifiedTopology: true });
  let res;
  try {
    await client.connect();
    const database = client.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(collectionName);
    res = await collection.insertMany(dataArray).catch(() => null);
  } finally {
    await client.close();
  }
  return res;
};

module.exports = {
  writeDataArrayWithoutException,
}
