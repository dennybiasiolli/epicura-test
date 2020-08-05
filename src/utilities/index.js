const getUniqueOperationTypes = (operationTypes) =>
  operationTypes.reduce((acc, t) => {
    if (!acc.singleIds.includes(t._id)) {
      return {
        singleIds: acc.singleIds.concat(t._id),
        elems: acc.elems.concat(t),
      }
    }
    return acc;
  }, { singleIds: [], elems: [] }).elems;

const getUniqueDisciplineIds = (disciplineIds) =>
  disciplineIds.reduce((acc, id) => {
    if (!acc.includes(id)) {
      return acc.concat(id);
    }
    return acc;
  }, []);

module.exports = {
  getUniqueOperationTypes,
  getUniqueDisciplineIds,
};
