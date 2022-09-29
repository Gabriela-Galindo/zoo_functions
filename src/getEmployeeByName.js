const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    const noName = {};
    return noName;
  }
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

// console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
