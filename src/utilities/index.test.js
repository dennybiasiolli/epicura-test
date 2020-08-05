const {
  getUniqueOperationTypes,
  getUniqueDisciplineIds,
} = require('./index');

test('getUniqueOperationTypes', () => {
  const res = getUniqueOperationTypes([
    { _id: 1, foo: 'bar 1' },
    { _id: 2, foo: 'bar 2' },
    { _id: 1, foo: 'bar 1' },
    { _id: 3, foo: 'bar 3' },
    { _id: 2, foo: 'bar 2' },
    { _id: 3, foo: 'bar 3' },
  ]);
  expect(res).toHaveLength(3);
  expect(res).toEqual([
    { _id: 1, foo: 'bar 1' },
    { _id: 2, foo: 'bar 2' },
    { _id: 3, foo: 'bar 3' },
  ]);
});

test('getUniqueDisciplineIds', () => {
  const res = getUniqueDisciplineIds([
    'abc123',
    'def456',
    'abc123',
    'ghi789',
    'def456',
    'ghi789',
  ]);
  expect(res).toHaveLength(3);
  expect(res).toEqual([
    'abc123',
    'def456',
    'ghi789',
  ]);
});
