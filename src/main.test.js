const { main } = require('./main');
const services = require('./services');

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
services.getDiscipline.mockImplementation(() => ['abc123', 'cde456', 'efg789']);

test('main', () => {
  main();
  expect(services.getOperationTasks).toHaveBeenCalled();
});
