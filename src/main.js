const {
  writeDataArrayWithoutException,
} = require('./data');
const {
  getOperationTasks,
  getDiscipline,
} = require('./services');
const {
  getUniqueOperationTypes,
  getUniqueDisciplineIds,
} = require('./utilities');

const main = async () => {
  const tasks = await getOperationTasks();
  const uniqueOperationTypes = getUniqueOperationTypes(
    tasks.map(t => t.operationType));
  const uniqueDisciplineIds = getUniqueDisciplineIds(
    uniqueOperationTypes.map(t => t.discipline));
  const disciplines = await Promise.all(uniqueDisciplineIds.map(
    disciplineId => getDiscipline(disciplineId)));
  // writing data to mongodb
  writeDataArrayWithoutException('operationTypes', uniqueOperationTypes);
  writeDataArrayWithoutException('disciplines', disciplines);
};

module.exports = { main };
