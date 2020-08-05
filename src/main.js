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
  for (disciplineId of uniqueDisciplineIds) {
    const discipline = await getDiscipline(disciplineId);
  }
};

module.exports = { main };
