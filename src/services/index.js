const axios = require('axios');

const _getApiData = async (endpoint) => {
  const res = await axios.get(`${process.env.BASE_API_URL}${endpoint}`);
  return res.data;
}

const getOperationTasks = () =>
  _getApiData('/operationtasks');

const getDiscipline = (disciplineId) =>
  _getApiData(`/disciplines/${disciplineId}`);


module.exports = {
  _getApiData,
  getOperationTasks,
  getDiscipline,
};
