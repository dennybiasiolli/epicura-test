const axios = require('axios');
const {
  _getApiData,
  getOperationTasks,
  getDiscipline,
} = require('./index');

jest.mock('axios');
axios.get.mockImplementation(() => Promise.resolve({ data: 'foo' }));

test('_getApiData', async () => {
  axios.get.mockClear();
  const res = await _getApiData('/aa');
  expect(axios.get).toHaveBeenCalledWith(
    `${process.env.BASE_API_URL}/aa`,
  );
  expect(res).toBe('foo');
});

test('getOperationTasks', async () => {
  axios.get.mockClear();
  const res = await getOperationTasks();
  expect(axios.get).toHaveBeenCalledWith(
    `${process.env.BASE_API_URL}/operationtasks`,
  );
  expect(res).toBe('foo');
});

test('getDiscipline', async () => {
  axios.get.mockClear();
  const res = await getDiscipline('1234');
  expect(axios.get).toHaveBeenCalledWith(
    `${process.env.BASE_API_URL}/disciplines/1234`,
  );
  expect(res).toBe('foo');
});
