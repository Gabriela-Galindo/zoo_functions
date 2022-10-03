const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const newObject = {};
    data.species.map((element) => {
      newObject[element.name] = element.residents.length;
      return true;
    });
    return newObject;
  }
  if ('sex' in animal) {
    return data.species.find((target) => target.name === animal.specie)
      .residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return data.species.find((target) => target.name === animal.specie).residents.length;
}

// console.log(countAnimals({ specie: 'bears', sex: 'male' }));

module.exports = countAnimals;
