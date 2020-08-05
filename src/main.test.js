const data = require('./data');
const { main } = require('./main');
const services = require('./services');

jest.mock('./data');
data.writeDataArrayWithoutException.mockImplementation(() => { });
jest.mock('./services');
services.getOperationTasks.mockImplementation(() => [
  { operationType: { _id: 1, discipline: 'abc123' } },
  { operationType: { _id: 2, discipline: 'cde456' } },
  { operationType: { _id: 2, discipline: 'cde456' } },
  { operationType: { _id: 1, discipline: 'abc123' } },
  { operationType: { _id: 2, discipline: 'cde456' } },
  { operationType: { _id: 3, discipline: 'efg789' } },
  { operationType: { _id: 1, discipline: 'abc123' } },
  { operationType: { _id: 3, discipline: 'efg789' } },
  { operationType: { _id: 1, discipline: 'abc123' } },
  { operationType: { _id: 3, discipline: 'efg789' } },
]);
services.getDiscipline
  .mockReturnValueOnce(Promise.resolve({ _id: 1, name: 'abc123' }))
  .mockReturnValueOnce(Promise.resolve({ _id: 2, name: 'cde456' }))
  .mockReturnValueOnce(Promise.resolve({ _id: 3, name: 'efg789' }))
  ;

test('main', async () => {
  await main();
  expect(services.getOperationTasks).toHaveBeenCalledWith();
  expect(services.getDiscipline).toHaveBeenCalledWith('abc123');
  expect(services.getDiscipline).toHaveBeenCalledWith('cde456');
  expect(services.getDiscipline).toHaveBeenCalledWith('efg789');
  expect(data.writeDataArrayWithoutException).toHaveBeenCalledWith(
    'operationTypes', [
    { _id: 1, discipline: 'abc123' },
    { _id: 2, discipline: 'cde456' },
    { _id: 3, discipline: 'efg789' },
  ]);
  expect(data.writeDataArrayWithoutException).toHaveBeenCalledWith(
    'disciplines', [
    { _id: 1, name: 'abc123' },
    { _id: 2, name: 'cde456' },
    { _id: 3, name: 'efg789' },
  ]);
});
