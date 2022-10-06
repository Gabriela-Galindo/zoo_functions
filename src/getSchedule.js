/* eslint-disable quote-props */
const data = require('../data/zoo_data');

const scheduleInfo = data.hours;
const daysOfTheWeek = Object.keys(scheduleInfo);
const objectResult = {
  'Tuesday': {
    'officeHour': 'Open from 8am until 6pm',
    'exhibition': ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  'Wednesday': {
    'officeHour': 'Open from 8am until 6pm',
    'exhibition': ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  'Thursday': {
    'officeHour': 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  'Friday': {
    'officeHour': 'Open from 10am until 8pm',
    'exhibition': ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  'Saturday': {
    'officeHour': 'Open from 8am until 10pm',
    'exhibition': [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  'Sunday': {
    'officeHour': 'Open from 8am until 8pm',
    'exhibition': ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  'Monday': { 'officeHour': 'CLOSED', exhibition: 'The zoo will be closed!' },
};

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

  return objectResult;
}

module.exports = getSchedule;
