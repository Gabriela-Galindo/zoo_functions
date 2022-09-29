const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (data.species.id === undefined) {
    const noId = [];
    return noId;
  }
  return data.species.filter((specie) => ids.some((id) => id === data.species.id));
}

console.log(getSpeciesByIds('lionId'));

module.exports = getSpeciesByIds;
