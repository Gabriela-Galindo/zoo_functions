const data = require('../data/zoo_data');

function getSpecies(parametro) {
  const animalName = data.species.find((animal) => animal.id === parametro).name;
  const animalLocation = data.species.find((animal) => animal.id === parametro).location;
  const resultAnimal = { species: [], locations: [] };
  resultAnimal.species = animalName;
  resultAnimal.locations = animalLocation;
  return resultAnimal;
}

function getEmployeesCoverage(param) {
  const resultPerson = { id: '', fullname: '' };
  // eslint-disable-next-line array-callback-return
  const personInfo = data.employees.find((person) => {
    if (person.firstName === param.name
      || person.lastName === param.name
      || person.id === param.id) {
      resultPerson.id = person.id;
      resultPerson.fullname = `${person.firstName} ${person.lastName}`;
      return resultPerson;
    }
  });
  const animalsManaged = personInfo.responsibleFor.forEach(getSpecies());
  return animalsManaged;
}

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(getSpecies('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getEmployeesCoverage;
