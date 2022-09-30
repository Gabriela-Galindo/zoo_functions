const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = {
    adult: 0,
    child: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      result.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      result.adult += 1;
    } else {
      result.senior += 1;
    }
  });
  return result;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.entries(entrants).length === 0) {
    return 0;
  }
  const total = countEntrants(entrants);
  const valueAdult = total.adult * 49.99;
  const valueChild = total.child * 20.99;
  const valueSenior = total.senior * 24.99;
  return valueAdult + valueChild + valueSenior;
}

// console.log(calculateEntry([
//   { name: 'josé', age: 5 },
//   { name: 'maria', age: 50 },
// ]));

module.exports = { calculateEntry, countEntrants };
