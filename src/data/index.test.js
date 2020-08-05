const mongodb = require('mongodb');
const {
  writeDataArrayWithoutException,
} = require('./index');

jest.mock('mongodb');
const collectionMock = {
  insertMany: jest.fn().mockReturnValue(Promise.resolve('bar')),
};
const dbMock = {
  collection: jest.fn().mockReturnValue(collectionMock),
};
const mongoClientMock = {
  connect: jest.fn().mockReturnValue(Promise.resolve()),
  close: jest.fn().mockReturnValue(Promise.resolve()),
  db: jest.fn().mockReturnValue(dbMock),
};
mongodb.MongoClient.mockReturnValue(mongoClientMock);

test('writeDataArrayWithoutException', async () => {
  const res = await writeDataArrayWithoutException('collectionName', 'foo');
  expect(mongodb.MongoClient).toHaveBeenCalledWith(
    process.env.MONGODB_URI, { useUnifiedTopology: true });
  expect(mongoClientMock.connect).toHaveBeenCalledWith();
  expect(mongoClientMock.db).toHaveBeenCalledWith(process.env.MONGODB_DATABASE);
  expect(dbMock.collection).toHaveBeenCalledWith('collectionName');
  expect(collectionMock.insertMany).toHaveBeenCalledWith('foo');
  expect(mongoClientMock.close).toHaveBeenCalledWith();
  expect(res).toBe('bar');
});
