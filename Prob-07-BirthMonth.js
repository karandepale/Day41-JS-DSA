/*
Write a Program to generate a birth month of 50 individuals
between the year 92 & 93. Find all the individuals having birthdays
in the same month. Store it to finally print. */

function generateBirthMonths(numOfIndividuals) {
    const birthMonths = [];
  
    for (let i = 0; i < numOfIndividuals; i++) {
      // Generate a random birth month between 1 and 12
      const month = Math.floor(Math.random() * 12) + 1;
  
      // Generate a random birth year between 1992 and 1993
      const year = Math.floor(Math.random() * (1993 - 1992 + 1)) + 1992;
  
      // Combine the month and year to represent the birthdate
      const birthdate = new Date(year, month - 1, 1);
  
      birthMonths.push({
        month: birthdate.toLocaleString('default', { month: 'long' }),
        year: birthdate.getFullYear()
      });
    }
  
    return birthMonths;
  }
  
  function findSameMonthBirthdays(birthMonths) {
    const sameMonthBirthdays = {};
  
    birthMonths.forEach(person => {
      const { month, year } = person;
  
      if (!sameMonthBirthdays[month]) {
        sameMonthBirthdays[month] = [];
      }
  
      sameMonthBirthdays[month].push(year);
    });
  
    return sameMonthBirthdays;
  }
  
  const birthMonthsArray = generateBirthMonths(50);
  const sameMonthBirthdays = findSameMonthBirthdays(birthMonthsArray);
  
  for (const month in sameMonthBirthdays) {
    console.log(`Birthdays in ${month}:`);
    console.log(sameMonthBirthdays[month]);
    console.log();
  }
  


