const data = require('../data/zoo_data');

const scheduleInfo = data.hours;
const daysOfTheWeek = Object.keys(scheduleInfo);

function getDay(day) {
  if (day === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  const animalExhibition = data.species.filter((specie) => specie.availability.includes(day))
    .map((e) => e.name);
  const { open, close } = scheduleInfo[day];
  if (daysOfTheWeek.includes(day)) {
    return {
      [day]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: animalExhibition,
      },
    };
  }
}

const objectResult = getDay(daysOfTheWeek[0]);

function getSchedule(scheduleTarget) {
  if (data.species.map((element) => element.name).includes(scheduleTarget)) {
    return data.species.find((animal) => animal.name === scheduleTarget).availability;
  }
  if (scheduleTarget === 'Monday') {
    return getDay('Monday');
  }
  if (daysOfTheWeek.includes(scheduleTarget)) {
    return getDay(scheduleTarget);
  }
  return getDay(daysOfTheWeek[0]);
}

console.log(objectResult);
module.exports = getSchedule;
